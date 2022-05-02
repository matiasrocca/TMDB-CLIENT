import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../stylesRecomendadas.css";

// import required modules
import { FreeMode } from "swiper";
import { Link } from "react-router-dom";
import { TypeContext } from "..";

export default function Recomendadas({recomendadas}) {
    const {type} = useContext(TypeContext)

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {recomendadas.map((pelicula, id)=>{
            return (
                <SwiperSlide key={id}>
                    <Link to = {`/find/${type}/${pelicula.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`} />                              
                    </Link>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
}