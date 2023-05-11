import "./css/episodes.scss"
const Episodes = ({episodesByCharacter}) => {

    return(
       <>
    <section className="episodes-container">
        <p className="fw-bold text-secondary">Episodes:</p>
        <ul className="episodes-wrapper">
            {episodesByCharacter.map(episode => 

                <li  key={episode.id} className="episodes-item">
                    <span >
                    Season {episode.episode.split('E')[0].split('S')[1]}
                    </span>
                    <span>
                        Episode {episode.episode.split('E')[1]}
                    </span>
                    <span>{episode.name}</span>

                    </li>
                )}
            </ul>
        
    </section>
         </>
    )
}

export default Episodes;