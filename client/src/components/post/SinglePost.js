import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ActionButton from "./ActionButton.js";

const SinglePost = ({ post: { _id, status, title, description, url } }) => {
  const style = {
    backgroundColor:
      status === "LEARNED"
        ? "#41c04d"
        : status === "LEARNING"
        ? "#FFFF33"
        : "coral",
    borderRadius: "10px",
  };
  return (
    <Card
      className="shadow"
      border={
        status === "LEARNED"
          ? "success"
          : status === "LEARNING"
          ? "warning"
          : "danger"
      }
    >
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <p className="post-title">{title}</p>
              <span style={style}>{status}</span>
            </Col>
            <Col className="text-right">
              <ActionButton url={url} _id={_id}></ActionButton>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SinglePost;
