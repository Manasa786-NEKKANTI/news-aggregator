import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  searchBar: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '60%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
};

export default SearchBar;
