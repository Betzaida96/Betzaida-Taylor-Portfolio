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
            <section className="py-12 bg-lightLightPink">
                <div className="container mx-auto max-w-lg">
                <h2 className="text-4xl font-bold text-pinkyRed mb-8 text-center">Contact Me</h2>
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-lg font-medium text-pinkyRed mb-2">Name:</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-brightLavender rounded-lg focus:outline-none focus:ring-2 focus:ring-pinkyRed"
                        onBlur={() => {
                            if (!formData.name) setErrors({ ...errors, name: 'Name is required' });
                        }}
                        />
                       
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-lg font-medium text-pinkyRed mb-2">Email:</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-brightLavender rounded-lg focus:outline-none focus:ring-2 focus:ring-pinkyRed"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-lg font-medium text-pinkyRed mb-2">Message:</label>
                        <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-brightLavender rounded-lg focus:outline-none focus:ring-2 focus:ring-pinkyRed"
                        />
                    </div>
                    <button type="submit" className="w-full py-3 bg-rosePink text-white font-bold rounded-lg hover:bg-brightLavender transition-colors duration-200">Send Message</button>
                </form>
                </div>
            </section>
        );
};

export default Contact;