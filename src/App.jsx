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
      <Route path="/" element={<Home/>}/>
      <Route path="/detail" element={<CardDetail/>}>
        <Route path=":id" element={<CardDetail/>}/>
      </Route>
      <Route path="*">404 Not Found</Route>
    </Routes>
  </main>
  )
  
  
}

export default App
