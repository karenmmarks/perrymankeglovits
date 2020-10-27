import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './PhotoGallery.css';

const PhotoGallery = () => (
  <>
    <h1 className="intro-text mt-2 ml-1"><strong>Photo Gallery</strong></h1>
    <p className="text-left">Choose a Photo Gallery Year from the menu below:</p>
    <Accordion defaultActiveKey="0">

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            2019 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            2018 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            2017 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            2016 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            2015 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            2014 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="6">
            2013 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="7">
            2012 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="8">
            2011 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="9">
            2010 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="9">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="10">
            2009 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="10">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="11">
            2008 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="11">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="12">
            2007 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="12">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="13">
            2006 Perryman & Keglovits All-Star Game
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="13">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>

  </>

);

export default PhotoGallery;
