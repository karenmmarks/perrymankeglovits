import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Views/Home/Home';
import About from './Components/Views/About/About';
import Contact from './Components/Views/Contact/Contact';
import Archives from './Components/Views/Archives/Archives';
// import PressReleases from './Components/Views/Archives/PressReleases';
// import SpiritAwards from './Components/Views/Archives/SpiritAwards';
// import PhotoGallery from './Components/Views/Archives/PhotoGallery';
// import VideoHighlights from './Components/Views/Archives/VideoHighlights';

const App = () => (
  <>
    <Header />
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

export default App;
