import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TV Shows App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <motion.div whileHover={{ scale: 1.1 }}><Link className="nav-link" to="/sports">Sports</Link></motion.div>
                        </li>
                        <li className="nav-item">
                            <motion.div whileHover={{ scale: 1.1 }}><Link className="nav-link" to="/standup">Standup</Link></motion.div>
                        </li>
                        <li className="nav-item">
                            <motion.div whileHover={{ scale: 1.1 }}><Link className="nav-link" to="/movies">Movies</Link></motion.div>
                        </li>
                        <li className="nav-item">
                            <motion.div whileHover={{ scale: 1.1 }}><Link className="nav-link" to="/esports">Esports</Link></motion.div>
                        </li>
                        {/* Add more nav items here if needed */}
                    </ul>
                    <div className="ms-auto">
                        <Link to="/signin" className="btn btn-outline-success me-2">Sign In</Link>
                        <Link to="/register" className="btn btn-outline-primary">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
