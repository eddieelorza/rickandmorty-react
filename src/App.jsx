import Home from "./pages/home"
import CardDetail from "./components/cards/card-detail"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import './App.scss'
function App() {
  return(
  <main>
    <Navbar/>
    <Routes>  
    {/* Al hacer click en cualquiera de ellos me debe redireccionar a un pagina de detalle , donde vea informacion relevante del personaje */}
      <Route path="/" element={<Home/>}/>
      <Route path="/detail" element={<CardDetail/>}>
        <Route path=":id" element={<CardDetail/>}/>
      </Route>
    </Routes>
  </main>
  )
  
  
}

export default App
