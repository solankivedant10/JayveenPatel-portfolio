import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProjectCards({ title, description, slug, iconSlug }) {
  const iconUrl = `https://cdn.simpleicons.org/${iconSlug}?viewbox=auto`;

  return (
    <Card className="project-card-view">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "22px 0 10px",
        }}
      >
        <img
          src={iconUrl}
          alt={`${title} icon`}
          loading="lazy"
          style={{ width: "64px", height: "64px" }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <Button as={Link} to={`/projects/${slug}`} variant="primary" style={{ marginTop: "10px" }}>
          View More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
