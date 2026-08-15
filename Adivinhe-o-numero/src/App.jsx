import './App.css'
import Jogo from './components/Jogo'

function App() {
  return (
    <div className="pagina">
      <Jogo minimo ={1} maximo ={100} />
    </div>
  )
}

export default App