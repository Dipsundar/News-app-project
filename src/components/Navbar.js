import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">D-NEWS</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/"><i className="bi bi-house-door"></i> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business"><i className="bi bi-briefcase-fill"></i> Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment"><i className="bi bi-joystick"></i> Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general"><i className="bi bi-journal-album"></i> General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health"><i className="bi bi-bandaid"></i> Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science"><i className="bi bi-file-earmark-zip"></i> Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports"><i className="bi bi-sign-turn-slight-right"></i> Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology"><i className="bi bi-card-checklist"></i> Technology</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success" type="submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
