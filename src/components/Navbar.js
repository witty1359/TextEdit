import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";

export default function Navbar(props) {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li> */}
            </ul>
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <button onClick={props.toggleMode} className={`btn btn-outline-${props.mode==='light'?'dark':'light'}`} >Change Mode</button>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes={
    title: PropTypes.string,
    // title: PropTypes.string.isRequired,
}

Navbar.defaultProps={
    title: "Jyoti",
}

