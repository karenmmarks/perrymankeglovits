import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './SpiritAwards.css';

const SpiritAwards = () => {
  const spiritWinner = [
    {
      key: '0',
      year: '2019',
      name: 'Ken Piontkowski',
      spiritInfo: ['We are so proud to honor Ken Piontkowski with the 2019 “Spirit of Basketball Award.”',
        'Kenny graduated from Nanticoke High School in 1985, where he led his team to the 1985 ‘AA’ State Championship Game and was a two-time MVP of the Wyoming Valley Conference. He scored over 1300 career points and close to 1000 rebounds. His leadership skills and scoring ability earned him recognition as a member of Nanticoke Area’s "Wall of Fame.” As a senior, he was awarded a Presidential Scholarship to Kings College in Wilkes-Barre, Pa. He went on to play for the Monarchs for the next 4 years while earning his teaching degree in secondary education math. He has taught AP Calculus at Pleasant Valley for 26 years.',
        'Ken served as the head varsity boy’s basketball coach at Pleasant Valley High School for 19 years, from 1995-2014. In his third year, he took home the 1998 District XI ‘AAAA’ gold and was named Morning Call, Pocono Record, and Times-News Coach of the Year. In 2003, he won Mountain Valley Conference gold when his team beat East Stroudsburg South in the First season of the revamped conference. Always regarded as one of the most respected and knowledgeable coaches in the area, he routinely took undermanned teams to six different appearances in Mountain Valley Conference championship games and qualifed for the District XI playoffs 12 different times. His 19-year career record was 225-223. In 2015 Ken became the 7th/8th grade boy’s basketball coach at Pocono Mountain West, and in 2018 moved up to Varsity Assistant, where he remains.',
        'Off the court there are a number of things that Ken spear-headed that people may not be aware of, according to colleagues and fellow former PV basketball coaches Steven Ayers and Dave Stefani. From 2009 to 2014 he organized Shoot for the Cure a basketball tournament to help raise awareness and money for metastatic breast cancer research, in honor of Lucy Stanovick, a former coach and mom of two PV basketball players, Nick & Kate. Together with Lucy’s husband John, her kids, her family and our PV boys and girls players, thousands of dollars were raised. Ken continues to hold this fundraiser at Pocono Mountain West.',
        'He was instrumental in helping to get several of his players over the years into a better position to be accepted into college. He had one of his teams paint the home of a family in need for Habitat for Humanity. Lisa Neubert, his long-time booster club president, can remember many times trying to figure out how they were going to get this player or that one a decent pair of basketball shoes for the season, or rides to and from games, or even lunch money for the week. He would pay for these things out of his own pocket, rather than see one of his players go without. Ken’s long-time friend and colleague Mark Allison said, “The committee couldn’t have made finer choice in Kenny. Coach Piontkowski was my freshman coach when I was the head coach at Pleasant Valley. He then took over the head coaching position when I retired. Kenny has always been a hard working coach with a tremendous amount of basketball knowledge. Ken impressed me as a coach and as a person right from the very beginning. The thing that has always impressed me the most is how much Kenny cares about all of his kids and all the things he does for them. His players always loved him and played hard out of respect for him.',
        'Kenny works just as hard, cares just as much in the classroom as a teacher. He has always had great respect from his peers. Kenny has always been a class act and has the respect of everyone that knows basketball in this area. I am so proud of Kenny. When he took over as head coach at PV, he took basketball to greater heights, including a district championship. He was the right man for the job. Kenny’s hard work and dedication is evident by all the work he does for the All Star game. He has done a great service to the players, coaches, and fans of basketball in this area. I am so happy Kenny is getting this award. He certainly deserves it. I look forward to seeing him get the award. He is a great coach, great friend, great teacher, and one of the finest people I know.” ',
        'We heard these sentiments over and over from all the folks we spoke with while gathering our information and interviewing people. But who better to sum up what an impact Ken has made in basketball, as a coach and as a mentor, than former all star player, Pleasant Valley (and later Wilkes) boys basketball record holder, Tommy Kresge. “When I started out playing basketball I learned everything from my father, who coached me throughout grade school, but when I got to the high school level, my game elevated to a different level, and I owe that to Coach P for helping me grow in the game. His passion for the game was contagious and right from the start I gained immense respect for him and how he approached the game of basketball. He taught me that every practice is a chance to get better, and that even if you work hard, there is someone out there trying to work harder than you, and to never settle for anything. His competitiveness brought out the best in his players. I could talk about everything that involves Coach P and the game of basketball, but what I admired the most about him was his character. He’s a great guy and I’m proud to have experienced four years with him as my coach. If anyone deserves this award, it’s Coach P.”',
      ],
    },
    {
      key: '1',
      year: '2018',
      name: 'Rose Haller',
      spiritInfo: ['A veteran coach with plenty of experience, Rose Haller was named the head coach of the Centenary University women’s basketball team before the start of the 2016-17 season.',
        'During the 2017-18 season, Haller guided the Cyclones to their second straight appearance in the Colonial States Athletic Conference (CSAC) playoffs. Under her watch, senior Nicole Cartaino earned Second Team All-CSAC honors while fellow senior Rachel Edwards became the ninth player in program history to reach the 1,000 career point plateau.',
        'During her first season on the Cyclones’ bench, Haller led Centenary to a 20-7 overall mark. The Cyclones advanced to the CSAC playoffs and made an appearance in the East Coast Athletic Conference (ECAC) Tournament. Haller mentored Mallory George, who became the program’s all-time leading scorer with 1,549 career points. George also became the first player in program history to record over 1,000 career points and 1,000 career rebounds.',
        'After leading Centenary to the second best season in program history, Haller was named the 2016-17 Centenary University Coach of the Year.',
        'In addition to her duties as the women’s basketball coach, Haller serves as the scheduling coordinator, officials coordinator and meals/transportation coordinator for the Cyclones.',
        'Haller came to Centenary after spending seven seasons as the head coach at East Stroudsburg University. While at East Stroudsburg, she led the Warriors to three straight Pennsylvania State Athletic Conference (PSAC) East Championships. Haller and the Warriors won the PSAC Tournament Championship in 1994 and advanced to the NCAA Tournament in 1993 and 1994. She was named the PSAC Coach of the Year in 1993 and 1994 and in also was named the Division II, District II College Coach of the Year in 1994.',
        'At East Stroudsburg, Haller was responsible for managing all aspects of the program, including academics, recruiting, the budget, scouting, fundraising and more. In addition to her basketball duties, Haller helped plan and run summer basketball camps, established a camp sponsorship program for underprivileged youth. She was the athletic department’s representative for freshman orientation among other programs.',
        'In addition to her collegiate coaching experience, Haller has plenty of high school coaching experience. She was head coach at East Stroudsburg High School from 1987-1991 and after her time at East Stroudsburg University, she served first as the head coach at Pocono Mountain West High School and then at Pocono Mountain East High School. Haller was responsible for starting the Pocono Mountain West program after the inception of the new school in 2002. She won multiple league championships and qualified for districts several times.',
        'Haller was a talented point guard during her collegiate playing career at East Stroudsburg University. She scored 1,050 career points and dished out 365 career assists for the Warriors. Haller led East Stroudsburg to the PSAC Eastern Championship in 1985. Her 410 points rank 18th in single-season school history while her 147 assists during the 1984-85 season still ranks fourth in single-season history. Both of those numbers set a school record when she originally did it. She was named the team MVP twice and was the Female Athlete of the Year in 1985.',
        'Haller earned her bachelor’s in movement and sports studies and her masters in education/sport management from East Stroudsburg.',
        'Haller has been inducted into the Lebanon Catholic Hall of Fame, the East Stroudsburg University Hall of Fame and the Lebanon County Hall of Fame for both her time as a player and a coach.',
      ],
    },
    {
      key: '2',
      year: '2017',
      name: 'Rich Osswald',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '3',
      year: '2016',
      name: 'John Marvin',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '4',
      year: '2015',
      name: 'Robert M. Madsen',
      spiritInfo: ['Robert Madsen gained his love and knowledge for the game of basketball at an extremely early age. When he was six, he and his brothers could always be found at the Wall High School in New Jersey practices and games.',
        'At the age of eight, Robert Kennedy gave all three Madsen Brothers (Duke, John & Bob) work scholarships at the Pocono Invitational Basketball Camp in Cherry Valley, Stroudsburg. Bob continued to work through his high school years. It was also an opportunity to hear some of the nation’s best basketball coaches expound upon their basketball knowledge. It gave Bob a fantastic background in the different ways a coach can influence a young ball player’s life!',
        'While attending Brookdale College, Larry Hennesy, the head basketball coach, approached Bob to assist him with the team. While coaching at Brookdale, Bob also completed the refereeing cadet course and was thrown into the world of officiating high school ball and also worked the famous “Jersey Shore Basketball League”.',
        'After Brookdale Bob was hired full time at the Pocono Invitational Basketball Camp (this group was later named the “Hoop Group”). It was around this time period that Jay Butler hired Bob to be his Full Time Assistant Women’s Basketball Coach at Davis and Elkins in West Virginia. When Jay Butler left, Bob was elevated to be the Head Coach. Bob Madsen left Davis and Elkins and after several years, took over the Girls High School Basketball program at Stroudsburg.',
        'Bob moved on a few years later, helping Head Coach Ken Piontkowski coach the Varsity Boys at Pleasant Valley.',
        'According to former PV coach Ken Piontkowski, the students and athletes of Pleasant Valley have been lucky to have had Bob as a mentor and teacher. “His methods and delivery are sometimes unusual,” Piontkowski joked, “but the students and athletes love him because he’s authentic and they sense how much he truly cares about them.” Bob has touched the lives of so many special-needs students and so many athletes at Pleasant Valley that his contributions to PV alone make him worthy of this honor.”',
        'This past year Bob was invited to work with “The” Denny Douds and his football staff.',
        '“The outstanding thing about Robert M. Madsen is his willingness to give of himself for the benefit of others”. Bob is the perfect example of the Spirit of Basketball Award. Al Keglovits, I am sure, is very proud!!',
      ],
    },
    {
      key: '5',
      year: '2014',
      name: 'Michael A. Stern',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '6',
      year: '2013',
      name: 'Msr. Johnn A. Bergamo',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '7',
      year: '2012',
      name: 'Bob Capasso & Dr. Bob Milvy',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '8',
      year: '2011',
      name: 'John Catanzaro',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '9',
      year: '2010',
      name: 'Bob & Patty Kennedy',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '10',
      year: '2009',
      name: 'Ed Hagy',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '11',
      year: '2008',
      name: 'Tom Kresge',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '12',
      year: '2007',
      name: 'Bill Pensyl',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '13',
      year: '2006',
      name: 'Jim Werkheiser',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '14',
      year: '2005',
      name: 'Ed Branyan',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '15',
      year: '2004',
      name: 'Bill White',
      spiritInfo: ['',
        '',
        '',
      ],
    },
    {
      key: '16',
      year: '2003',
      name: 'Pete Nevins',
      spiritInfo: ['Former Sports Information Director: East Stroudsburg University, University of Miami 60 - Pete Nevins was one of the nations most highly respected sports information directors.',
        'He is a member of the College Sports Information Directors (CoSIDA) Hall of Fame and has received the Warren Berg Award as the outstanding college SID in the nation. He also was honored with a lifetime achievement award from CoSIDA last  .',
        'He worked eight years as a sports-writer in Bridgeport, Connecticut and five and a half years as the SID at the University of Bridgeport before coming to ESU in March 1969. In addition to handling public relations, Nevins ran special events for the athletic department, including the Athletic Hall of Fame Banquet and the Athletic Awards Banquet.',
        'He taught graduate courses in Public Relations in Sport Management. Nevins received a bachelors degree in Business Administration from the University of Miami in 1960 and a masters degree in Health and Physical Education from East Stroudsburg in 1984.',
        'He currently writes the College Corner column and features for The Pocono Record. Nevins has been married for 41 years and he and his wife, Gail, have two sons, Douglas, now living in West Chester, Pa. and Daniel, Wayne, Pa. and four grandchildren.',
        'Please Note: We lost Peter to cancer in on January 6, 2007.',
      ],
    },

  ];

  return (
    <>
      <br />
      <div className="container page">
        <div className="row">
          <div className="box">
            <div className="col-lg-12 mx-auto">
              <h1 className="intro-text mt-2 ml-1"><strong>Spirit Awards</strong></h1>
              <p className="text-left">Choose a Spirit Award Winner from the menu below:</p>
              <Accordion>
                {spiritWinner.map((spiritContent) => {
                  const {
                    key, year, name, spiritInfo,
                  } = spiritContent;
                  return (
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={key}>
                          <h2 className="intro-text text-left">
                            {year}
                            {' '}
                            -
                            {' '}
                            <strong>
                              {' '}
                              {name}
                            </strong>
                          </h2>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={key}>
                        <Card.Body>
                          <div className="text-left">
                            {spiritInfo.map((spiritInfo) => (
                              <p>{spiritInfo}</p>
                            ))}
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpiritAwards;
