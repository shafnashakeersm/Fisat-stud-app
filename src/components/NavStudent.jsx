import React from 'react'
import { Link } from 'react-router-dom'

const NavStudent = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-danger">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">FISATSTUD</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            <Link class="nav-link" to="/addstudent">Profile</Link>
                            <Link class="nav-link" to="/searchstudent">Search</Link>
                            <Link class="nav-link " to='/viewall'>View All</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavStudent