import './css/card.scss';
import {Link} from "react-router-dom"

const Card = ({name,status,species,location,origin,image,item}) =>{
    return(
        <>
        <div className="col-12 col-lg-3 card-wrapper d-flex flex-row m-3 justify-content-center align-items-center" >
            <div className="card-content">
                    <div className="image-wrapper">
                       <img className="p-0 m-0 card-img-top" src={image}  alt="..."/>
                       <Link to={`/detail/${item.id}`}><p className="fw-bold link-title">{name.slice(0,15)}</p></Link>
                    </div>
                    
                    <div className="card-body d-flex flex-column p-4">
                        <>
                        {status === "Alive" || status === "unknown" ? <span className="card-type alive">{status} - {species}</span> :
                        <span className="card-type dead">{status} - {species}</span> }
                        </>
                        
                        <span className="card-text">Last known location:
                            <span>{location.name}</span>
                        </span>
                        <span className="card-text">First seen in:
                            <span>{origin.name}</span>
                        </span>
                    </div>   
            </div>

        </div>
        </>
    )
}

export default Card;