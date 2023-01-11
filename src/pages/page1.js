// add following line if new file
import React from 'react'
import bigPicture from './bigPicture.png'
import './page.css'


export const Page1 = () => {
  return (
    <div id='content'>

<h1 id="aaaa">Mini ToC demo</h1>
      
	  <div className="warning " >
   <span className="aui-icon aui-icon-small aui-iconfont-error confluence-information-macro-icon"> </span>
   <ol>
	<li> <p><b>SCROLL DOWN</b> to see:</p>
	<ul>
	<li>The Mini ToC on the right <b>disappear</b> when it might clash with a wide table or image..	</li>
	<li>The titles in the Mini ToC fold or unfold as headers move in or out of the visible window..	</li>
	</ul>
	</li>
	<li>
	<p>Click on "<b>In this page</b>" above the Mini ToC to minimize/maximize it </p>
	</li>
	</ol>
  </div>
	  <h2>FAQ</h2>
	  <h3>Q: What is this demo trying to prove?</h3>
	  <p>This demo shows a React component that builds a table of contents of a page. The component is compatible with any React-based site containing html headers and some space to the right. More specifically, Zoomin can drop it into the React code of the Axway doc portal (introduced in November 2022).</p>
	  <p>You can view the source code of the minitoc React component <a href="https://codesandbox.io/s/live-retractable-toc-for-documentation-g4zv99?file=/src/components/minitoc.js">on this codesandbox</a>. It is pushed to a github repo here:  <a href="https://github.com/FrancisVila/react_minitoc">https://github.com/FrancisVila/react_minitoc</a>	  </p>
	  <h3>Q: Why are minitocs important?</h3>
		<p>Mini ToCs are important because they mean longer pages are viable. Longer pages means less pages, information is less spread out. Users need to do less navigation. Less navigation means less hassle.</p>
	  <h3>Q: How about the problem of wide tables and images?</h3>
        <p><b>Scroll downwards</b>, you will see that the ToC seamlessly disappears when a wide table or image appears.</p>
		<h3>Q: I see the ToC twice, WTF?</h3>
        <p>If you see the ToC appear <b>twice</b> here, it is because here you are viewing it in development mode. Once the component is built, it only appears once. </p>
		<p>If you are inside Axway, see  <a href="http://10.128.58.228/minitoc/"> this demo </a> for a production-type display, without the double-ToC effect.
		  See 
        <a href="https://stackoverflow.com/questions/72238175/why-useeffect-running-twice-and-how-to-handle-it-well-in-react">  this StackOverflow answer </a> 
        for an explanation of the phenomenon.</p>



		<h3>Q: Which headers does the ToC show, when visible?</h3>
        <p>The current logic is to show all h1 and h2, plus all headers up to h5 currently visible in the scrolled window, plus any headers in between. 
		For example, if a single h4 is visible, you will see [all h1] + [all h2] + the [h3] parent of the visible h4, plus the [h4] itself. </p>
		<p>Feel free to express any views you might have about this.</p>

		<h3>Q: What did Zoomin mean about compatibility problems between the ToC and React?</h3>

		<p>The best tool for dynamically building html when the user scrolls is called jQuery. </p>
		<p>Back in the day (say until 2015) jQuery was widely used for building web interfaces. Since then, most of jQuery's uses have been replaced by platforms like React. But some cases, such as dynamically building html from an existing page, are better suited to jQuery. When React was young, there were a lot of questions like "how do I get my existing jQuery to work in React", and the answer was usually that there was a better "React" way of doing it. The minitoc is an exception.</p>
		<p>Getting jQuery to work with React is a bit tricky -despite them both being based in Javascript- because they use opposite logics. JQuery starts from an existing html page and attaches interactivity, a bit like CSS starts from a page and attaches styling (the class names and ids used by CSS also serve for jQuery). React on the contrary centers on the values of a set of code variables (known as the <i>state</i>) and translates that into an html interface. In React, any user input, such as clicking on a button, selecting in a list, or typing in a text area, triggers handler functions that modify the state variables, that in turn translates into changes in the interface.</p>
		<p>The rest is Llorem Ipsum...</p>

	  
      <h2 id="bbbb">Llorem Ipsum </h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Utilitatis causa amicitia est quaesita. Videsne, ut haec concinant? Aliter enim explicari, quod quaeritur, non potest. Quare ad ea primum, si videtur; </p>

<h2>&gt;&gt;&gt;&gt; Big table (click in ToC: disappears!)</h2>
<div className='warning'><p>When this big table appears, the mini Toc disappears to avoid clashes</p></div>
	  <table>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
		<tr>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			BBB_BBB_BBB BBB CCC DDD 
		</td>
		<td>
			CCC_CCC_CCC BBB CCC DDD 
		</td>			
		<td>
			DDDD_DDD_DDDD_DDD BBB CCC DDD 
		</td>
		<td>
			EEE_EEEE BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>			
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		<td>
			AAA_AAA_AAA_AAA BBB CCC DDD 
		</td>
		</tr>
	  </table>
<h3>Ab his oratores, ab his imperatores</h3>

<p>Peccata paria. Respondeat totidem verbis. Aliter enim nosmet ipsos nosse non possumus. Ne discipulum abducam, times. Vestri haec verecundius, illi fortasse constantius. Quod vestri non item. </p>

<p>Quid sequatur, quid repugnet, vident. Suo enim quisque studio maxime ducitur. Contemnit enim disserendi elegantiam, confuse loquitur. Hos contra singulos dici est melius. </p>

<p><mark>Sed ego in hoc resisto;</mark> Quae diligentissime contra Aristonem dicuntur a Chryippo. Quoniam, si dis placet, ab Epicuro loqui discimus. </p>

	  
	  <p><b>Quam ob rem tandem, inquit, non satisfacit?</b> Tu enim ista lenius, hic Stoicorum more nos vexat. Iam id ipsum absurdum, maximum malum neglegi. Refert tamen, quo modo. </p>

<p><mark>Si longus, levis.</mark> Hic nihil fuit, quod quaereremus. Etiam beatissimum? <mark>Sequitur disserendi ratio cognitioque naturae;</mark> Beatum, inquit. Pugnant Stoici cum Peripateticis. </p>

<blockquote cite='http://loripsum.net'>
	Sin est etiam corpus, ista explanatio naturae nempe hoc effecerit, ut ea, quae ante explanationem tenebamus, relinquamus.
</blockquote>


<p>Nunc omni virtuti vitium contrario nomine opponitur. Facete M. Duo Reges: constructio interrete. <b>Recte, inquit, intellegis.</b> Falli igitur possumus. <b>An quod ita callida est, ut optime possit architectari voluptates?</b> </p>

<ul>
	<li>Et hercule-fatendum est enim, quod sentio -mirabilis est apud illos contextus rerum.</li>
	<li>Paulum, cum regem Persem captum adduceret, eodem flumine invectio?</li>
	<li>Transfer idem ad modestiam vel temperantiam, quae est moderatio cupiditatum rationi oboediens.</li>
	<li>Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam;</li>
	<li>Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L.</li>
	<li>Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o gurges, Galloni! es homo miser, inquit.</li>
	<li>Satisne vobis videor pro meo iure in vestris auribus commentatus?</li>
</ul>

<h3>
        Header with no id that is long long header long long long long long long long long
        long long long long long long long long long long long long{' '}
      </h3>
	  <div className='warning'><p>If you are scrolling down: the big table is past, the mini Toc reappears</p></div>
      <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>

<h3>Quare conare, quaeso</h3>

<p><b>Ergo, inquit, tibi Q.</b> Ne discipulum abducam, times. <mark>Non enim iam stirpis bonum quaeret, sed animalis.</mark> Quis istud possit, inquit, negare? Sumenda potius quam expetenda. Sed virtutem ipsam inchoavit, nihil amplius. </p>



	  <h2>Ut alios omittam</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi enim satis est, ipsis non satis. Idem iste, inquam, de voluptate quid sentit? Utilitatis causa amicitia est quaesita. Duo Reges: constructio interrete. </p>

<h2>At hoc in eo</h2>

<p>Beatus autem esse in maximarum rerum timore nemo potest. Equidem e Cn. Suo genere perveniant ad extremum; Ratio quidem vestra sic cogit. </p>

<blockquote cite='http://loripsum.net'>
	Itaque idem natura victus, cui obsisti non potest, dicit alio loco id, quod a te etiam paulo ante dictum est, non posse iucunde vivi nisi etiam honeste.
</blockquote>


<p>Esse enim, nisi eris, non potes. Non laboro, inquit, de nomine. Oratio me istius philosophi non offendit; Inde igitur, inquit, ordiendum est. Quae cum dixisset, finem ille. Quamquam tu hanc copiosiorem etiam soles dicere. </p>

<ul>
	<li>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt.</li>
	<li>Quod non faceret, si in voluptate summum bonum poneret.</li>
	<li>Consequens enim est et post oritur, ut dixi.</li>
</ul>
	  <h2>&gt;&gt;&gt;&gt;&gt; Big Image</h2>
	  <div className='warning'><p>When this big image appears, the mini Toc disappears to avoid clashes</p></div>
	  <img src={bigPicture} alt="big picture" className='bigPicture' />

<p>Sed ad bona praeterita redeamus. Si longus, levis; Hos contra singulos dici est melius. Satis est ad hoc responsum. Nescio quo modo praetervolavit oratio. </p>


      <p>
        In anim irure elit sit officia cillum quis culpa sunt aliqua do. Ex
        fugiat mollit voluptate dolore consequat Lorem aliquip consequat
        voluptate irure consectetur commodo Lorem veniam. Ipsum do proident sit
        anim qui magna culpa cupidatat qui enim anim duis.
      </p>
      <p>
        Sunt cupidatat labore ipsum sint eu minim sunt mollit pariatur magna
        exercitation. Ullamco proident enim aliqua voluptate adipisicing. Irure
        quis exercitation in nulla labore aute velit.
      </p>

      <p>
        Magna pariatur laborum culpa eiusmod minim proident consequat irure
        excepteur tempor tempor officia laborum esse. Reprehenderit amet irure
        culpa do eu excepteur duis irure cupidatat. Incididunt commodo quis
        proident nisi aliquip sit reprehenderit pariatur deserunt nulla. Laborum
        dolore dolor aute aliquip proident nostrud nulla excepteur laborum
        dolore velit. Fugiat velit quis dolor aute consequat laborum elit ad
        quis excepteur nulla sunt et. Id aliquip ex laborum duis et magna velit.
      </p>
      <h3 id='ddd'>Magna pariatur</h3>
      <p>
        In anim irure elit sit officia cillum quis culpa sunt aliqua do. Ex
        fugiat mollit voluptate dolore consequat Lorem aliquip consequat
        voluptate irure consectetur commodo Lorem veniam. Ipsum do proident sit
        anim qui magna culpa cupidatat qui enim anim duis.
      </p>
      <p>
        Sunt cupidatat labore ipsum sint eu minim sunt mollit pariatur magna
        exercitation. Ullamco proident enim aliqua voluptate adipisicing. Irure
        quis exercitation in nulla labore aute velit.
      </p>
      <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
	  <h3 id='dddww'>Excepteur duis</h3>
      <p>
        Magna pariatur laborum culpa eiusmod minim proident consequat irure
        excepteur tempor tempor officia laborum esse. Reprehenderit amet irure
        culpa do eu excepteur duis irure cupidatat. Incididunt commodo quis
        proident nisi aliquip sit reprehenderit pariatur deserunt nulla. Laborum
        dolore dolor aute aliquip proident nostrud nulla excepteur laborum
        dolore velit. Fugiat velit quis dolor aute consequat laborum elit ad
        quis excepteur nulla sunt et. Id aliquip ex laborum duis et magna velit.
      </p>
      <h3 id='eee'>Laborum culpa </h3>
      <p>
        In anim irure elit sit officia cillum quis culpa sunt aliqua do. Ex
        fugiat mollit voluptate dolore consequat Lorem aliquip consequat
        voluptate irure consectetur commodo Lorem veniam. Ipsum do proident sit
        anim qui magna culpa cupidatat qui enim anim duis.
      </p>
      <p>
        Sunt cupidatat labore ipsum sint eu minim sunt mollit pariatur magna
        exercitation. Ullamco proident enim aliqua voluptate adipisicing. Irure
        quis exercitation in nulla labore aute velit.
      </p>
      <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
      <p>
        Magna pariatur laborum culpa eiusmod minim proident consequat irure
        excepteur tempor tempor officia laborum esse. Reprehenderit amet irure
        culpa do eu excepteur duis irure cupidatat. Incididunt commodo quis
        proident nisi aliquip sit reprehenderit pariatur deserunt nulla. Laborum
        dolore dolor aute aliquip proident nostrud nulla excepteur laborum
        dolore velit. Fugiat velit quis dolor aute consequat laborum elit ad
        quis excepteur nulla sunt et. Id aliquip ex laborum duis et magna velit.
      </p>
      <h3 id='fff'>Irure elit </h3>
      <p>
        In anim irure elit sit officia cillum quis culpa sunt aliqua do. Ex
        fugiat mollit voluptate dolore consequat Lorem aliquip consequat
        voluptate irure consectetur commodo Lorem veniam. Ipsum do proident sit
        anim qui magna culpa cupidatat qui enim anim duis.
      </p>
      <p>
        Sunt cupidatat labore ipsum sint eu minim sunt mollit pariatur magna
        exercitation. Ullamco proident enim aliqua voluptate adipisicing. Irure
        quis exercitation in nulla labore aute velit.
      </p>
	  
      <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
      <p>
        Magna pariatur laborum culpa eiusmod minim proident consequat irure
        excepteur tempor tempor officia laborum esse. Reprehenderit amet irure
        culpa do eu excepteur duis irure cupidatat. Incididunt commodo quis
        proident nisi aliquip sit reprehenderit pariatur deserunt nulla. Laborum
        dolore dolor aute aliquip proident nostrud nulla excepteur laborum
        dolore velit. Fugiat velit quis dolor aute consequat laborum elit ad
        quis excepteur nulla sunt et. Id aliquip ex laborum duis et magna velit.
      </p>
      <h3 id='ggg'>Sub sub Title </h3>

      <p>
        In anim irure elit sit officia cillum quis culpa sunt aliqua do. Ex
        fugiat mollit voluptate dolore consequat Lorem aliquip consequat
        voluptate irure consectetur commodo Lorem veniam. Ipsum do proident sit
        anim qui magna culpa cupidatat qui enim anim duis.
      </p>
      <p>
        Sunt cupidatat labore ipsum sint eu minim sunt mollit pariatur magna
        exercitation. Ullamco proident enim aliqua voluptate adipisicing. Irure
        quis exercitation in nulla labore aute velit.
      </p>
	  <h4>Nulla aliquip</h4>
	  <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
	  <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
	  <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
	  <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
	  <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
	  <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
	  <h5>Fugiat velit quis dolor</h5>
	  <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
      <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
      <p>
        Magna pariatur laborum culpa eiusmod minim proident consequat irure
        excepteur tempor tempor officia laborum esse. Reprehenderit amet irure
        culpa do eu excepteur duis irure cupidatat. Incididunt commodo quis
        proident nisi aliquip sit reprehenderit pariatur deserunt nulla. Laborum
        dolore dolor aute aliquip proident nostrud nulla excepteur laborum
        dolore velit. Fugiat velit quis dolor aute consequat laborum elit ad
        quis excepteur nulla sunt et. Id aliquip ex laborum duis et magna velit.
      </p>
      <h2 id='hhhhh'>Sub Title </h2>
      <p>
        In anim irure elit sit officia cillum quis culpa sunt aliqua do. Ex
        fugiat mollit voluptate dolore consequat Lorem aliquip consequat
        voluptate irure consectetur commodo Lorem veniam. Ipsum do proident sit
        anim qui magna culpa cupidatat qui enim anim duis.
      </p>
      <p>
        Sunt cupidatat labore ipsum sint eu minim sunt mollit pariatur magna
        exercitation. Ullamco proident enim aliqua voluptate adipisicing. Irure
        quis exercitation in nulla labore aute velit.
      </p>
      <p>
        Sunt laborum id laboris aute magna aliqua amet amet cillum occaecat.
        Magna irure enim reprehenderit minim aute aliquip nisi dolor sit. Culpa
        esse aliquip cupidatat proident. Nulla aliquip occaecat cillum enim
        tempor qui culpa. Dolore ut incididunt nisi labore non ullamco.
      </p>
      <p>
        Magna pariatur laborum culpa eiusmod minim proident consequat irure
        excepteur tempor tempor officia laborum esse. Reprehenderit amet irure
        culpa do eu excepteur duis irure cupidatat. Incididunt commodo quis
        proident nisi aliquip sit reprehenderit pariatur deserunt nulla. Laborum
        dolore dolor aute aliquip proident nostrud nulla excepteur laborum
        dolore velit. Fugiat velit quis dolor aute consequat laborum elit ad
        quis excepteur nulla sunt et. Id aliquip ex laborum duis et magna velit.
      </p>
      <h2>Cum salvum esse flentes</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prioris generis est docilitas, memoria; Hoc tu nunc in illo probas. Duo Reges: constructio interrete. Et quod est munus, quod opus sapientiae? </p>

<p>Sed virtutem ipsam inchoavit, nihil amplius. Sit enim idem caecus, debilis. Illud non continuo, ut aeque incontentae. Sin aliud quid voles, postea. Est, ut dicis, inquam. Efficiens dici potest. </p>

<ul>
	<li>Inquit, respondet: Quia, nisi quod honestum est, nullum est aliud bonum! Non quaero iam verumne sit;</li>
	<li>At enim iam dicitis virtutem non posse constitui, si ea, quae extra virtutem sint, ad beate vivendum pertineant.</li>
	<li>Quid est igitur, inquit, quod requiras?</li>
	<li>Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat.</li>
</ul>


<blockquote cite='http://loripsum.net'>
	Sed tamen nonne reprehenderes, Epicure, luxuriosos ob eam ipsam causam, quod ita viverent, ut persequerentur cuiusque modi voluptates, cum esset praesertim, ut ais tu, summa voluptas nihil dolere?
</blockquote>


<p>Graece donan, Latine voluptatem vocant. Quo tandem modo? </p>

<blockquote cite='http://loripsum.net'>
	Itaque ut maiores nostri ab aratro adduxerunt Cincinnatum illum, ut dictator esset, sic vos de pagis omnibus colligitis bonos illos quidem viros, sed certe non pereruditos.
</blockquote>


<h4>Egone non intellego, quid sit don Graece, Latine voluptas?</h4>

<p>Primum divisit ineleganter; Primum divisit ineleganter; </p>

<h6>Ait enim se, si uratur, Quam hoc suave! dicturum</h6>

<p><mark>Tibi hoc incredibile, quod beatissimum.</mark> Mihi enim satis est, ipsis non satis. Collatio igitur ista te nihil iuvat. Graece donan, Latine voluptatem vocant. </p>

<ul>
	<li>Paupertas si malum est, mendicus beatus esse nemo potest, quamvis sit sapiens.</li>
	<li>Stoici restant, ei quidem non unam aliquam aut alteram rem a nobis, sed totam ad se nostram philosophiam transtulerunt;</li>
	<li>Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo.</li>
	<li>Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit;</li>
</ul>


<h2>Isto modo ne improbos quidem, si essent boni viri</h2>

<p>Sic consequentibus vestris sublatis prima tolluntur. Respondeat totidem verbis. Cyrenaici quidem non recusant; Gloriosa ostentatio in constituendo summo bono. Quis istud possit, inquit, negare? Mihi enim satis est, ipsis non satis. Proclivi currit oratio. Ea possunt paria non esse. </p>

<p>Poterat autem inpune; Non igitur bene. Sed ad bona praeterita redeamus. Satis est ad hoc responsum. Quo modo? </p>

<p>At hoc in eo M. Qui est in parvis malis. At, si voluptas esset bonum, desideraret. Certe, nisi voluptatem tanti aestimaretis. Est, ut dicis, inquam. </p>

<h5>Ut optime, secundum naturam affectum esse possit</h5>

<p>Non potes, nisi retexueris illa. <b>Cur id non ita fit?</b> Sed nimis multa. Equidem, sed audistine modo de Carneade? Quam si explicavisset, non tam haesitaret. </p>

<p>Hos contra singulos dici est melius. Nam quid possumus facere melius? Sed ad illum redeo. Istam voluptatem, inquit, Epicurus ignorat? Reguli reiciendam; Scrupulum, inquam, abeunti; In schola desinis. </p>

<p>Quam nemo umquam voluptatem appellavit, appellat; Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. </p>

<ul>
	<li>At hoc in eo M.</li>
	<li>Atque etiam valítudinem, vires, vacuitatem doloris non propter utilitatem solum, sed etiam ipsas propter se expetemus.</li>
	<li>Itaque his sapiens semper vacabit.</li>
	<li>Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri.</li>
</ul>


<ul>
	<li>Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi.</li>
	<li>Pungunt quasi aculeis interrogatiunculis angustis, quibus etiam qui assentiuntur nihil commutantur animo et idem abeunt, qui venerant.</li>
	<li>His enim rebus detractis negat se reperire in asotorum vita quod reprehendat.</li>
	<li>Superiores tres erant, quae esse possent, quarum est una sola defensa, eaque vehementer.</li>
	<li>Non est igitur voluptas bonum.</li>
</ul>


<p>Numquam facies. Sumenda potius quam expetenda. Quis hoc dicit? Prave, nequiter, turpiter cenabat; Consequens enim est et post oritur, ut dixi. Ad eos igitur converte te, quaeso. </p>

<p>Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Quo tandem modo? <mark>Haeret in salebra.</mark> Quis negat? Uterque enim summo bono fruitur, id est voluptate. Quamquam tu hanc copiosiorem etiam soles dicere. Quorum altera prosunt, nocent altera. Zenonis est, inquam, hoc Stoici. </p>

<h2>At modo dixeras nihil</h2>

<p>Efficiens dici potest. Obsecro, inquit, Torquate, haec dicit Epicurus? </p>

<p>At iam decimum annum in spelunca iacet. Quod quidem nobis non saepe contingit. Eam stabilem appellas. <mark>Summus dolor plures dies manere non potest?</mark> Quae contraria sunt his, malane? <i>Quonam modo?</i> </p>

<p>Prodest, inquit, mihi eo esse animo. Equidem e Cn. Haec para/doca illi, nos admirabilia dicamus. </p>

<p>Aliud igitur esse censet gaudere, aliud non dolere. Urgent tamen et nihil remittunt. Tecum optime, deinde etiam cum mediocri amico. Negare non possum. </p>

<p>Quae in controversiam veniunt, de iis, si placet, disseramus. An eiusdem modi? </p>

<h2>Fatebuntur Stoici haec omnia</h2>

<p>Tria genera bonorum; Nos paucis ad haec additis finem faciamus aliquando; Prioris generis est docilitas, memoria; Sed residamus, inquit, si placet. An eiusdem modi? Negare non possum. </p>

<blockquote cite='http://loripsum.net'>
	Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur?
</blockquote>


<h3>Sin kakan </h3>

<p>Equidem, sed audistine modo de Carneade? Eaedem res maneant alio modo. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Tecum optime, deinde etiam cum mediocri amico. An vero, inquit, quisquam potest probare, quod perceptfum, quod. Quare attende, quaeso. Ac tamen hic mallet non dolere. Quid est igitur, inquit, quod requiras? </p>

<p>Sumenda potius quam expetenda. <i>Hoc simile tandem est?</i> Restinguet citius, si ardentem acceperit. Quod vestri non item. <mark>Ut aliquid scire se gaudeant?</mark> Si longus, levis dictata sunt. </p>

<p>Ratio quidem vestra sic cogit. Ergo, inquit, tibi Q. Sed residamus, inquit, si placet. </p>

<p>Age, inquies, ista parva sunt. Minime vero istorum quidem, inquit. At enim hic etiam dolore. <i>Videsne, ut haec concinant?</i> Quis istum dolorem timet? </p>

<blockquote cite='http://loripsum.net'>
	Stoici autem, quod finem bonorum in una virtute ponunt, similes sunt illorum;
</blockquote>


<p>Erat enim res aperta. Qua tu etiam inprudens utebare non numquam. Quis Aristidem non mortuum diligit? Sed in rebus apertissimis nimium longi sumus. Beatus sibi videtur esse moriens. Faceres tu quidem, Torquate, haec omnia; </p>

<p>Hunc vos beatum; Ac tamen hic mallet non dolere. Idemne, quod iucunde? Odium autem et invidiam facile vitabis. <b>Primum divisit ineleganter;</b> At enim sequor utilitatem. <i>Quonam, inquit, modo?</i> </p>


	  
    </div>
  )
}
// add following line if new file
export default Page1
