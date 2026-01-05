import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        {/* Optional extra detail blocks for FP&A-style projects */}
        {props.impact && (
          <Card.Text style={{ textAlign: "left", marginTop: "12px" }}>
            <strong className="purple">Impact:</strong> {props.impact}
          </Card.Text>
        )}

        {props.stack && (
          <Card.Text style={{ textAlign: "left", marginTop: "6px" }}>
            <strong className="purple">Tools:</strong> {props.stack}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
