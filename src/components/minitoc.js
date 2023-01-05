// add following line if new file
import React, { useEffect } from 'react'
import '../App.css'
import $ from 'jquery'

export const MiniToc = () => {
  useEffect(() => {
    $(() => {
      let currentLevel_old = 0
      let currentItem_old = $('#minitoc_root')
      let currentHeaderPath = [currentItem_old]
      console.log(`currentHeaderPath=${currentHeaderPath}`)
      // TODO handle case where no h1 tag exists in the page, or several h1 tags
      $('#content')
        .find('h1, h2,h3,h4')
        .each(function () {
          var $currentPageItem = $(this)
          const tagName = $currentPageItem[0].tagName
          console.log(tagName)
          const currentLevel = getCurrentLevel(tagName)
          var currentId = $currentPageItem.attr('id')
          var $li = $('<li/>')
          var $a = $('<a/>', {
            text: $currentPageItem.text(),
            href: '#' + currentId,
            title: $currentPageItem.text()
          })
          $li = $('<li/>')
          $a = $('<a/>', {
            text: $currentPageItem.text(),
            href: '#' + currentId,
            title: $currentPageItem.text()
          })
          $a.appendTo($li)
          currentId = $currentPageItem.attr('id')
          let $currentParent
          let $ul
          console.log(currentHeaderPath)
          // ex: from H2 > H3
          if (currentLevel > currentLevel_old) {
            $currentParent = currentHeaderPath[currentHeaderPath.length - 1]
            console.log($currentParent)
            $ul = $('<ul/>')

            $currentParent.append($ul)
            $ul.append($li)
            currentHeaderPath.push($li)
          }
          // ex: from H4 to H2
          if (currentLevel < currentLevel_old) {
            currentHeaderPath = currentHeaderPath.slice(0, currentLevel + 1)
            $currentParent = currentHeaderPath[currentHeaderPath.length - 1]
            currentHeaderPath.push($li)
            $currentParent.append($li)
          }
          // ex: from H3 to H3
          if (currentLevel === currentLevel_old) {
            $currentParent = currentHeaderPath[
              currentHeaderPath.length - 1
            ].parent()
            currentHeaderPath.pop()
            // $currentParent = currentHeaderPath[currentHeaderPath.length - 1]
            currentHeaderPath.push($li)
            $currentParent.append($li)
          }
          console.log(currentHeaderPath.length, $li.text())
          currentId = $currentPageItem.attr('id')

          currentLevel_old = currentLevel
        })
    })
  }, [])

  const getCurrentLevel = tagName => {
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
