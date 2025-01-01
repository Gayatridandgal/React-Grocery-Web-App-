import React from 'react';

function ContactUs() {
  return (
    <div className="container">
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@rameshstore.com</p>
        <p>Phone: +91-1234567890</p>
        <p>Address: Ramesh's Vegetable and Fruit Store, City Center</p>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

export default ContactUs;
