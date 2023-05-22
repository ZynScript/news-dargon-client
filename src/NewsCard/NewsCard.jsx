import moment from "moment";
import React from "react";
import {Image} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import {Link} from "react-router-dom";

const NewsCard = ({news}) => {
  const {_id, title, details, image_url, author, total_view, rating} = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image src={author?.img} width={55} roundedCircle />
        <div className=" ms-2 flex-grow-1">
          <span>{author.name ? author?.name : "Anonymous"}</span> <br />
          <span>{moment(author?.published_date).format("YYYY-MM-DD")}</span>
        </div>
        <div className="">
          <FaRegBookmark /> <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="pt-3">
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`} className="text-warning">
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            className="text-warning"
            placeholderRating={3.5}
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}></Rating>{" "}
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
