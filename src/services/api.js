import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

export const fetchShows = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
        return response.data.map(item => item.show); // Map through the array to get show details
    } catch (error) {
        console.error("Error fetching shows: ", error);
        throw error;
    }
};

export const fetchShowDetails = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/shows/${id}`);
        return response.data; // Return the details of the show
    } catch (error) {
        console.error("Error fetching show details: ", error);
        throw error; // Throw the error to handle it in the component
    }
};

