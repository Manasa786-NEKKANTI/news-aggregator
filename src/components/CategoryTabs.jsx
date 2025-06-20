import React from 'react';

// 🎨 Categories with labels, icons, and colors
const categories = [
  { label: 'All', icon: '📚', color: '#607d8b' },
  { label: 'Technology', icon: '💻', color: '#4caf50' },
  { label: 'Science', icon: '🧪', color: '#2196f3' },
  { label: 'Environment', icon: '🌱', color: '#388e3c' },
  { label: 'Sports', icon: '🏏', color: '#ff9800' },
  { label: 'Movies', icon: '🎬', color: '#9c27b0' },
  { label: 'Education', icon: '🎓', color: '#f44336' }
];

function CategoryTabs({ selectedCategory, onCategoryChange }) {
  return (
    <div style={styles.container}>
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.label;
        return (
          <button
            key={cat.label}
            onClick={() => onCategoryChange(cat.label)}
            style={{
              ...styles.button,
              backgroundColor: isSelected ? cat.color : '#f9f9f9',
              color: isSelected ? '#fff' : '#333',
              border: `2px solid ${isSelected ? cat.color : '#ddd'}`,
              fontWeight: isSelected ? 'bold' : 'normal',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ fontSize: '18px', marginRight: '6px' }}>{cat.icon}</span>
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px 0',
  },
  button: {
    borderRadius: '8px',
    padding: '10px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    outline: 'none'
  }
};

export default CategoryTabs;
