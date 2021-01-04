/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import IMAGES from '../../../Assets/Images/images.js';

import './Home.css';

const Home = ({ alert, paypalAlert }) => (
  <>
    <br />
    <div className="container page">
      <div className="row">
        <div className="box">
          {alert}
          <div className="col-lg-12 col-md-8 mx-auto">
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
              <img className="img-responsive ileft mt-2 mb-2" src={IMAGES.BREAST_CANCER} alt="Pink Breast Cancer Ribbon Join the Fight" />

              <Button variant="warning" onClick={() => paypalAlert()}>
                Donate via PayPal
              </Button>

              {' '}

              <br />
              <h2 className="intro-text">
                Support the Battle Against Cancer,
                <strong> Make a Donation Today</strong>
              </h2>
              <br />

              <hr />
            </div>
            <img className="img-responsive ileft mt-2" src={IMAGES.ALHOME} alt="Al Keglovits" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-3">
            <img className="img-responsive spinileft mt-4 mb-4" src={IMAGES.SPIN2020} alt="Perryman & Keglovits 18th Annual All-Star Game for 2020 and the battle against Breast Cancer" />
          </div>
          <div className="col-lg-9">
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

      <div className="row">
        <div className="box">
          <div className="col-lg-12 col-md-8 mx-auto">

            <hr className="text-center" />
            <h2 className="intro-text text-center">
              Cancer
              {' '}
              <strong>and you</strong>

            </h2>
            <hr />
            <h3>Cancer Facts</h3>
            <img className="img-responsive canceriright mr-1 ml-2 mt-2 mb-2" src={IMAGES.BLOCK} alt="Perryman & Keglovits 18th Annual All-Star Game for 2020 and the battle against Breast Cancer" />
            <p>In the time it takes you to read this short page of information, another five people were diagnosed with cancer and two more people will have died from cancer. Cancer kills about one American every minute of every day, or about 1,500 people every 24 hours.</p>
            <ul>
              <li>About 1.4 million new cancer cases are expected to be diagnosed in 2006. More than 20 million new cancer cases have been diagnosed since 1990.</li>

              <li>One of every two men and one out of three women will get cancer in their lifetimes.</li>

              <li>Three out of every four American families will have at least one family member diagnosed with cancer.</li>

              <li>About 565,000 Americans are expected to die of cancer in 2006. In the U.S., cancer is the second leading cause of death, responsible for 1 in 4 deaths.</li>

              <li>According to the National Institutes of Health, overall costs for cancer in 2005 were nearly $210 billion, including medical costs, the cost of lost productivity due to illness and the cost of lost productivity due to premature death.</li>

              <li>
                {' '}
                Approximately 77 percent of all cancers are diagnosed in people aged 55 and older.
              </li>

              <li>An estimated 9,500 new cases of cancer are anticipated among children aged 14 and younger in 2006. Other than accidents, cancer is the leading cause of death among children.</li>
            </ul>

            <h3>The Good News</h3>
            <img className="img-responsive cancerileft mr-5 ml-1 mt-2 mb-2" src={IMAGES.CHARGE} alt="Perryman & Keglovits 18th Annual All-Star Game for 2020 and the battle against Breast Cancer" />
            <p>Cancer researchers have a clear understanding of how cancer evolves, from the initial disruption of genetic material, and the signals that drive and nourish this growth and cause it to spread. We are at a crossroads in the history of cancer research and we are poised to make exponential gains, to even reduce it to a chronic disease, like diabetes. Early indicators include:</p>

            <ul>
              <li>For the first time in more than 70 years, annual cancer deaths in the United States have fallen. The number of cancer deaths in the U.S. fell between 2002 and 2003, the first annual decrease in total cancer deaths since the 1930s, when nationwide data began to be compiled.</li>
              <li>As of January 2002, it is estimated that there are 10.1 million cancer survivors in the U.S. Approximately 14 percent of the 10.1 million estimated survivors were diagnosed more than 20 years ago.</li>
              <li>People can reduce their risk of getting cancer through diet, exercise, weight loss and the practice of other healthy lifestyle factors.</li>
              <li>Today, 64 percent of adults diagnosed with cancer will be alive in five years. Among children, nearly 75 percent of childhood cancer survivors will be alive after 10 years.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box wide">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              Our Sponsors
              <strong> help us make a difference</strong>
            </h2>
            <hr />
            <img src={IMAGES.SPONSORS} className="img-responsive w-75 flex-grow ml-5 mt-2" alt="Logos for Nationwide, ESSA, Pocono Health System, Pocono Cab Company" />
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
              <li><a href="https://www.esasd.net/Domain/17" target="_blank" rel="noreferrer" className="text-pk">East Stroudsburg South</a></li>
              <li><a href="https://www.esasd.net/Domain/16" target="_blank" rel="noreferrer" className="text-pk">East Stroudsburg North</a></li>
              <li><a href="https://high.sburg.org/" target="_blank" rel="noreferrer" className="text-pk">Stroudsburg</a></li>
              <li><a href="https://www.pvbears.org/Domain/57" target="_blank" rel="noreferrer" className="text-pk">Pleasant Valley</a></li>
              <li><a href="https://www.pmsd.org/site/Default.aspx?PageID=13" target="_blank" rel="noreferrer" className="text-pk">Pocono Mountain East</a></li>
              <li><a href="https://www.pmsd.org/site/Default.aspx?PageID=17" target="_blank" rel="noreferrer" className="text-pk">Pocono Mountain West</a></li>
              <li>
                <a href="http://www.ndhigh.org/" target="_blank" rel="noreferrer" className="text-pk">East Stroudsburg Notre Dame</a>
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
