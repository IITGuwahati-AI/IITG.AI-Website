import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PublicationCard(props) {
  const div_style = {
    margin: "auto",
    textAlign: "left",
    width: "500px",
    border: "1px solid black",
  };

  return (
    <div>
      <Card style={{ width: "60rem" , margin:"auto"}}>
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          Authors : <b>{props.name}</b>{props.authors}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
          Year : {props.year}
          </Card.Subtitle>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Link href={props.preprint} target="blank">Pre-print</Card.Link>
          <Card.Link href={props.code} target="blank">Code</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PublicationCard;
