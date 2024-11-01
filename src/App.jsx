import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'omnandurkar1702@gmail.com',
      to_name: 'Om Nandurkar',
    };

    const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    try {
      await emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, {
        publicKey: YOUR_PUBLIC_KEY,
      });

      console.log('SUCCESS!');
      toast.success('Message sent successfully!');
    } catch (error) {
      console.log('FAILED...', error.text);
      toast.error('Message sending failed. Please try again.');
    } finally {
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-400">
      <Toaster />
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-gray-400"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full bg-black text-white font-bold py-2 rounded-md transition duration-200 ${loading ? 'bg-gray-600 cursor-not-allowed' : 'hover:bg-gray-800'}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </motion.form>

      <motion.div
        className="mt-6 text-center text-gray-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          This form uses <strong>EmailJS</strong> to send your messages directly to our inbox.
          With EmailJS, you can easily send emails from your JavaScript applications without the need for a backend server.
        </p>
      </motion.div>
    </div>
  );
};

export default App;
