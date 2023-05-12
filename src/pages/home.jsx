import { useState, useEffect} from 'react'
import {getCharacterByName} from '../api/api'
import CardList from '../components/cards/card-list'
import searchIcon from '../assets/akar-icons_search.svg'
import '../App.scss'
import Banner from '../components/banner/banner'


const Home = ()=>{

    const [character, setCharacter] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    getCharacterByName(search)
      .then(data => {
        const {results} = data
        setCharacter(results)
      })
      .catch(error => console.log('ocurrio un error', error))
  }, [search])

   const handleText = (event) =>{
    setSearch(event.target.value)
   }

   const searchButton = () =>{
    getCharacterByName(search)
    .then(data => {
      const {results} = data
      setCharacter(results)
    })
    .catch(error => console.log('ocurrio un error', error))
    }



  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <Banner/>
        {/* <h1 className="text-center fw-bold title my-2">Rick and Morty</h1> */}
       <div className="input-group input-wrapper  rounded-2 align-items-center d-lg-flex m-5" >
            <div className="input-group-append p-2">
                <img src={searchIcon} alt=""/>
            </div>
            <input type="search"  className="form-control border border-0" placeholder="Search..." onChange={handleText}/>
            <button className="btn btn-outline-secondary border border-0" type="button" id="button-addon2" onClick={searchButton}>Search</button>

        </div>
     <CardList character={character}/>
    
    </section>
  )

}

export default Home