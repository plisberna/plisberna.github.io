import axios from 'axios'
import YouTube from 'react-youtube'
import '../components/styles/trailerSeries.css'
import { useState, useEffect } from 'react'

export const TrailerSeries = () => {

  const API_KEY = '4f5f43495afcc67e9553f6c684a82f84'
  const API_URL = 'https://api.themoviedb.org/3'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  //variable de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Series" });
  const [playing, setPlaying] = useState(false);

  //funcion par hacer la peticion a la api

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover'
    const { data: { results },
    } = await axios.get(`${API_URL}/${type}/tv`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results) 
    setMovie(results[0])
    
    if (results.length) {
      await fetchMovie(results[0].id)
    }

  }
  //funcion para un solo objeto
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/tv/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'videos'
      }
    })
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === 'Official Trailer'
      );
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    setMovie(data)
  }

  const selectMovie = async(movie) => {
    fetchMovie(movie.id)
    setMovie(movie)
    window.scroll(0, 0)
}


  //funcion buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault()
    fetchMovies(searchKey)
  }
 



  useEffect(() => {
    fetchMovies()
  },[]);


  return (
    <div className='container__full__series'>
      {/* este es el buscador de peliculas*/}
      <h1 className='title__serie'>Busca tu Serie Favorita</h1>
      <form className='form__container__serie' onSubmit={searchMovies}>
        <input
          type='text'
          placeholder='Escribe tu Serie Favorita'
          onChange={(e) => setSearchKey(e.target.value)}
          className='input__serie'
        />
        <button className='button__search__serie ' >Buscar</button>
          
      </form>
      {/* contenedor del baner y el reproductor de video*/}
      <div>
        <main>
          {movie ? (
            <div
              className='viewtrailer__serie'
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                     className='reproductor container'
                    containerClassName={'youtube-container amru'}
                    opts={{
                      width: '100%',
                      height: '100%',
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 1,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button className='boton' onClick={() => setPlaying(false)}>
                    Close
                  </button>
                </>
              ) : (
                  <div className='container'>
                    <div className=''>
                      {trailer ? (
                        <button
                          className='boton'
                          onClick={() => setPlaying(true)}
                          type='button'
                        >Play Trailer
                        </button>
                      ) : (
                          'Sorry, no trailer available'
                      )}
                      <h1 className='text-white'>{movie.title}</h1>
                      <p className='text-white'>{ movie.overview}</p>
                    </div>
                  </div>
              )}
            </div>
          ): null}
        </main>
      </div>
      
      {/* contenedor de poster peliculas*/}
      <div className='container__serie'>
        <div className='serie_list'>
          {movies.map((movie)=> (
            <div key={movie.id} className='serie_card' onClick={()=> selectMovie(movie)}>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} height={500} width='100%' className='serie__card__img'/>
              <h2 className='title__movie'>{ movie.title }</h2>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  )
}