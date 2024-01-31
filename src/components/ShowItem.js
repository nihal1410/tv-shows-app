import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowItem = ({ show }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="card mb-4 shadow-sm"
    >
      <img src={show.image?.medium || 'default_image_url'} className="card-img-top" alt={show.name} />
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">{show.summary.replace(/<[^>]+>/g, '').substring(0, 100)}...</p>
        <Link to={`/show/${show.id}`} className="btn btn-primary">View Details</Link>
      </div>
    </motion.div>
  );
};

export default ShowItem;
