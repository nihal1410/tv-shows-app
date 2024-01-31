import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <h3>Book Tickets for {showName}</h3>
            <div>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Phone Number:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Number of Tickets:
                    <select name="tickets" value={formData.tickets} onChange={handleChange}>
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </label>
            </div>
            <button type="submit">Book Ticket</button>
        </form>
    );
};

export default BookingForm;
