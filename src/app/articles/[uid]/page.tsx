import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { notFound } from "next/navigation";
import "./ArticlePage.css";

const ArticlePage = async ({
  params,
}: {
  params: {
    uid: string;
  };
}) => {
  const { uid } = params;
  const client = createClient();
  const article = await client.getByUID("articles", uid);

  if (!article) {
    notFound();
  }

  const { title, author, publication_date, image, content } = article.data;

  return (
    <div className="article-container">
      <div className="article-header">
        <h1>{title}</h1>
        <p className="article-meta">
          by {author} // Published at {publication_date}
        </p>
      </div>
      <PrismicNextImage field={image} />
      <div className="article-content">
        <PrismicRichText field={content} />
      </div>
    </div>
  );
};

export default ArticlePage;
