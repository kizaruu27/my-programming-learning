import './App.css'
import Article  from './components/Article'
import LoopingArticles from './components/LoopingArticles'
import ComponentWithProperties from './components/Props'
import ArrayProps from './components/ArrayProps'
import HomePage from './pages/Index'

function App() {
  return (
    <>
      <div className="App">
        {/* <Article /> */}

        {/* Component menggunakan looping */}
        {/* <LoopingArticles /> */}

        {/* Component menggunakan property */}
        {/* <ComponentWithProperties title="PROPS"/> */}

        {/* Component menggunakan array property */}
        {/* <ArrayProps jobs={['Mencuci', 'Nyapu', 'Makan']}/> */}

        <HomePage />
      </div>
    </>
  )
}

export default App
