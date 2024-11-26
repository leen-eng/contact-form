import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


       





import React from "react";
import "./App.css";

function App() {
  return (
    <div className="contact-form">
      <h1>VILLA</h1>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <p>010-020-0340</p>
          <small>Phone Number</small>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>info@villa.co</p>
          <small>Business Email</small>
        </div>
      </div>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Your Name..." />

        <label>Email Address</label>
        <input type="email" placeholder="Your E-mail..." />

        <label>Subject</label>
        <input type="text" placeholder="Subject..." />

        <label>Message</label>
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
