/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import IMAGES from '../../../Assets/Images/images.js';

import './Home.css';

const Home = ({ alert, paypalAlert }) => (
  <>
    <br />
    <div className="container-fluid">
      <div className="row">
        <div className="box">
          {alert}
          <div className="col-lg-12 mx-auto">
            <img className="img-responsive ileft mx-auto mt-2" src={IMAGES.ARTHOME} alt="Arthur Perryman" />
            <div className="col-md-5 float-left">
              <h1 className="text-center text-pk">
                Perryman & Keglovits Foundation
              </h1>

              <h1 className="brand-name text-center"><small>Perryman Keglovits 18th Annual Tribute Basketball Game 2020</small></h1>
              <br />
              <hr />
              <h2 className="intro-text text-center pb-1">
                Details to be determined soon
                <br />
              </h2>
              {/* <h2 class="intro-text text-center pb-2">East Stroudsburg
            University Koehler Fieldhouse  <strong class="pink">
            Girls 6pm - Boys 7:30pm</strong> </h2> */}
              <hr />
              <h2 className="intro-text text-center">
                <strong>Monroe County&apos;s Senior All-Star Players  </strong>
                {' '}
                Help in the Cancer Battle!
              </h2>
              <hr />
              <img className="img-responsive float-left w-50" src={IMAGES.BREAST_CANCER} alt="Pink Breast Cancer Ribbon Join the Fight" />

              <Button variant="warning" onClick={() => paypalAlert()}>
                Donate via PayPal
              </Button>

              {' '}
              <br />
              <br />
              <h2 className="intro-text text-center">
                Support the Battle Against Cancer,
                <strong> Make a Donation Today</strong>
              </h2>
              <br />

              <hr />
            </div>
            <img className="img-responsive ileft center-block mt-2" src={IMAGES.ALHOME} alt="Al Keglovits" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-5">
            <img className="img-responsive ileft mr-2 mt-4" src={IMAGES.SPIN2020} alt="Perryman & Keglovits 18th Annual All-Star Game for 2020 and the battle against Breast Cancer" />
          </div>
          <div className="col-lg-6 ml-2 float-left">
            <hr className="text-center" />
            <h2 className="intro-text text-center">
              Cancer
              {' '}
              <strong>Can&apos;t Stop a Legacy</strong>
              <hr />
            </h2>

            <p>
              Support the Perryman & Keglovits 18th Annual All-Star Game for 2020 and the
              battle against Breast Cancer this year. Details will be determined soon.
            </p>
            <hr />
            <p>
              Make a donation above to remember all those in the community who have lost
              their battle with cancer. Encourage those who have cancer to continue their fight.
            </p>
            <hr />
            <p>
              Our Mission is to showcase the talent of local basketball players by providing
              the vehicle of an all-star basketball game in partnership with area businesses,
              institutions, and agencies.
            </p>
            <hr />
            <p>
              The Perryman & Keglovits All-Star Game celebrates the lives of local
              basketball stars Arthur Perryman and Al Keglovits, and all who have
              fought the battle of cancer.
            </p>

          </div>
        </div>
      </div>
      <div className="row d-block">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              Our Sponsors
              <strong> help us make a difference</strong>
            </h2>
            <hr />
            <img src={IMAGES.SPONSORS} className="img-responsive w-75 center-block ml-4 mt-2" alt="Logos for Nationwide, ESSA, Pocono Health System, Pocono Cab Company" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              Our Particpating School Students
              <strong> that help us make a difference</strong>
            </h2>
            <hr />
            <ul>
              <li><a href="https://www.esasd.net/Domain/17" target="_blank" rel="noreferrer">East Stroudsburg South</a></li>
              <li><a href="https://www.esasd.net/Domain/16" target="_blank" rel="noreferrer">East Stroudsburg North</a></li>
              <li><a href="https://high.sburg.org/" target="_blank" rel="noreferrer">Stroudsburg</a></li>
              <li><a href="https://www.pvbears.org/Domain/57" target="_blank" rel="noreferrer">Pleasant Valley</a></li>
              <li><a href="https://www.pmsd.org/site/Default.aspx?PageID=13" target="_blank" rel="noreferrer">Pocono Mountain East</a></li>
              <li><a href="https://www.pmsd.org/site/Default.aspx?PageID=17" target="_blank" rel="noreferrer">Pocono Mountain West</a></li>
              <li>
                <a href="http://www.ndhigh.org/" target="_blank" rel="noreferrer">East Stroudsburg Notre Dame</a>
                {' '}
              </li>
            </ul>
            <p>
              <em>
                <small>
                  This activity is not &quot;officially&quot; approved by the East Stroudsburg,
                  Stroudsburg, Notre Dame, Pleasant Valley and
                  Pocono Mountain School Districts and is not
                  endorsed or supported by those districts.
                </small>
              </em>
            </p>
          </div>
        </div>
      </div>

    </div>
  </>
);

Home.propTypes = {
  alert: PropTypes.object.isRequired,
  paypalAlert: PropTypes.func.isRequired,
};

export default Home;
