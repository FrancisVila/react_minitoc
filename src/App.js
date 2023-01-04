import logo from './logo.svg'
import './App.css'
import Page1 from './components/page1'
import Page2 from './components/page2'
import MiniToc from './components/minitoc'

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
