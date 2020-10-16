import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Home from './Components/Views/Home/Home';
import About from './Components/Views/About/About';
import Contact from './Components/Views/Contact/Contact';
import Archives from './Components/Views/Archives/Archives';
import DonateModal from './Components/Views/Donate/DonateModal';
// import PressReleases from './Components/Views/Archives/PressReleases';
// import SpiritAwards from './Components/Views/Archives/SpiritAwards';
// import PhotoGallery from './Components/Views/Archives/PhotoGallery';
// import VideoHighlights from './Components/Views/Archives/VideoHighlights';

const App = () => {
  const [visible, setVisible] = useState(false);

  let modal;
  if (visible) {
    modal = <DonateModal visible={visible} setVisible={setVisible} />;
  }

  return (
    <>
      {modal}
      <Header />
      <Button onClick={() => setVisible(true)}>Donate</Button>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/archives/" component={Archives} />
          {/* <Route path="/archives/spiritawards" component={SpiritAwards} /> */}
          {/* <Route path="/archives/photogallery" component={PhotoGallery} /> */}
          {/* <Route path="/archives/videohighlights" component={VideoHighlights} /> */}
        </Switch>
      </BrowserRouter>

    </>
  );
};

export default App;
