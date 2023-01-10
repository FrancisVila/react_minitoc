import logo from './logo.svg'
import './App.css'
import Page1 from './pages/page1.js'
import Page2 from './pages/page2.js'
import MiniToc from './components/minitoc.js'

function App () {
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
