import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import "./ArticlesPage.css";

const ArticlesPage = async () => {
  const client = createClient();
  const articles = await client.getAllByType("articles");
  return (
    <div className="articles-container">
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-item">
            <a href={`/articles/${article.uid}`}>
              <h1>{article.data.title}</h1>
              <PrismicNextImage field={article.data.image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
