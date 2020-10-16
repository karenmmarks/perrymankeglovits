import React from 'react';
import ARTHOME from '../../../Assets/Images/arthome.jpg';
import ALHOME from '../../../Assets/Images/alhome.jpg';
import PINKJOINTHEFIGHT from '../../../Assets/Images/pinkBreastCancerJointheFight.png';
import SPIN15 from '../../../Assets/Images/spin15.gif';
import SPONSORS from '../../../Assets/Images/sponsors.jpg';

import './Home.css';

const Home = () => (

  <div className="container fluid">

    <div className="row">
      <div className="box">
        <div className="col-lg-12 mx-auto">
          <img className="img-responsive img-left" src={ARTHOME} alt="Arthur Perryman" />

          <div className="col-md-5 float-left">
            <h1 className="text-center">
              Perryman & Keglovits Foundation
            </h1>

            <h1 className="brand-name text-center"><small>Perryman Keglovits 18th Annual Tribute Baskball Game 2020</small></h1>
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

            <img className="img-responsive mx-auto" src={PINKJOINTHEFIGHT} alt="Pink Breast Cancer Ribbon Join the Fight" />

            <h2 className="intro-text text-center">
              Support the Battle Against Cancer,
              <strong> Make a Donation Today</strong>
            </h2>
          </div>
          <img className="img-responsive img-right center-block" src={ALHOME} alt="Al Keglovits" />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="box">
        <div className="col-lg-12">
          <img className="img-responsive img-border img-left" src={SPIN15} alt="" />
          <hr />
          <h2 className="intro-text text-center">

            Cancer
            {' '}
            <strong>Can&apos;t Stop a Legacy</strong>
            <hr className="visible-xs" />
          </h2>

          <p>
            Support the Perryman & Keglovits 18th Annual All-Star Game for 2020 and the
            battle against Breast Cancer this year. Details will be determined soon.
          </p>
          <hr />
          <p>
            Make a donation below to remember all those in the community who have lost
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
        <div className="col-lg-12">
          <hr />
          <h2 className="intro-text text-center">
            Donating is easy
            <strong> make a difference today</strong>
          </h2>
          <hr />
          <p>
            PayPay or checks made payable to Perryman & Keglovits Foundation are accepted for
            donations. We are happy to accept contributions of any amount. Call us with questions:
            {' '}
            <a href="tel:570- 460-5156">(570) 460-5156</a>
            .
          </p>
          <p>
            If you would like to donate, you can donate via a Paypal account or
            major credit card by clicking the Donate button to go to a secure site to make your
            donation.
          </p>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="76FEZSCQWNMQC" />
            <input type="image" src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          {' '}
          <br />
          <p>
            Or, please send a check payable to
            {' '}
            <strong>Perryman & Keglovits Foundation</strong>
            {' '}
            at the following address:
          </p>
          <p>
            Perryman &amp; Keglovits Foundation
            <br />
            PO Box 274
            <br />
            East Stroudsburg, PA 18301
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="box">
        <div className="col-lg-12">
          <hr />
          <h2 className="intro-text text-center">
            Our Sponsors
            <strong> help us make a difference</strong>
          </h2>
          <hr />
          <img src={SPONSORS} className="img-responsive center-block" alt="Logos for Nationwide, ESSA, Pocono Health System, Pocono Cab Company" />
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

);

export default Home;
