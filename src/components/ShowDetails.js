import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchShowDetails } from '../services/api';
import BookingForm from './BookingForm';
import { motion } from 'framer-motion';
import './ShowDetails.css'; 

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const details = await fetchShowDetails(id);
                setShow(details);
            } catch (error) {
                console.error("Error fetching show details:", error);
            }
        };

        fetchDetails();
    }, [id]);

    if (!show) return <div>Loading...</div>;

    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="show-details-container"
        >
            <div className="show-image-container">
                <img src={show.image?.original || 'default_image_url'} alt={show.name} />
            </div>
            <div className="show-info">
                <h2>{show.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: show.summary }} />
                {/* Placeholder for additional details */}
                <Link to="/" className="btn btn-secondary">Back to List</Link>
            </div>
            <div className="booking-form-section">
                <BookingForm showName={show.name} />
            </div>
        </motion.div>
    );
};

export default ShowDetails;
