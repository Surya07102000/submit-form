import React, { useState } from 'react';
import bgImage from './bg.jpg'; // Import the background image

const SubmitForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Submitted Form Data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear form inputs
    setName('');
    setEmail('');
    setPassword('');
  };

  const formStyle = {
    backgroundImage: `url(${bgImage})`, // Set the background image
    backgroundSize:'cover',
   
    backgroundRepeat: 'no-repeat',
   
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
  };

  return (
    
    <form onSubmit={handleSubmit} style={formStyle}><br></br>
      <div>
        <label htmlFor="name" style={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.inputField}
        />
      </div>
      <div>
        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.inputField}
        />
      </div>
      <div>
        <label htmlFor="password" style={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.inputField}
        />
      </div>
      <button type="submit" style={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default SubmitForm;

const styles = {
  label: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  inputField: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid gray',
    marginBottom: '1rem',
    width: '200px',
  },
  submitButton: {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};
