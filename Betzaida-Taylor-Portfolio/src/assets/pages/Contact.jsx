import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
            const formErrors = validateForm();
            if (Object.keys(formErrors).length > 0) {
                setErrors(formErrors);
            } else {
                console.log('Form submitted', formData);
                setErrors({});
                setFormData({ name: '', email: '', message: ''});
                alert('Message sent successfully!');
            }
        };

        return (
            <section>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => {
                            if (!formData.name) setErrors({ ...errors, name: 'Name is required' });
                        }}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => {
                            if (!formData.email) setErrors({ ...errors, email: 'Email is required'});
                            else if (!/\S+@\S+\.\S+/.test(formData.email)) setErrors({ ...errors, email: 'Email is invalid' });
                        }}
                        />{errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={() => {
                            if (!formData.message) setErrors({ ...errors, message: 'Message is required' });
                        }}
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>
                </form>
            </section>
        );
};

export default Contact;