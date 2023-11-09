import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useEffect, useState } from "react";
import '../components/styles/home.css'
import { CarruselSeries } from "./CarruselSeries";

// 

const Home = () => {
  const api_key = 'c35f6c6e915c404b90e06fe7568da9b1'; 
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const url = 'https://api.themoviedb.org/3//movie/popular?api_key=';
 

  const [movies, setMovies] = useState([]);

  



  useEffect(() => {
      fetch(`${url}${api_key}`)
      .then(response => response.json())
        .then(data => setMovies(data.results))
        .catch(error => console.log(error)) 
  }, []);
    
 
   
  return (
    
    <div>
      
    <section className="container__home">
       <h1 className="title__cartelera">Peliculas En Cartelera</h1>
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
        speed={2000}
        className="mySwiper"
      >
       
        {movies.map((movie) => (
          
          <SwiperSlide key={movie.title} className="swiper-slide">
            <div className="nabvar__card">
              <img  src={baseURL + movie.backdrop_path} />
              <h1>{movie.title}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
        <CarruselSeries />

    </section>
    
   </div>
  );
   
}

export default Home;