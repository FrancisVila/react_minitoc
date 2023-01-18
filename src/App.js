import './App.css'
import Page1 from './pages/Page1.js'
import MiniToc from './components/Minitoc.js'
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
