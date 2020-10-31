import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './PhotoGallery.css';

const BASE_URL = 'http://50.29.151.120:8000';

const PhotoGallery = () => {
  const [loading, setLoading] = useState(true);
  const [imageLinks, setImageLinks] = useState({});

  if (loading) {
    fetch(`${BASE_URL}/imageLinks`)
      .then((res) => res.json())
      .then((res) => {
        setImageLinks(res);
        setLoading(false);
      });
  }

  return (
    <>
      <br />
      <div className="container page">
        <div className="row">
          <div className="box">
            <div className="col-lg-12 mx-auto">
              <p className="text-left">Choose a Photo Gallery Year from the menu below:</p>
              <Accordion>
                {Object.keys(imageLinks).sort().map((year) => (
                  <>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={year}>
                          <h2 className="intro-text text-left">
                            {year}
                          </h2>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={year}>
                        <Card.Body>
                          <div className="text-left">
                            {imageLinks[year].map(({ image, thumb }) => (
                              <img key={thumb} alt={thumb} src={`${BASE_URL}${thumb}`} className="img-responsive mt-2 mx-1 mb-2" />

                            ))}
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                  </>
                ))}
                {/* <h1 className="intro-text mt-2 ml-1"><strong>Photo Gallery</strong></h1>
    <p className="text-left">Choose a Photo Gallery Year from the menu below:</p>
    <Accordion>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <h2 className="intro-text text-Center">2019</h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            2018
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            2017
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            2016
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            2015
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            2014
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="6">
            2013
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="7">
            2012
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="8">
            2011
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="9">
            2010
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="9">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="10">
            2009
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="10">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="11">
            2008
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="11">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="12">
            2007
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="12">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="13">
            2006
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="13">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion> */}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
