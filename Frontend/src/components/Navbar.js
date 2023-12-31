import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
            <Link to = "/" className="navbar-brand" href="#">FITNESS TRACKER</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to = "/" className="nav-link active" aria-current="page" href="#">Exercises</Link>
                </li>
                <li className="nav-item">
                <Link to = "/create" className="nav-link" href="#">Create Exercise Log</Link>
                </li>
                <li className="nav-item">
                <Link to = "/user" className="nav-link">Create User</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  )
}
