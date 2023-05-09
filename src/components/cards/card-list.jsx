import Card from './card'

const cardList = ({character}) =>{
    console.log(character)
    return(
        <section className="d-flex justify-content-center align-items-center row">
                {
                  character?.map((item)=>(
                    <Card 
                        key={item.id} 
                        name={item.name}
                        status={item.status}
                        species={item.species}
                        location={item.location}
                        origin={item.origin}
                        image={item.image}
                    /> 

                  ))
                }            
        </section>
    )
}

export default cardList 