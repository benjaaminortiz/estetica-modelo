import React from 'react'
import s from './Carousel.module.css'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
        <div style={{maxHeight: 560}} className="carousel-item active" >
            <img className="d-block w-100" src='https://th.bing.com/th/id/OIP.4ID9PYEAnBDSCd_Fr3THhgHaEK?pid=ImgDet&rs=1' alt="First slide" />
           <div id={s.background}>
            <div className={s.foreground}>
              <h2>Hola mundo!</h2>
           <p> Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.</p> <button className={s.button}>Mas información</button></div> 
               </div> 
              </div>
          <div style={{maxHeight: 560}} className="carousel-item">
            <img className="d-block w-100" src='https://st3.depositphotos.com/5444644/14858/i/600/depositphotos_148583769-stock-photo-woman-lying-in-cosmetological-clinic.jpg' alt="Second slide" />
            <div id={s.background}>
            <div className={s.foreground}>
              <h2>Hola mundo!</h2>
           <p> Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.</p> <button className={s.button}>Mas información</button></div> 
               </div> 
             
          </div>
          <div style={{maxHeight: 560}} className="carousel-item">
            <img className="d-block w-100" src='https://media.ambito.com/p/074126e53a913d21eb1c1617ad917eaa/adjuntos/239/imagenes/037/199/0037199932/1jpg.jpg' alt="Third slide" />
            <div id={s.background}>
            <div className={s.foreground}>
              <h2>Hola mundo!</h2>
           <p> Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat.</p> <button className={s.button}>Mas información</button></div> 
               </div> 
                 
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Carousel
