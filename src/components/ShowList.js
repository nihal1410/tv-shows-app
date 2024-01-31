import React from 'react';
import ShowItem from './ShowItem';

const ShowList = ({ shows }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                {shows.map(show => (
                    <div key={show.id} className="col-md-6">
                        <ShowItem show={show} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowList;
