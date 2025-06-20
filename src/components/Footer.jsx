import React from 'react';

function Footer() {
  return (
    <footer style={styles.container}>
      <p style={styles.main}>© 2025 News Aggregator · Built with ❤️ and Passion by <strong>Nekkanti Manasa Lakshmi</strong></p>
      <p style={styles.sub}>Frontend Developer Intern · Gigaversity Project Submission</p>
    </footer>
  );
}

const styles = {
  container: {
    backgroundColor: '#1f1f1f',
    color: '#ccc',
    textAlign: 'center',
    padding: '18px 10px',
    marginTop: '40px',
    fontFamily: 'Segoe UI, sans-serif',
    borderTop: '4px solid #1976d2',
    fontSize: '14px',
    lineHeight: '1.6'
  },
  main: {
    margin: '4px 0',
  },
  sub: {
    fontSize: '12px',
    color: '#999'
  }
};

export default Footer;
