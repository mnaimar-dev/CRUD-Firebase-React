import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ marginTop: '-2rem' }}>
            <div className="container-fluid">
                <Link className="navbar-brand bg-primary rounded px-2 text-white" to="/">MyCRUD</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default NavBar