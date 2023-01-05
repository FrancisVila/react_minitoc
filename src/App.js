import logo from './logo.svg'
import './App.css'
import Page1 from './components/page1.js'
import Page2 from './components/page2.js'
import MiniToc from './components/minitoc.js'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <MiniToc></MiniToc>
        <Page2></Page2>
      </header>
    </div>
  )
}

export default App
