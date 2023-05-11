
import {useParams} from "react-router-dom"
import {getCharacterById, getCharacterBySpecies,getEpisodes} from "../../api/api"
import {useEffect,useState} from "react" 
import CardSlide from "./card-slide"
import Episodes from "./episodes"
import './css/card-detail.scss'

const CardDetail = () =>{
    const {id} = useParams()
    const [character,setCharacter] = useState({})
    const [speciesCharacter,setSpeciesCharacter] = useState([])
    const [episodesByCharacter,setEpisodesByCharacter] = useState([])

    useEffect(()=>{
        getCharacterById(id)
        .then(data => {
            setCharacter(data)
        })
        .catch(error => console.log('ocurrio un error', error))
    },[id])

   const {name,status,species,location,origin,image,gender} = character
   console.log(species)

    useEffect(()=>{
        getCharacterBySpecies(species)
        .then(data => {
            const {results} = data
            //random
            const random = Math.floor(Math.random() * (results.length - 10))
            const randomCharacter = results.slice(random,random + 10)
            setSpeciesCharacter(randomCharacter)
        })
        .catch(error => console.log('ocurrio un error', error))
    },[species])

    useEffect(()=>{
        const episodes = character?.episode
        const episodesId = episodes?.map(episode => episode.split('/').slice(-1)[0])
        const episodesUrl = episodesId?.map(id => `https://rickandmortyapi.com/api/episode/${id}`)
        const episodesPromises = episodesUrl?.map(url => getEpisodes(url))
        Promise.all(episodesPromises)
        .then(data => {
            setEpisodesByCharacter(data)
        })
        .catch(error => console.log('ocurrio un error', error))
    },[character])

    const alive = 'Alive'
    console.log(episodesByCharacter)



    return(
        <>
        {/* {status === alive ? <h2>El personaje esta vivo</h2> : <h2>El personaje esta muerto</h2>} */}
          <section className="card-detail_wrapper">
            <section className="d-flex flex-column flex-lg-row justify-content-center align-items-center card-detail_box ">
               {alive === status ? 
                <div className="avatar-wrapper">
                    <img src={image} alt="" className="avatar-wrapper_img alive-img"/>
                    <span className="avatar-wrapper_status alive-box">{status}</span>
                    
                </div>
                :
                <div className="avatar-wrapper">
                    <img src={image} alt="" className="avatar-wrapper_img dead-img"/>
                    <span className="avatar-wrapper_status dead-box">{status}</span>

                </div>
                }
                <div className="ms-5 mt-4">
                    <h1 className="text-sm-left">{name} Details</h1>
                    <p><span className="fw-bold text-secondary" >Specie:</span> {species}</p>
                    <p><span className="fw-bold text-secondary">Gender:</span> {gender}</p>
                    <p><span className="fw-bold text-secondary">Last known location: </span> {location?.name}</p>
                    <p><span className="fw-bold text-secondary">Origin: </span> {origin?.name}</p>
                    <Episodes episodesByCharacter={episodesByCharacter}/>


                </div>
                
            </section>



            
          </section>

          <section className="container mt-4">
                <h2 className="fw-bold text-center text-light">Characters of the same species</h2>
                <CardSlide speciesCharacter={speciesCharacter}/>
            
          </section>
         
        </>
        

    )
}

export default CardDetail