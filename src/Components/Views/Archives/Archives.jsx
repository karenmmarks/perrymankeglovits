import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import './Archives.css';
import PressReleases from './PressReleases';
import SpiritAwards from './SpiritAwards';
import PhotoGallery from './PhotoGallery';
import VideoHighlights from './VideoHighlights';

const Archives = () => {
  const [key, setKey] = useState('PressReleases');

  return (
    <>
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
    </>

  );
};

export default Archives;
