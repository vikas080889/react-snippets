import React from "react";
import { Card, Button } from "react-bootstrap";

const SearchView = (props) => {
  return (
    <Card className="mt-3 mr-2" style={{ width: "18rem", padding: "20px" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{props.title}</Card.Text>
        <a className="btn btn-primary" href={props.url} role="button">
          Read More ..
        </a>
      </Card.Body>
    </Card>
  );
};

export default SearchView;
