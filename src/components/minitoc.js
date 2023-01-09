// add following line if new file
import React, { useEffect, useState } from "react";
import "./minitoc.css";
import $ from "jquery";

export const MiniToc = () => {
  // state variables end in "_" (underscore), state edit functions end in "_set"
  const [folded_, folded_set] = useState(false);

  useEffect(() => {
    // in jQuery: jQuery elements start with "$"
    // variables starting with "$page" represent elements from the page
    // varialbes starting with "$toc" represent element from the ToC
    $(() => {
		const docViewTop = $(window).scrollTop();
		const windowHeight = $(window).height();
		const docViewBottom = docViewTop + windowHeight;
		
		// console.log('docViewBottom=', docViewBottom)
		const pageWidth = $("#root")[0].offsetWidth
		const tagsToHideToc = ['table', 'tr', 'td', 'th', 'tbody', 'thead', 'img']
		console.log("1234567890")
		const hideTocIfAppropriate =()=> {
			// alert( (document.elementFromPoint(pageWidth-10,0)).toString())
			let somethingClashWithToC = false
			console.log('===========================')
			for(let y=0 ; y < windowHeight; y=y+10) {
				
				const domElemRight = document.elementFromPoint(pageWidth-250,y)
				
				if (domElemRight )
					{
					// console.log("domElemRight=", domElemRight, 'y=',y,)
						
					const rightTagName = domElemRight.tagName.toLowerCase()
					if ((tagsToHideToc.includes(rightTagName))  )
						somethingClashWithToC = true
						// console.log(rightTagName)
					}
			}
		
			// const domElemTopRight = document.elementFromPoint(pageWidth-10,0)
			// // const domElemBottomRight = document.elementFromPoint(pageWidth-10,docViewTop-10)
			// const domElemBottomRight = document.elementFromPoint(pageWidth-10,500)
			// // console.log(domElemTopRight)
			// const topRightTagName = domElemTopRight.tagName.toLowerCase()
			// const bottomRightTagName = domElemBottomRight.tagName.toLowerCase()
		
			if (somethingClashWithToC)
				{
					$('#minitoc').hide()
					// console.log(pageWidth)
				}
			else $('#minitoc').show()
		  }


	 hideTocIfAppropriate()
      let headerLevel_old = 0;
      let $tocItem_root = $("#minitoc_root");
      // headerPath is an array of jQuery elements from the ToC giving the path to the currently processed header from the page
      let headerPath = [$tocItem_root];
      $("#content")
        .find("h1, h2,h3,h4")
        .each(function () {
          var $pageItem = $(this);
          const tagName = $pageItem[0].tagName;
        //   console.log(tagName);
          const headerLevel = getHeaderLevel(tagName); // 1 for H1, 2 for H2? etc
          const pageItemTitle = $pageItem.text();
          const pageItemId =
            $pageItem.attr("id") || sluggify(pageItemTitle, $pageItem); // provide id for page elem if none available
          let $toc_li = $("<li/>");
          let $toc_a = $("<a/>", {
            text: pageItemTitle,
            href: "#" + pageItemId,
            title: pageItemTitle
          });
          $toc_a.appendTo($toc_li);
          let $tocParent;
          let $toc_ul;
        //   console.log(headerPath);
          // ex: from H2 to H3 (move to child in ToC)
          if (headerLevel > headerLevel_old) {
            $tocParent = headerPath[headerPath.length - 1];
            // console.log($tocParent);
            $toc_ul = $("<ul/>");
            $tocParent.append($toc_ul);
            $toc_ul.append($toc_li);
            headerPath.push($toc_li);
          }
          // ex: from H4 to H2 (move to uncle in ToC)
          if (headerLevel < headerLevel_old) {
            headerPath = headerPath.slice(0, headerLevel + 1);
            $tocParent = headerPath[headerPath.length - 1];
            headerPath.push($toc_li);
            $tocParent.append($toc_li);
          }
          // ex: from H3 to H3 (move to sibling in ToC)
          if (headerLevel === headerLevel_old) {
            $tocParent = headerPath[headerPath.length - 1].parent();
            headerPath.pop();
            headerPath.push($toc_li);
            $tocParent.append($toc_li);
          }
        //   console.log(headerPath.length, $toc_li.text());

          headerLevel_old = headerLevel;
        });

      // hides ToC elements H3 and above for page elements not in view of the reader
      $(window).on("scroll", () => {
		// console.log("AAAAAAAAAAAAAA")
		 hideTocIfAppropriate()
		// console.log("ZZZZZZZZZZZZZ") 
		let  numberToShow = 0;
		let numberToHide = 0;
		let totalNumber = 0
		$("h3,h4,h5")
		.each( (toto) => {
			console.log(toto)
			const $pageElem = $(this);
			
			const pageElemId = $(this).attr("id");
            const $tocElem = $('[href="#' + pageElemId + '"]');
			console.log("$tocElem=", $tocElem)
			$tocElem.addClass("outOfView")
			totalNumber++
		})
        // $("h3,h4,h5")
        //   .each( () => {
        //     const $pageElem = $(this);
		// 	const off = $pageElem.offset()
		// 	if (off){
		// 	//	console.log("$pageElem=", $pageElem)
        //     const pageElemTop = off.top;
        //     const pageElemId = $pageElem.attr("id");
        //     const $tocElem = $('[href="#' + pageElemId + '"]');
        //     // console.log($tocElem);
        //     if (pageElemTop > docViewBottom || pageElemTop < docViewTop) {
        //       $($tocElem).addClass("outOfView");
		// 	  numberToHide++
        //     } 
		// 	else {$($tocElem).removeClass("outOfView");}
		// numberToShow++
		// }
        //   });
		  console.log('numberToHide=', numberToHide)
		  console.log('numberToShow=', numberToShow)
		  console.log('totalNumber=', totalNumber)
      });



    });
  }, []);



  // turns any string into a valid id, and attributes that id to a jQuery element
  const sluggify = (s, elem) => {
    const ret = s.replace(/[^a-zA-Z\d]/g, "_");
    elem.attr("id", ret);
    // console.log("in sluggify, return", ret);
    return ret;
  };

  // "H1" => "1", "H2" => "2", etc
  const getHeaderLevel = (tagName) => {
    return Number(tagName.substring(1));
  };

  // returns "minitoc folded" or "minitoc", depending whether the user wants minitoc visible or not
  const foldedOrNotCSS = () => {
    const f = folded_ ? "folded" : "";
    const ret = "minitoc " + f;
    // console.log(ret);
    return ret;
  };

  // activated when user clicks on "In this page:"
  const handleOpenClose = () => {
    folded_set(!folded_);
  };

  const openCloseIcon = () => {
	if (folded_) return '⇲'
	else return '⇱' 
  }

  return (
    <div id="minitoc" className={foldedOrNotCSS()}>
      <p onClick={handleOpenClose}>In this page: {openCloseIcon()}</p>

      <div id="minitoc_root"></div>
    </div>
  );
};
// add following line if new file
export default MiniToc;
