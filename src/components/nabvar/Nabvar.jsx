import { Link, NavLink } from "react-router-dom"
import '../styles/nabvar.css'


export const Nabvar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
  <div className="container-fluid nabvar__nabvar">
    <Link to='/' className="navbar-brand" href="#"><button className="button__Plis_Movies_Series ">Plis Movies/Series</button></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className="nav-link " aria-current="page"><button className="button__nabvar">Home</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/movies' className="nav-link" ><button className="button__nabvar">Peliculas</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/series' className="nav-link" ><button className="button__nabvar">Series</button></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
