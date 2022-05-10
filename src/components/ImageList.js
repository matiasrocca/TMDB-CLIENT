import { Swiper, SwiperSlide } from "swiper/react";
//import "../../node_modules/swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import SwiperCore, {
  EffectCoverflow,
  Navigation
} from "swiper/core";
import { Link } from "react-router-dom";

SwiperCore.use([EffectCoverflow, Navigation]);

export default function ImageList({categoria, queBuscamos}) {

  return (
    <>
                <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                    }}
                    pagination={{
                    clickable: true
                    }}
                    className="mySwiper"
                >
                    {categoria.map((pelicula,id) =>{
                        return(
                            <SwiperSlide key={id} id="slide" >
                              <Link to = {`/find/${queBuscamos}/${pelicula.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original${pelicula.poster_path}`} />                              
                              </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
    </>
  );
}
