import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Track = (props) => {
  const { id, name, artist, url, saved = false, onSave, category } = props;

  return (
    <Card style={{ margin: "0.25rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{artist}</Card.Subtitle>

        <Col className="d-flex align-items-center">
          <Card.Link href={url} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </Card.Link>

          <Button
            className="ms-auto"
            variant={saved ? "success" : "outline-success"}
            onClick={() => onSave && onSave({
              id,
              name,
              artists: [artist],
              externalUrl: url,
              image: undefined,      // fill in later to add cover art
              previewUrl: undefined,  // fill in later to add previews
              category: category
            })}
          >
            {saved ? "Saved" : "Save"}
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Track;