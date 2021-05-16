import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import imageLinks from './photoGallery.js';
import './PhotoGallery.css';

const BASE_URL = 'https://perrymankeglovits-images-4kmyh.ondigitalocean.app';

const PhotoGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openModal = (_, { index }) => {
    setModalIsOpen(true);
    setCurrentImage(index);
  };

  return (
    <>
      <br />
      <div className="container page">
        <div className="row">
          <div className="box">
            <div className="col-lg-12 mx-auto">
              <p className="text-left">Choose a Photo Gallery Year from the menu below (still working on this gallery functionality):</p>
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
                            <Gallery
                              photos={imageLinks[year].map(({ thumb }) => ({
                                src: `${BASE_URL}${thumb}`,
                                sizes: ['(min-width: 480px) 50,(min-width: 1024px) 33.3, 50'],
                              }))}
                              onClick={openModal}
                            />
                            <ModalGateway>
                              {modalIsOpen && (
                                <Modal onClose={() => {
                                  setModalIsOpen(false);
                                  setCurrentImage(0);
                                }}
                                >
                                  <Carousel
                                    currentIndex={currentImage}
                                    views={
                                      imageLinks[year].map(({ image }) => ({
                                        source: `${BASE_URL}${image}`,
                                      }))
                                    }
                                  />
                                </Modal>
                              )}
                            </ModalGateway>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                  </>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
