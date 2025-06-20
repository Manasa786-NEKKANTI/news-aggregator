import React from 'react';

function Header() {
  return (
    <header style={styles.container}>
      <h1 style={styles.title}>
        <span style={styles.icon}>🗞️</span>
        <span style={styles.name}>News <span style={styles.highlight}>Aggregator</span></span>
      </h1>
      <p style={styles.tagline}>Your Daily Categorized, Curated & Verified News to You</p>
    </header>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to right, #4a148c, #7b1fa2)', // Deep violet gradient
    color: '#fff',
    padding: '30px 20px',
    textAlign: 'center',
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    borderBottom: '4px solid #6a1b9a'
  },
  title: {
    fontSize: '2.5rem',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    color: '#fff'
  },
  icon: {
    fontSize: '2.3rem'
  },
  name: {
    fontWeight: 600,
    letterSpacing: '1px'
  },
  highlight: {
    color: '#ffcc80', // soft golden highlight
    fontWeight: 'bold'
  },
  tagline: {
    marginTop: '10px',
    fontSize: '1.05rem',
    color: '#f3e5f5', // lighter lavender text
    fontStyle: 'italic'
  }
};

export default Header;
