import React from 'react'
import { Link } from 'react-router-dom'
import './../assets/css/main.css'

const Header = () => {

    return (
      <>
        <div className="navbar navbar-inverse navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/">Muhammad Ilham</Link>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/portofolio">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Skills</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
}

export default Header
