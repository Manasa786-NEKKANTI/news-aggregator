import React, { useState, useEffect } from 'react';

function BookmarkPanel({ bookmarks, onBookmark }) {
  const [isOpen, setIsOpen] = useState(true);

  // 📱 Automatically collapse on smaller screens
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 768); // open on desktop, collapsed on mobile
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.panel}>
      <button onClick={() => setIsOpen(!isOpen)} style={styles.toggleButton}>
        {isOpen ? '🔽 Hide Bookmarks' : '🔼 Show Bookmarks'}
      </button>

      {isOpen && (
        <div style={styles.content}>
          <h2>📌 Bookmarked Articles</h2>
          {bookmarks.length === 0 ? (
            <p>No bookmarks yet.</p>
          ) : (
            bookmarks.map((article) => (
              <div key={article.id} style={styles.card}>
                <h4>{article.title}</h4>
                <button onClick={() => onBookmark(article)} style={styles.removeBtn}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  panel: {
    marginTop: '40px',
    padding: '16px',
    backgroundColor: '#f7f7f7',
    borderTop: '3px solid #1976d2',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  toggleButton: {
    marginBottom: '10px',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  content: {
    marginTop: '10px'
  },
  card: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  removeBtn: {
    marginTop: '5px',
    fontSize: '12px',
    backgroundColor: '#ff5252',
    color: '#fff',
    border: 'none',
    padding: '4px 8px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default BookmarkPanel;
