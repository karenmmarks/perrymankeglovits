/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import './Archives.css';
import PressReleases from './PressReleases.jsx';
import SpiritAwards from './SpiritAwards.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import VideoHighlights from './VideoHighlights.jsx';

const Archives = () => {
  const [key, setKey] = useState('PressReleases');

  return (
    <>
      <div className="container page">
        <div className="row">
          <div className="box">
            <div className="col-lg-12 mx-auto">
              <h1>Archives</h1>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab eventKey="PressReleases" title="Press Releases">
                  <PressReleases />
                </Tab>
                <Tab eventKey="SpiritAwards" title="Spirit Awards">
                  <SpiritAwards />
                </Tab>
                <Tab eventKey="PhotoGallery" title="Photo Gallery">
                  <PhotoGallery />
                </Tab>
                <Tab eventKey="VideoHighlights" title="Video Highlights">
                  <VideoHighlights />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Archives;
