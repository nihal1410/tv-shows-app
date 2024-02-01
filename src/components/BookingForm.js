import React, { useState } from 'react';
import './BookingForm.css'; 

const BookingForm = ({ showName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        tickets: 1,
        show: showName
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill in all fields');
            return;
        }
        localStorage.setItem('bookingData', JSON.stringify(formData));
        alert(`Tickets booked successfully for ${formData.show}`);
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h3>Book Tickets for {showName}</h3>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Phone Number:</label>
                <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Number of Tickets:</label>
                <select className="form-control" name="tickets" value={formData.tickets} onChange={handleChange}>
                    {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Book Ticket</button>
        </form>
    );
};

export default BookingForm;
