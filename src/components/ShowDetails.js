import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShowDetails } from '../services/api';
import BookingForm from './BookingForm';

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
        <div>
            <h1>{show.name}</h1>
            <p>{show.genres.join(', ')}</p>
            <img src={show.image?.medium} alt={show.name} />
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
            <BookingForm showName={show.name} />
        </div>
    );
};

export default ShowDetails;
