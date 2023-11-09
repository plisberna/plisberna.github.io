import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useEffect, useState } from "react";
import '../components/styles/home.css'

// 

export const CarruselSeries = () => {
  const api_key = 'c35f6c6e915c404b90e06fe7568da9b1'; 
  const url = 'https://api.themoviedb.org/3/tv/popular?api_key=';
  const baseURL = "https://image.tmdb.org/t/p/w500";


  const [series, setSeries] = useState([]);

  useEffect(() => {
      fetch(`${url}${api_key}`)
      .then(response => response.json())
        .then(data => setSeries(data.results))
        .catch(error => console.log(error)) 
  }, []);
    
    

  return (
    <section className="container__home">
       <h1 className="title__cartelera">Series Mas Populares</h1>
      <Swiper
        spaceBetween={120}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={4000}
        className="mySwiper"
      >
       
        {series.map((serie) => (
          
          <SwiperSlide key={serie.title} className="swiper-slide">
            <div className="nabvar__card">
              <img className="imagen__serie" src={ baseURL + serie.poster_path} />
              <h1>{serie.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </section>
  );
};

