import React from "react";
import {Button, Card} from "react-bootstrap";
import {useLoaderData, Link} from "react-router-dom";
import EditorInsights from "./EditorInsights";

const News = () => {
  const news = useLoaderData();
  const {category_id, title, details, image_url} = news;
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All News In This Category</Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorInsights />
    </>
  );
};

export default News;
