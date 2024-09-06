import React from 'react';

const SalaryPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Salary Estimator</h1>
      <div style={styles.formContainer}>
        <label style={styles.label} htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" style={styles.input} placeholder="Enter job title" />

        <label style={styles.label} htmlFor="location">Location:</label>
        <input type="text" id="location" style={styles.input} placeholder="Enter location" />

        <label style={styles.label} htmlFor="experience">Years of Experience:</label>
        <input type="number" id="experience" style={styles.input} placeholder="Enter years of experience" />

        <button style={styles.button}>Estimate Salary</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  label: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default SalaryPage;
