// add following line if new file
import React, { useEffect } from 'react'
import '../App.css'
import $ from 'jquery'

export const MiniToc = () => {
  useEffect(() => {
    $(() => {
      $('h1').css('color', 'red')
      $('.minitoc').append(' <p>toto toto toto </p>')
      let currentLevel_old = 0
      $('#content')
        .find('h1,h2,h3,h4')
        .each(function () {
          var $item = $(this)
          const tagName = $(this)[0].tagName
          console.log(tagName)
          const currentLevel = getCurrentLevel(tagName)
          console.log(currentLevel)
          var $id = $(this).attr('id')
          var li = $('<li/>')
          var a = $('<a/>', {
            text: $item.text(),
            href: '#' + $id,
            title: $item.text()
          })
          a.appendTo(li)
          $('.minitoc ul').append(li)
        })
    })
  }, [])

  const getCurrentLevel = tagName => {
    return Number(tagName.substring(1))
  }

  return (
    <div className='minitoc'>
      <ul></ul>
    </div>
  )
}
// add following line if new file
export default MiniToc
