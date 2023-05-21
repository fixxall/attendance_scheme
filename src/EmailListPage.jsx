import React, { useState } from 'react';
import './LoginPage.css';
import QRCode from 'qrcode.react';

const EmailListPage = () => {
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddEmail = (event) => {
    event.preventDefault();

    // Add email to the list
    setEmailList([...emailList, email]);

    // Clear input field after adding email
    setEmail('');
  };

  const handleDeleteEmail = (index) => {
    const updatedEmailList = [...emailList];
    updatedEmailList.splice(index, 1);
    setEmailList(updatedEmailList);
  };

  return (
    <div className="login-container">
      <h2>Email List and QR Code Generator</h2>
      <div className="email-form">
        <form onSubmit={handleAddEmail}>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">Add Email</button>
          </div>
        </form>
        <div className="email-list">
          <h3>Email List:</h3>
          <ul>
            {emailList.map((email, index) => (
              <li key={index}>
                {email}
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteEmail(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="qr-code">
        <h3>QR Code:</h3>
        {emailList.length > 0 ? (
          emailList.map((email, index) => (
            <div key={index} className="qr-code-item">
              <p>{email}</p>
              <QRCode value={email} size={128} />
            </div>
          ))
        ) : (
          <p>No emails to generate QR codes.</p>
        )}
      </div>
    </div>
  );
};

export default EmailListPage;