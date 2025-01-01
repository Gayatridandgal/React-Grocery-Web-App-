import React, { useState } from 'react';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
  };

  return (
    <div className='feedback'>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Feedback</h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .feedback {
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

export default Feedback;
