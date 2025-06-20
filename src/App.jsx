import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryTabs from './components/CategoryTabs';
import SubcategoryDropdown from './components/SubcategoryDropdown';
import ArticleList from './components/ArticleList';
import BookmarkPanel from './components/BookmarkPanel';
import Footer from './components/Footer';
import articlesData from './data/articles.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubtopic, setSelectedSubtopic] = useState('All');
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bookmarked');
    if (saved) {
      setBookmarkedArticles(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when bookmarks change
  useEffect(() => {
    localStorage.setItem('bookmarked', JSON.stringify(bookmarkedArticles));
  }, [bookmarkedArticles]);

  // Toggle bookmark
  const handleBookmark = (article) => {
    const isBookmarked = bookmarkedArticles.find((a) => a.id === article.id);
    if (isBookmarked) {
      setBookmarkedArticles(bookmarkedArticles.filter((a) => a.id !== article.id));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, article]);
    }
  };

  // Filter articles
  const filteredArticles = articlesData.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;

    const matchesSubtopic =
      selectedSubtopic === 'All' ||
      (article.subtopic && article.subtopic === selectedSubtopic);

    return matchesSearch && matchesCategory && matchesSubtopic;
  });

  return (
    <div>
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => {
          setSelectedCategory(cat);
          setSelectedSubtopic('All'); // reset subtopic on category change
        }}
      />

      <SubcategoryDropdown
        selectedCategory={selectedCategory}
        selectedSubtopic={selectedSubtopic}
        onSubtopicChange={setSelectedSubtopic}
      />

      <ArticleList
        articles={filteredArticles}
        onBookmark={handleBookmark}
        bookmarkedIds={bookmarkedArticles.map((a) => a.id)}
      />

      <BookmarkPanel
        bookmarks={bookmarkedArticles}
        onBookmark={handleBookmark}
      />

      <Footer />
    </div>
  );
}

export default App;
