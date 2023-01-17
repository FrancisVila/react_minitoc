import { useState } from 'react'
import $ from 'jquery'

const AppTest = () => {
  const [collapsed, setCollapsed] = useState(false)
  const handleOpenClose = () => {
    console.log('open close')
    setCollapsed(!collapsed)
  }

  $(() => {
	// retrieve react parameters from invisible html tags (see JSX components in component's "render" return)
	const levelsToShow = Number($('#levelsToShow').text()) // in the toc show headers h1, h2, h3, h4
	// const widthInPageForToc = Number($('#widthInPageForToc').text()) // if there's any table or image 250px from the right edge, hide the ToC)
	const tagsToHideToc = JSON.parse($('#tagsToHideToc').text()) // hide the toc if one of these elements appears
	const contentSelector = $('#contentSelector').text()
	// hides ToC elements H3 and above for page elements not in view of the reader
	$(window).on('scroll', () => {
		const d = new Date()
		console.log('AAAAAAAAAAAAAA', d.getTime())
		console.log('scroll ----------------------------------')
		// console.log("ZZZZZZZZZZZZZ")
		hideAllOrPartOfToc()
	})

	$(window).on('resize', () => {
		const d = new Date()
		console.log('AAAAAAAAAAAAAA', d.getTime())
		console.log('resize --------------------------------')
		// console.log("ZZZZZZZZZZZZZ")
		minitocLeftStart = $('#minitoc').offset().left
		hideAllOrPartOfToc()
	})

	const headersSelector = () => {
		console.log('HHHHHHHHHHHHHHHHHH')
		console.log('levelsToShow', levelsToShow)
		let arr = []
		for (let i = 0; i < levelsToShow + 1; i++) {
			console.log('i', i)
			let h = 'h' + i
			arr.push(h)
		}
		const ret = arr.join(',')
		console.log('headersSelector()', ret)
		return ret
	}
	const headersSelector2 = () => {
		let arr = []
		console.log('levelsToShow', levelsToShow)
		for (let i = 3; i < levelsToShow + 1; i++) {
			console.log('i', i)
			let h = 'h' + i
			arr.push(h)
		}
		const ret = arr.join(',')
		console.log('headersSelector()', ret)
		return ret
	}

	// console.log('docViewBottom=', docViewBottom)
	console.log('1234567890')

	// initial build of the ToC
	const buildToc = () => {
		let headerLevel_old = 0
		let $tocItem_root = $('#minitoc_root')
		// headerPath is an array of jQuery elements from the ToC giving the path to the currently processed header from the page
		let headerPath = [$tocItem_root]
		let selectors = headersSelector() // by default, "h1,h2,h3,h4"
		$(contentSelector)
			.find(selectors)
			.each(function () {
				var $pageItem = $(this)
				const tagName = $pageItem[0].tagName
				//   console.log(tagName);
				const headerLevel = getHeaderLevel(tagName) // 1 for H1, 2 for H2? etc
				const pageItemTitle = $pageItem.text()
				const pageItemId =
					$pageItem.attr('id') || sluggify(pageItemTitle, $pageItem) // provide id for page elem if none available
				let $toc_li = $('<li/>')
				let $toc_a = $('<a/>', {
					text: pageItemTitle,
					href: '#' + pageItemId,
					title: pageItemTitle
				})
				$toc_a.appendTo($toc_li)
				let $tocParent
				let $toc_ul
				//   console.log(headerPath);
				// ex: from H2 to H3 (move to child in ToC)
				if (headerLevel > headerLevel_old) {
					$tocParent = headerPath[headerPath.length - 1]
					// console.log($tocParent);
					$toc_ul = $('<ul/>')
					$tocParent.append($toc_ul)
					$toc_ul.append($toc_li)
					headerPath.push($toc_li)
				}
				// ex: from H4 to H2 (move to uncle in ToC)
				if (headerLevel < headerLevel_old) {
					headerPath = headerPath.slice(0, headerLevel + 1)
					$tocParent = headerPath[headerPath.length - 1]
					headerPath.push($toc_li)
					$tocParent.append($toc_li)
				}
				// ex: from H3 to H3 (move to sibling in ToC)
				if (headerLevel === headerLevel_old) {
					$tocParent = headerPath[headerPath.length - 1].parent()
					headerPath.pop()
					headerPath.push($toc_li)
					$tocParent.append($toc_li)
				}
				//   console.log(headerPath.length, $toc_li.text());
				headerLevel_old = headerLevel
			})
	}

	// selectively hide part of the ToC
	const hideTocElems = () => {
		let selectors = headersSelector2() // by default, "h3,h4"
		$('#content')
			.find(selectors)
			.each(function () {
				const domPageElem = $(this)[0]
				const offsetTop = this.offsetTop
				// const $pageElem = $(this)
				// console.log('domPageElem', domPageElem)
				const pageElemId = domPageElem['id']
				const $tocElem = $('[href="#' + pageElemId + '"]')
				// console.log('$tocElem=', $tocElem)
				$tocElem.parent().addClass('outOfView')
				//	console.log("domPageElem=", domPageElem)

				// console.log($tocElem);
				if (
					offsetTop > $(window).scrollTop() + $(window).height() ||
					offsetTop < $(window).scrollTop()
				) {
					console.log(pageElemId, offsetTop)
					$($tocElem)
						.parent()
						.addClass('outOfView')
				} else {
					$($tocElem)
						.parent()
						.removeClass('outOfView')
					$($tocElem)
						.parentsUntil('div')
						.removeClass('outOfView')
				}
			})
	}

	// hide all or part of the toc
	const hideAllOrPartOfToc = () => {
		let somethingClashWithToc = false
		console.log('entering hideAllOrPartOfToc=')
		// scan the page displayed in the browser (apparent to the user) from top to bottom

		for (let y = 0; y < windowHeight(); y = y + 10) {
			const domElemRight = document.elementFromPoint(
				minitocLeftStart - 20,
				y
			)

			console.log(
				'domElemRight, minitocLeftStart,  y ==',
				domElemRight,
				minitocLeftStart,
				y
			)
			if (domElemRight) {
				// console.log("domElemRight=", domElemRight, 'y=',y,)

				const rightTagName = domElemRight.tagName.toLowerCase()
				console.log('rightTagName', rightTagName)
				if (tagsToHideToc.includes(rightTagName)) {
					console.log(domElemRight, 'ret equals true')
					somethingClashWithToc = true
				}
			}
		}
		if (somethingClashWithToc) {
			// hide all the ToC
			console.log('In hideAllOrPartOfToc, hiding ToC')
			$('#minitoc').addClass('hideToc')
		} else {
			$('#minitoc').removeClass('hideToc')
			console.log('In hideAllOrPartOfToc, showing ToC')
			hideTocElems()
		}
	}

	// do the following on load
	buildToc()
	hideAllOrPartOfToc()
})


  return (
    <div id="minitoc">
      <p
        title="click here to fold/unfold the mini table of contents"
        onClick={handleOpenClose}
        className="inThisPage"
      >
        openCloseIcon
      </p>
      <div
        id="minitoc_root"
        title="minitoc root"
        style={{ display: collapsed ? 'none' : 'block' }}
      ></div>
    </div>
  )
}

export default AppTest

