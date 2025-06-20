import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleList({ articles, onBookmark, bookmarkedIds }) {
  return (
    <div style={{ padding: '0 20px' }}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          category={article.category}
          image={article.image}
          onBookmark={() => onBookmark(article)}
          isBookmarked={bookmarkedIds.includes(article.id)}
        />
      ))}
    </div>
  );
}

export default ArticleList;
