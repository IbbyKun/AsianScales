'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import ContactForm from '../../components/ContactUs'; // New component
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
