'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { Logo } from '../../../public/assets';
import Contact from '../components/Contact';
import Loading from '../components/Loader';
import { toast } from 'react-toastify';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setFormData({ name: '', email: '', phone: '', message: '' });
        toast.success('Thank you for contacting us. We will get back to you soon.');
        setLoading(false);
      } else {
        console.error('Error sending email');
        toast.error('Failed to send email. Please try again!');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Navbar />
      {loading && <Loading />}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen py-2 px-4">
        {/* Container for logo, title, contact, and form */}
        <div className="flex flex-col md:flex-row md:space-x-8 w-full max-w-screen-xl">
          {/* Logo and Title Container */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/3">
            <Image src={Logo} alt="Contact" width={150} height={150} />
            <motion.h1
              className="text-4xl font-bold text-gray-100 mt-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Meet Us
            </motion.h1>
            {/* Contact Details */}
            <div className="mt-4 text-gray-300 text-center md:text-left">
              <p className="text-lg font-semibold">Contact Us</p>
              <p>Phone: <a href="tel:+918200185968" className="text-blue-400 hover:underline">+91-8200185968</a></p>
              <p>Email: <a href="mailto:newmargimmigration.ahm@gmail.com" className="text-blue-400 hover:underline">newmargimmigration.ahm@gmail.com</a></p>
            </div>
          </div>
          {/* Form Container */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Form;
