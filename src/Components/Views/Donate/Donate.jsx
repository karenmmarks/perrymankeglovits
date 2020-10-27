import React from 'react';
import {
  Card, ListGroup, Row, Col,
} from 'react-bootstrap';

const Donate = () => {
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
      <div className="container fluid">
        <Row>
          <Col sm={12}>
            <div className="box">
              <h2>Partnership Options</h2>
              <br />
              {content.map((sponser) => {
                const {
                  key, title, price, features,
                } = sponser;
                return (
                  <>
                    <br />
                    <Card key={key}>
                      <Card.Header as="h3">{`${title} - ${price}`}</Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {features.map((feature) => (
                            <ListGroup.Item>
                              {feature}
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
              <p>
                Deadline: March 1st, 2019
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Donate;
