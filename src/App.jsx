import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import {Nabvar} from './components/nabvar/Nabvar'
import { TrailersMovies } from './pages/TrailersMovies'
import {TrailerSeries} from './pages/TrailerSeries'


function App() {
  

  return (
    <>
      <Nabvar />
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/movies" element={<TrailersMovies></TrailersMovies>} ></Route>
            <Route path="/series" element={<TrailerSeries></TrailerSeries>} ></Route>
            <Route path="/*" element={ <Navigate></Navigate>} ></Route>
        </Routes>
    </>
  )
}

export default App
      
   