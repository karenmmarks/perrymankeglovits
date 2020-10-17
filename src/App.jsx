import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Views/Home/Home.jsx';
import About from './Components/Views/About/About.jsx';
import Contact from './Components/Views/Contact/Contact.jsx';
import Archives from './Components/Views/Archives/Archives.jsx';
// import PressReleases from './Components/Views/Archives/PressReleases';
// import SpiritAwards from './Components/Views/Archives/SpiritAwards';
// import PhotoGallery from './Components/Views/Archives/PhotoGallery';
// import VideoHighlights from './Components/Views/Archives/VideoHighlights';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/archives" component={Archives} />
        {/* <Route path="/archives/spiritawards" component={SpiritAwards} /> */}
        {/* <Route path="/archives/photogallery" component={PhotoGallery} /> */}
        {/* <Route path="/archives/videohighlights" component={VideoHighlights} /> */}
      </Switch>
    </BrowserRouter>

  </>
);

export default App;
