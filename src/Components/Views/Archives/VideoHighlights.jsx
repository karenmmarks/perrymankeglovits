import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './VideoHighlights.css';

const VideoHighlights = () => (
  <>
    <h1 className="intro-text mt-2 ml-1"><strong>Video Highlights</strong></h1>
    <p className="text-left">Choose a Video Highlight from the menu below:</p>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Video Highlights Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </>

);

export default VideoHighlights;
