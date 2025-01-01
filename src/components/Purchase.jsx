import React, { useState } from 'react';

function Purchase() {
  const [customer, setCustomer] = useState('');
  const [items, setItems] = useState([{ item: '', price: '', quantity: '' }]);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Customer: ${customer}\nTotal: ₹${calculateTotal()}`);
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = items.map((item, i) => i === index ? { ...item, [name]: value } : item);
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { item: '', price: '', quantity: '' }]);
  };

  return (
    <div className="purchase-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Purchase</h2>
        <label>Customer Name:</label>
        <input 
          type="text" 
          value={customer} 
          onChange={(e) => setCustomer(e.target.value)} 
          required 
        />
        {items.map((item, index) => (
          <div key={index} className="item-group">
            <label>Item:</label>
            <input 
              type="text" 
              name="item" 
              value={item.item} 
              onChange={(e) => handleItemChange(index, e)} 
              required 
            />
            <label>Price:</label>
            <input 
              type="number" 
              name="price" 
              value={item.price} 
              onChange={(e) => handleItemChange(index, e)} 
              required 
            />
            <label>Quantity:</label>
            <input 
              type="number" 
              name="quantity" 
              value={item.quantity} 
              onChange={(e) => handleItemChange(index, e)} 
              required 
            />
          </div>
        ))}
        <button type="button" onClick={addItem}>Add Another Item</button>
        <button type="button" onClick={() => alert(`Total: ₹${calculateTotal()}`)}>Calculate Total</button>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .purchase-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          min-width:100vw;
          background-color: #f5f5f5;
        }

        .form {
          background-color: white;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          width: 50%;
          
          text-align: center;
        }

        .form h2 {
          margin-bottom: 20px;
        }

        .form label {
          display: block;
          margin-bottom: 5px;
          text-align: left;
        }

        .form input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .item-group {
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: #f9f9f9;
        }

        .form button {
          width: 100%;
          padding: 10px;
          background-color:rgb(202, 100, 16);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 10px;
        }

        .form button:hover {
          background-color:rgba(11, 0, 163, 0.65);
        }
      `}</style>
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

export default Purchase;
