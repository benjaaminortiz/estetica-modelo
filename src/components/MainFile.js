import React from 'react'
import Navbar from './Home/Navbar'
import Carousel from './carrousel/carrousel'
import Tile1 from './Tiles/Tile1'
import Tile2 from './Tiles/Tile2'
import Tile3 from './Tiles/Tile3'
import s from './MainFile.module.css'
import whatsapp from './whatsapp.png'

const MainFile = () => {
    return (
        <div>
           <div id={s.background}>
             <div className={s.foreground}>
                 <div className={s.logo}>
                    LOGOTIPO
                 </div>
                 <div className={s.whatsapp}>
                     <button> 
                  
                          <img src={whatsapp}></img>
                         PEDI POR WHATSAPP!
                    </button>  
                 </div>
             </div>
            </div>
      <Carousel/>
      <Tile1 />
      <Tile2 />
      <Tile3 />
        </div>
    )
}

export default MainFile
