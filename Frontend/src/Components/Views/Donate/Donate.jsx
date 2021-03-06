/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, ListGroup, Row, Container,
} from 'react-bootstrap';

const Donate = ({ alert, paypalAlert }) => {
  const content = [
    {
      key: 'team-player',
      title: 'Team Player Support',
      price: '$750',
      features: [
        'A full page program ad Camera Ready (7-1/2" x 10")',
        'Opportunity to make opening remarks',
        'A company banner hung at the games',
        '1,000 word write up plus photo & logo in program sponsor page',
        '10 Complimentary Tickets',
        'Inside Cover $400, Back Cover $500, Inside Back Cover $300',
      ],
    },
    {
      key: 'prime-time',
      title: 'Prime Time Support',
      price: '$200',
      features: [
        'A Full Page Ad…Camera Ready (7-1/2" x 10")',
        'PA Announcements',
        '5 Complimentary Tickets',
      ],
    },
    {
      key: 'slam-dunk',
      title: 'Slam Dunk Support',
      price: '$150',
      features: [
        '1/2 Page Ad …Camera Ready (7-1/2" x 4-3/4")',
        '3 complimentary tickets',
      ],
    },
    {
      key: 'buzzer-beater',
      title: 'Buzzer Beater Support',
      price: '$75',
      features: [
        '1/4 Page ad… Camera Ready (3-1/2" x 4-3/4")',
        '2 complimentary tickets',
      ],
    },
    {
      key: 'supporter',
      title: 'Supporter',
      price: '$50',
      features: [
        'Business Card as a Supporter!',
      ],
    },
  ];

  return (
    <>
      <br />
      <div className="container page">
        <Row>
          <Col sm={12}>
            <div className="box">
              {alert}
              <Card>
                <Card.Header as="h2">Personal Contributions</Card.Header>
                <Card.Body>
                  <Card.Text>
                    If you or your business would like to be a part of our game program,
                    please make a donation in one of the below amounts, and under &quot;Add
                    special instructions to the seller&quot; mention the package you&apos;ve
                    selected. We will be in touch using the email address you provide.
                  </Card.Text>
                  <Card.Text>
                    We are happy to accept contributions of any amount. If you would like to
                    donate, please send a check payable to
                    {' '}
                    <b>Perryman & Keglovits Foundation</b>
                    {' '}
                    at the following address:
                  </Card.Text>
                  <Card.Text>
                    Perryman & Keglovits Foundation
                    <br />
                    PO Box 274
                    <br />
                    East Stroudsburg, PA 18301
                  </Card.Text>
                  <Card.Text>
                    Or, you can donate via a Paypal account or major credit card
                  </Card.Text>
                  <Button variant="info" onClick={() => paypalAlert()}>
                    Donate here
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container fluid">
        <Row>
          <Col>
            <div className="box">

              <Card>
                <Card.Header as="h2">
                  Partnership Options

                  {' '}
                </Card.Header>
                <a href="https://drive.google.com/file/d/1UqjLMMp9L0ecgFdzRE2FhVfSw_bMYvaL/view?usp=sharing" className="intro-text text-pk pl-4 pt-2" target="_blank" rel="noreferrer"> Advertising Information</a>
                <Card.Body>
                  <Container>
                    {content.map((sponser) => {
                      const {
                        key, title, price, features,
                      } = sponser;
                      return (
                        <>
                          <Row key={key}>
                            <Col>
                              <Card>
                                <Card.Header as="h3">{`${title} - ${price}`}</Card.Header>
                                <Card.Body>
                                  <Row>
                                    <Col>
                                      <ListGroup variant="flush">
                                        {features.map((feature) => (
                                          <ListGroup.Item>
                                            {feature}
                                          </ListGroup.Item>
                                        ))}
                                      </ListGroup>
                                    </Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                          <br />
                          <br />
                        </>
                      );
                    })}
                  </Container>
                </Card.Body>
                <Card.Footer>
                  Deadline: March 1st, 2022
                </Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

Donate.propTypes = {
  alert: PropTypes.object.isRequired,
  paypalAlert: PropTypes.func.isRequired,
};

export default Donate;
