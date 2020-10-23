import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './SpiritAwards.css';

const SpiritAwards = () => (
  <>
    <h1>Spirit Awards</h1>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <h2 className="intro-text text-left">
              2019 -
              {' '}
              <strong>Ken Piontkowski</strong>
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>We are so proud to honor Ken Piontkowski with the 2019 “Spirit of Basketball Award.”</p>
            <p>
              Kenny graduated from Nanticoke High School in 1985, where he led his team to the 1985 ‘AA’ State Championship Game and was a two-time MVP of the Wyoming Valley Conference. He scored over 1300 career points and close to 1000 rebounds. His leadership skills and scoring ability earned him recognition as a member of Nanticoke Area’s "Wall of Fame.” As a senior, he was awarded a Presidential Scholarship to Kings College in Wilkes-Barre, Pa. He went on to play for the Monarchs for the next 4 years while earning his teaching degree in secondary education math. He has taught AP Calculus at Pleasant Valley for 26 years.
            </p>
            <p>
              Ken served as the head varsity boy’s basketball coach at Pleasant Valley High School for 19 years, from 1995-2014. In his third year, he took home the 1998 District XI ‘AAAA’ gold and was named Morning Call, Pocono Record, and Times-News Coach of the
              Year. In 2003, he won Mountain Valley Conference gold when his team beat East Stroudsburg South in the First season of the
              revamped conference. Always regarded as one of the most respected and knowledgeable coaches in the area, he routinely took
              undermanned teams to six different appearances in Mountain Valley Conference championship games and qualifed for the
              District XI playoffs 12 different times. His 19-year career record was 225-223. In 2015 Ken became the 7th/8th grade boy’s basketball coach at Pocono Mountain West, and in 2018 moved up to Varsity Assistant, where he remains.
            </p>
            <p>
              Off the court there are a number of things that Ken spear-headed that people may not be aware of, according to colleagues
              and fellow former PV basketball coaches Steven Ayers and Dave Stefani. From 2009 to 2014 he organized Shoot for the Cure –
              a basketball tournament to help raise awareness and money for metastatic breast cancer research, in honor of Lucy Stanovick,
              a former coach and mom of two PV basketball players, Nick & Kate. Together with Lucy’s husband John, her kids, her family
              and our PV boys and girls players, thousands of dollars were raised. Ken continues to hold this fundraiser at Pocono Mountain
              West.
            </p>
            <p>
              He was instrumental in helping to get several of his players over the years into a better position to be accepted into college.
              He had one of his teams paint the home of a family in need for Habitat for Humanity. Lisa Neubert, his long-time booster club president, can remember many times trying to figure out how they were going to get this player or that one a decent pair of basketball shoes for the season, or rides to and from games, or even lunch money for the week. He would pay for these things out of his own pocket, rather than see one of his players go without. Ken’s long-time friend and colleague Mark Allison said, “The committee couldn’t have made finer choice in Kenny. Coach Piontkowski was my freshman coach when I was the head coach at Pleasant Valley. He then took over the head coaching position when I retired. Kenny has always been a hard working coach with a tremendous amount of basketball knowledge. Ken impressed me as a coach and as a person right from the very beginning. The thing that has always impressed me the most is how much Kenny cares about all of his kids and all the things he does for them. His players always loved him and played hard out of respect for him.
            </p>
            <p>
              Kenny works just as hard, cares just as much in the classroom as a teacher. He has always had great respect from his peers. Kenny has always been a class act and has the respect of everyone that knows basketball in this area. I am so proud of Kenny. When he took over as head coach at PV, he took basketball to greater heights, including a district championship. He was the right man for the job. Kenny’s hard work and dedication is evident by all the work he does for the All Star game. He has done a great service to the players, coaches, and fans of basketball in this area. I am so happy Kenny is getting this award. He certainly deserves it. I look forward to seeing him get the award. He is a great coach, great friend, great teacher, and one of the finest people I know.”
            </p>
            <p>
              We heard these sentiments over and over from all the folks we spoke with while gathering our information and interviewing
              people. But who better to sum up what an impact Ken has made in basketball, as a coach and as a mentor, than former all star
              player, Pleasant Valley (and later Wilkes) boys basketball record holder, Tommy Kresge. “When I started out playing basketball I learned everything from my father, who coached me throughout grade school, but when I got to the high school level, my game elevated to a different level, and I owe that to Coach P for helping me grow in the game. His passion for the game was contagious and right from the start I gained immense respect for him and how he approached the game of basketball. He taught me that every practice is a chance to get better, and that even if you work hard, there is someone out there trying to work harder than you, and to never settle for anything. His competitiveness brought out the best in his players. I could talk about everything that involves Coach P and the game of basketball, but what I admired the most about him was his character. He’s a great guy and I’m proud to have experienced four years with him as my coach. If anyone deserves this award, it’s Coach P.”
            </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <h2 className="intro-text text-left">
              2018 -
              {' '}
              <strong> Spirit Award Winner</strong>
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            <h2 className="intro-text text-left">
              2017 -
              {' '}
              <strong>Spirit Award Winner</strong>
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            <h2 className="intro-text text-left">
              2016 -
              {' '}
              <strong> Spirit Award Winner</strong>
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            <h2 className="intro-text text-left">
              2015 -
              {' '}
              <strong>Robert M. Madsen</strong>
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <div className="text-left">
              <p>
                Bob gained his love and knowledge for the game of basketball at an extremely early age. When he was six, he and his brothers could always be found at the Wall High School in New Jersey practices and games.
              </p>
              <p>
                At the age of eight, Robert Kennedy gave all
                three Madsen Brothers (Duke, John & Bob) work
                scholarships at the Pocono Invitational Basketball
                Camp in Cherry Valley, Stroudsburg. Bob continued
                to work through his high school years. It was also an
                opportunity to hear some of the nation’s best basketball
                coaches expound upon their basketball knowledge. It
                gave Bob a fantastic background in the different ways
                a coach can influence a young ball player’s life!
              </p>
              <p>
                While attending Brookdale College, Larry
                Hennesy, the head basketball coach, approached Bob
                to assist him with the team. While coaching at Brookdale, Bob also completed the refereeing cadet
                course and was thrown into the world of officiating high school ball and also worked the famous
                “Jersey Shore Basketball League”.
              </p>
              <p>
                After Brookdale Bob was hired full time at the Pocono Invitational Basketball Camp (this group
                was later named the “Hoop Group”). It was around this time period that Jay Butler hired Bob to be his
                Full Time Assistant Women’s Basketball Coach at Davis and Elkins in West Virginia. When Jay Butler
                left, Bob was elevated to be the Head Coach. Bob Madsen left Davis and Elkins and after several years,
                took over the Girls High School Basketball program at Stroudsburg.
              </p>
              <p>
                Bob moved on a few years later, helping Head Coach Ken Piontkowski coach the Varsity Boys at Pleasant Valley.
              </p>
              <p>
                According to former PV coach Ken Piontkowski, the students and athletes of Pleasant Valley
                have been lucky to have had Bob as a mentor and teacher. “His methods and delivery are sometimes
                unusual,” Piontkowski joked, “but the students and athletes love him because he’s authentic and they
                sense how much he truly cares about them.” Bob has touched the lives of so many special-needs
                students and so many athletes at Pleasant Valley that his contributions to PV alone make him worthy
                of this honor.”
              </p>
              <p>
                This past year Bob was invited to work with “The” Denny Douds and his football staff.
              </p>
              <p>
                “The outstanding thing about Robert M. Madsen is his willingness to give of himself for the
                benefit of others”. Bob is the perfect example of the Spirit of Basketball Award. Al Keglovits, I am
                sure, is very proud!!
              </p>
            </div>

          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="5">
            <h2 className="intro-text text-left">
              2014 -
              {' '}
              <strong> Michael A. Stern</strong>
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="6">
            <h2 className="intro-text text-left">
              2013 -
              {' '}
              <strong> Msgr. John A. Bergamo</strong>
            </h2>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="6">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="7">
            2012 - Bob Capasso & Dr. Bob Milvy
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="8">
            2011 - Joseph Catanzaro
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="9">
            2010 - Bob and Patty Kennedy
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="9">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="10">
            2009 - Ed Hagy
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="10">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="11">
            2008 - Tom Kresge
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="11">
          <Card.Body> Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="12">
            2007 - Bill Pensyl
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="12">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="13">
            2006 - Jim Werkheiser
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="13">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="14">
            2005 - Ed Branyan
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="14">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="15">
            2004 - Bill White
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="15">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="16">
            2003 - Pete Nevins
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="16">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </>

);

export default SpiritAwards;
