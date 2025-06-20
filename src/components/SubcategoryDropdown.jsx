import React from 'react';

const subtopics = {
  Technology: ['All', 'AI', 'Gadgets', 'Programming'],
  Science: ['All', 'Space', 'Health', 'Physics'],
  Education: ['All', 'Exams', 'Colleges', 'Scholarships']
};

function SubcategoryDropdown({ selectedCategory, selectedSubtopic, onSubtopicChange }) {
  const options = subtopics[selectedCategory] || [];

  if (options.length === 0) return null;

  return (
    <div style={styles.dropdown}>
      <label style={styles.label}>Subtopic:</label>
      <select
        value={selectedSubtopic}
        onChange={(e) => onSubtopicChange(e.target.value)}
        style={styles.select}
      >
        {options.map((sub) => (
          <option key={sub} value={sub}>{sub}</option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  dropdown: {
    textAlign: 'center',
    marginBottom: '16px'
  },
  label: {
    marginRight: '10px',
    fontWeight: 'bold'
  },
  select: {
    padding: '6px 10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px'
  }
};

export default SubcategoryDropdown;
