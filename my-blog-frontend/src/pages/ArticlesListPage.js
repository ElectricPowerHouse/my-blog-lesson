import React from 'react';
import {Link} from 'react-router-dom';
import articlesV from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
  return (<> < h1 > Articles page yo < /h1>
    <ArticlesList articles={articlesV} />
    </>
    )
}

export default ArticlesListPage;
