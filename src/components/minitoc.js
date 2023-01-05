// add following line if new file
import React, { useEffect } from 'react'
import '../App.css'
import $ from 'jquery'

export const MiniToc = () => {
  useEffect(() => {
    $(() => {
      let headerLevel_old = 0
      let tocItem_old = $('#minitoc_root')
      let headerPath = [tocItem_old]
      console.log(`currentHeaderPath=${headerPath}`)
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
    })
  }, [])

  const getHeaderLevel = tagName => {
    return Number(tagName.substring(1))
  }

  return (
    <div className='minitoc'>
      <p>In this page:</p>
      <div id='minitoc_root'></div>
    </div>
  )
}
// add following line if new file
export default MiniToc
