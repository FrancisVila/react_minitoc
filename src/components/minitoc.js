// add following line if new file
import React, { useEffect, useState } from 'react'
import './minitoc.css'
import $ from 'jquery'
import propTypes from 'prop-types'

export const MiniToc = props => {
	const contentSelector = props.contentSelector || '#content' // the selector of the container tag containing the html headers of the page
	const levelsToShow = props.levelsToShow || 5 // in the toc show headers h1, h2, h3, h4, h5
	const widthInPageForToc = props.widthInPageForToc || 250 // if there's any wide table or image 250+10=260px from the right edge, hide the ToC. Width of ToC will be 250-20=230)
	const tagsToHideToc = props.tagsToHideToc || [ 'table', 'tr', 'td', 'th', 'tbody', 'thead', 'img' ] // hide the toc if one of these elements appears

	// NAMING CONVENTIONS
	// React state variables end with "_" (underscore), state edit functions end in "_set"
	const [folded_, folded_set] = useState(false)

	useEffect(() => {
		// NAMING CONVENTIONS
		// in jQuery: variables representing jQuery elements start with "$"
		// variables starting with "$page" represent jQuery elements from the page
		// variables starting with "$toc" represent jQuery element in the ToC
		// variables starting with "dom" are DOM elements
		const windowHeight = () => $(window).height()
		var minitocLeftStart = $('#minitoc').offset().left
		console.log('minitocLeftStart', minitocLeftStart)

		//  Begin jQuery code ========================================================================
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
				let $tocItem_root = $('#minitocRoot')
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
	}, [])

	// End main jQuery code ===================================================================

	// Functions ==============================================================================

	// turns any string into a valid id, and attributes that id to a jQuery element
	const sluggify = (s, elem) => {
		const ret = s.replace(/[^a-zA-Z\d]/g, '_')
		elem.attr('id', ret)
		// console.log("in sluggify, return", ret);
		return ret
	}

	// "H1" => "1", "H2" => "2", etc
	const getHeaderLevel = tagName => {
		return Number(tagName.substring(1))
	}

	// returns "minitoc folded" or "minitoc", depending whether the user wants minitoc visible or not
	const foldedOrNotCSS = () => {
		const f = folded_ ? 'folded' : ''
		const ret = 'minitoc ' + f
		// console.log(ret);
		return ret
	}

	// activated when user clicks on "In this page:" to fold / unfold the minitoc
	const handleOpenClose = () => {
		folded_set(!folded_)
	}

	//
	const openCloseIcon = () => {
		if (folded_) return '⇲'
		else return '⇱'
	}

	// Begin JSX return =============================================================================

	return (
		<div
			id='minitoc'
			className={foldedOrNotCSS()}
			style={{ width: widthInPageForToc - 20 }}
		>
			{/* These p tags are hidden, they are like a message board to pass values from React to jQuery */}
			<p id='contentSelector' className='passValueFromReactToJquery'>
				{contentSelector}
			</p>
			<p id='levelsToShow' className='passValueFromReactToJquery'>
				{levelsToShow}
			</p>
			<p id='widthInPageForToc' className='passValueFromReactToJquery'>
				{widthInPageForToc}
			</p>
			<p id='tagsToHideToc' className='passValueFromReactToJquery'>
				{JSON.stringify(tagsToHideToc)}
			</p>

			{/* The "In this page" header of the minitoc, where the user clicks to fold/unfold  */}
			<p
				id="clickMe"
				title='click here to fold/unfold the mini table of contents'
				onClick={handleOpenClose}
				className='inThisPage'
			>
				In this page:{' '}
				<span className='openCloseIcon'>&nbsp;{openCloseIcon()}&nbsp;</span>
			</p>

			{/* This is where the minitoc is going to build  */}
			<div id='minitocRoot' title='minitoc root' style={{ display: folded_ ? 'none' : 'block' }}></div>
		</div>
	)
}

MiniToc.propTypes = {
	contentSelector: propTypes.string,
	levelsToShow: propTypes.number,
	widthInPageForToc: propTypes.number,
	tagsToHideToc: propTypes.arrayOf(propTypes.string)
}
// add following line if new file
export default MiniToc
