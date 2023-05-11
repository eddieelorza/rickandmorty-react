import Card from "./card"
import './css/card-slide.scss'
const CardSlide = ({speciesCharacter}) =>{

    return(
        <section className=" carousel">
            <div className="carousel__container">
            {
                speciesCharacter?.map((item)=>(
                    <Card 
                    className="carousel-item"
                    key={item.id} 
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    location={item.location}
                    origin={item.origin}
                    image={item.image}
                    item={item}
                /> 
                ))
            }
                
            </div>
        </section>
    )

        }

export default CardSlide