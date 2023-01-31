import './App.css'
import Page1 from './pages/page1.js'
import MiniToc from './components/minitoc.js'
import React from 'react'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<MiniToc></MiniToc>
				<Page1></Page1>
			</header>
		</div>
	)
}

export default App
