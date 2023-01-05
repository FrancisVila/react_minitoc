// add following line if new file
import React, { useEffect, useState } from 'react'
import './minitoc.css'
import $ from 'jquery'
import tocIcon from './table-of-contents-icon-10.png'

export const MiniToc = () => {
  const [folded_, folded_set] = useState(false)

  useEffect(() => {
    $(() => {
      let headerLevel_old = 0
      let tocItem_old = $('#minitoc_root')
      let headerPath = [tocItem_old]
      // TODO handle case where no h1 tag exists in the page, or several h1 tags
      $('#content')
        .find('h1, h2,h3,h4')
        .each(function () {
          var $pageItem = $(this)
          const tagName = $pageItem[0].tagName
          console.log(tagName)
          const headerLevel = getHeaderLevel(tagName)
          var currentId = $pageItem.attr('id')
          var $li = $('<li/>')
          var $a = $('<a/>', {
            text: $pageItem.text(),
            href: '#' + currentId,
            title: $pageItem.text()
          })
          $li = $('<li/>')
          $a = $('<a/>', {
            text: $pageItem.text(),
            href: '#' + currentId,
            title: $pageItem.text()
          })
          $a.appendTo($li)
          currentId = $pageItem.attr('id')
          let $tocParent
          let $ul
          console.log(headerPath)
          // ex: from H2 > H3
          if (headerLevel > headerLevel_old) {
            $tocParent = headerPath[headerPath.length - 1]
            console.log($tocParent)
            $ul = $('<ul/>')

            $tocParent.append($ul)
            $ul.append($li)
            headerPath.push($li)
          }
          // ex: from H4 to H2
          if (headerLevel < headerLevel_old) {
            headerPath = headerPath.slice(0, headerLevel + 1)
            $tocParent = headerPath[headerPath.length - 1]
            headerPath.push($li)
            $tocParent.append($li)
          }
          // ex: from H3 to H3
          if (headerLevel === headerLevel_old) {
            $tocParent = headerPath[headerPath.length - 1].parent()
            headerPath.pop()
            // $currentParent = currentHeaderPath[currentHeaderPath.length - 1]
            headerPath.push($li)
            $tocParent.append($li)
          }
          console.log(headerPath.length, $li.text())
          currentId = $pageItem.attr('id')

          headerLevel_old = headerLevel
        })

      $(window).on('scroll', () => {
        const docViewTop = $(window).scrollTop()
        const docViewBottom = docViewTop + $(window).height()
        $('#content')
          .find('h3,h4,h5')
          .each(function () {
            const elemTop = $(this).offset().top
            const thisId = $(this).attr('id')
            const thisTocElem = $(`[href="#${thisId}"]`)
            console.log(thisTocElem)
            if (elemTop > docViewBottom || elemTop < docViewTop) {
              $(thisTocElem)
                // .parent()
                .addClass('outOfView')
              // .removeClass('inView')
            } else
              $(thisTocElem)
                // .parent()
                .removeClass('outOfView')
            // .addClass('inView')
          })
      })
    })
  }, [])

  const getHeaderLevel = tagName => {
    return Number(tagName.substring(1))
  }

  const foldedOrNot = () => {
    const f = folded_ ? 'folded' : ''
    const ret = 'minitoc ' + f
    console.log(ret)
    return ret
  }

  const handleOpenClose = () => {
    folded_set(!folded_)
  }

  return (
    <div className={foldedOrNot()}>
      <p onClick={handleOpenClose}>In this page:</p>
      <div id='minitoc_root'></div>
    </div>
  )
}
// add following line if new file
export default MiniToc
