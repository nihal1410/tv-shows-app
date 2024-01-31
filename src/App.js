import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import the NavBar component
import { fetchShows } from './services/api';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import './App.css'; // Make sure to import your stylesheet

function App() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const loadShows = async () => {
            const data = await fetchShows('all');
            setShows(data);
        };

        loadShows();
    }, []);

    return (
        <div>
            <NavBar /> {/* Include the NavBar component */}
            <Routes>
                <Route path="/" element={<ShowList shows={shows} />} />
                <Route path="/show/:id" element={<ShowDetails />} />
            </Routes>
        </div>
    );
}

export default App;
