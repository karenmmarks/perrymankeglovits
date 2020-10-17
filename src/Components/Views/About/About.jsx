import React from 'react';
import HOMECOLLAGE2 from '../../../Assets/Images/home_collage2.jpg';
import AL from '../../../Assets/Images/al.jpg';
import ART from '../../../Assets/Images/art.jpg';

import './About.css';

const About = () => (
  <>
    <br />
    <div className="container page">

      <div className="row">
        <div className="box">
          <div className="col-lg-12 mx-auto">
            <hr />
            <h2 className="intro-text text-center">
              About the
              Foundation
              <strong> How it all began</strong>
            </h2>
            <hr />
            <p>
              "We Sincerely, "Thank You" from the Bottom of our Hearts."
            </p>
            <p>
              In 2003, Rich and Sharon Laverdure, along with Robert Madsen, approached me and my
              family in regards to starting an all-star game in Arthur's name for local seniors to showcase their
              talents in one last event prior to the end of a great high school basketball career. Involuntarily we
              were touched to have Arthur's name on such an event that would represent integrity, hard work
              and perseverance. What we did not realize is the affect it would continue to have on our family five
              years later.
            </p>
            <p>
              Arthur left us way too early on April 21, 1995. When we say "us" we include all of the lives
              in which Art touched during his 19 years of life. During my family's mourning, we were utterly
              supported by the community in every way possible. Truly there was not a day that passed in
              which someone did not reach out to offer an ear to listen, to share a personal story they had with
              Art or to just simply say how sorry they were for our loss.
            </p>
            <blockquote className="blockquote">
              Over the years, our appreciation for our
              community has strengthened and words cannot express enough our gratitude for the continuous
              support in keeping Arthur's memory, along with Al's, and legacy alive through this prestigious
              event.

              This All-Star game is a way for us to continue to share a commonality among our community
              - remembering and honoring the life of Arthur Perryman III.
            </blockquote>
            <p>
              What Art has contributed with his great talent on the basketball court along with his savvy personality will never be forgotten to those
              who have known him personally or simply just enjoyed watching his Jordanesque glide to the
              basket or shot well beyond the three point line. Who could ever forget that infamous headband in
              which he wore? Partly, I believe he wore it so that we, as fans, could tell him and Mike Long apart.
              And naturally he wore #31, the same number is favorite sister wore during her playing career, but
              Felicia and Chrissy may have something to say about that. But, whatever the reason, he left an
              impression on a diverse people in such a short span of life.
            </p>
            <p>
              So, what does this game mean to the Perryman family? It means that our family along with
              the community has an annual opportunity to recollect on the life of Artie in an arena in which he
              loved most - the basketball court. My family and I are so appreciative for the many efforts that go
              into this game each year to improve its quality and for those who continue to support the cause.
              Artie is definitely looking down on us and proud of what we came together as a community to
              accomplish in his name.
            </p>
            <br />
            <p>
              {' '}
              We sincerely thank you from the bottom of our hearts,
              <br />
              Stacy Perryman
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              Our Mission
              {' '}
              <strong>The All-Star Game</strong>
            </h2>
            <hr />
            <br />
            <div className="col-lg-12 text-center">
              <img className="img-responsive w-100 center-block mb-2" src={HOMECOLLAGE2} alt="Perryman Keglovits Tribute Basketball Game collage of photos" />
              <br />

              <p className="text-left">
                Our Mission is to showcase the talent of local basketball players by providing the vehicle of an all-star basketball game in partnership with area businesses, institutions, and agencies.
              </p>
              <p className="text-left">
                The Perryman and Keglovits All-Star Tribute Game celebrates the lives of local basketball stars Arthur Perryman and Al Keglovits, and all who have fought the battle of cancer.
              </p>
            </div>
            <div className="col-lg-12 text-center">
              <p className="text-left">
                <strong>Our mission to celebrate the lives of those who have fought the battle of cancer is an important one to us.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              remembering
              <strong>Al Keglovits</strong>
            </h2>
            <hr />
          </div>
          <img className="img-responsive float-right ml-2" src={AL} alt="Photo of Al Keglovits" />
          <p>
            Al Keglovits was a father, a husband, a teacher, a coach, a bartender, a comedian, a New York Yankees fan, a golfer, and a friend to all who knew him. Al Keglovits, was one of those guys who had a dynamic personality. Kids, colleagues and all opponents were drawn towards his magnetic charm. Al drew you closer to him.
          </p>
          <p>
            Fighting Cancer, seeing how he fought it was an inspiration to all of us.  He knew he had a fight on his hands when he was diagnosed with cancer. He fought it right up to the end. He never, never quit. Unfortunately he couldn't rally one more time.
          </p>
          <p>
            What is important is what the Man, Al Keglovits, did with his life. The example set was one of courage. He loved his Family, he loved his Friends and he loved Basketball. Coaching and teaching were instinctive for Keglovits. He will be remembered by all his players, friends, those he toasted life to. Coach Keglovits, will always be remembered for his tremendous ever so dry sense of humor. He was one of those guys you always wanted to be around. Al made you feel comfortable but watch out for the next zinger, it was probably going to be aimed at you. Among all of his positive traits, Al Keglovits will be most remembered by his family and friends for his sense of humor and his love for the game of basketball.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              Remembering
              <strong> Arthur Perryman</strong>
            </h2>
            <hr />
          </div>
          <img className="img-responsive float-left mr-2" src={ART} alt="Photo of Arthur PerryMan" />

          <p>
            Loved and cared for all his peers, Arthur never used profanity; he was gentle, kind and loving. I never once heard anyone say anything negative about him. He was unselfish and thought of others before himself. His family was very important to him. He was a caring, thoughtful brother and son. Arthur was never alone, always with his friends or his sisters.
          </p>
          {' '}
          <p>
            {' '}
            <strong>Athletic Achievements:</strong>
            {' '}
          </p>
          <ul className="arthur overflow-hidden">
            <li>Earned four varsity basketball letters</li>
            <li>Started all 105 varsity basketball games during his 4 year career at East Stroudsburg South</li>
            <li>Most Valuable Athlete 1992, 1993, 1994</li>
            <li>Leading scorer in ESHS basketball history with 1,735</li>
            <li>First team All-Monroe County 1992, 1993, 1994</li>
            <li>All-Centennial League 1993, 1994</li>
            <li>All-Allentown Morning Call Newspaper 1994</li>
            <li>Averaged 28.3 points per game in the 1994 P.I.A.A. State Basketball Tournament</li>
          </ul>
          <p>
            Believe it or not, Arthur didn't care how many points he scored, he only cared if the team won.
            <br />
            <strong>
              HE WAS A GREAT TEAM PLAYER!
            </strong>
          </p>
        </div>
      </div>

      <div className="row d-block">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center">
              about
              <strong> the game</strong>
            </h2>
            <hr />
            <h3 className="intro-text text-center">
              2019
              {' '}
              <strong>Teams</strong>
            </h3>
            <br />
            {/* <!--<img class="img-responsive" src="http://placehold.it/750x450" alt="">--> */}
            {/* <!--Place this tag where you want the Awesome Table Widget to render --> */}
            <div data-type="AwesomeTableView" data-viewid="-LaDfulEgcsX9Vik0Nhr" />

            {/* <!-- <img class="img-responsive" src="images/photos/2015_game/2015 All Stars_6416.JPG" alt="">--> */}
          </div>
        </div>
      </div>

      <div className="clearfix" />

    </div>
  </>

);

export default About;
