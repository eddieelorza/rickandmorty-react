import "./css/banner.scss"
import RickImg from "../../assets/rick.png"
import MortyImg from "../../assets/morty.png"
import PortalImg from "../../assets/portal.png"
import {motion} from "framer-motion"

const Banner = () => {
    return(
        <section className="banner_wrapper d-flex flex-row justify-content-between align-items-center">
              <section>
                    <h1 className="banner_title">Rick and Morty API</h1>
                    <p className="banner_subtitle">Search your favorite character</p>
                    <button className="btn btn-dark">API DOCS</button>

                
              </section>
              <motion.section className="banner_img_wrapper"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                >
                    <img className="banner_img_portal" src={PortalImg} alt=""/>
                    <motion.div className="banner_img_character"
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{duration: 1}}
                    >
                        <img className="banner_img_morty"  src={MortyImg} alt=""/>
                        <img className="banner_img_rick" src={RickImg} alt=""/>
                    </motion.div>
                </motion.section>


            
        </section>
      

    )
}

export default Banner