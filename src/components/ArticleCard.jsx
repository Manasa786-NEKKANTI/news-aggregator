import React from 'react';

function ArticleCard({ title, description, category, image, onBookmark, isBookmarked }) {
  // 🎨 Define category-based colors
  const categoryColors = {
    Technology: '#4caf50',
    Science: '#2196f3',
    Environment: '#388e3c',
    Sports: '#ff9800',
    Movies: '#9c27b0',
    Education: '#f44336',
    Default: '#607d8b'
  };

  const borderColor = categoryColors[category] || categoryColors.Default;

  return (
    <div style={{ ...styles.card, borderLeft: `6px solid ${borderColor}` }}>
      <img src={image} alt={title} style={styles.image} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span style={{ ...styles.category, backgroundColor: borderColor }}>
          {category}
        </span>
        <button onClick={onBookmark} style={styles.bookmarkBtn}>
          {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
    transition: 'transform 0.2s ease',
    alignItems: 'center'
  },
  image: {
    width: '120px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  category: {
    display: 'inline-block',
    padding: '4px 10px',
    marginTop: '8px',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '12px'
  },
  bookmarkBtn: {
    marginTop: '10px',
    backgroundColor: '#eee',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default ArticleCard;
