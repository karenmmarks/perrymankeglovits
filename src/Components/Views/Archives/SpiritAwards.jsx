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
        'Kenny graduated from Nanticoke High School in 1985, where he led his team to the 1985 ‘AA’ State Championship Game and was a two-time MVP of the Wyoming Valley Conference. He scored over 1300 career points and close to 1000 rebounds. His leadership skills and scoring ability earned him recognition as a member of Nanticoke Area\’s "Wall of Fame.” As a senior, he was awarded a Presidential Scholarship to Kings College in Wilkes-Barre, Pa. He went on to play for the Monarchs for the next 4 years while earning his teaching degree in secondary education math. He has taught AP Calculus at Pleasant Valley for 26 years.',
        'Ken served as the head varsity boy’s basketball coach at Pleasant Valley High School for 19 years, from 1995-2014. In his third year, he took home the 1998 District XI ‘AAAA’ gold and was named Morning Call, Pocono Record, and Times-News Coach of the Year. In 2003, he won Mountain Valley Conference gold when his team beat East Stroudsburg South in the First season of the revamped conference. Always regarded as one of the most respected and knowledgeable coaches in the area, he routinely took undermanned teams to six different appearances in Mountain Valley Conference championship games and qualifed for the District XI playoffs 12 different times. His 19-year career record was 225-223. In 2015 Ken became the 7th/8th grade boy’s basketball coach at Pocono Mountain West, and in 2018 moved up to Varsity Assistant, where he remains.',
        'Off the court there are a number of things that Ken spear-headed that people may not be aware of, according to colleagues and fellow former PV basketball coaches Steven Ayers and Dave Stefani. From 2009 to 2014 he organized Shoot for the Cure a basketball tournament to help raise awareness and money for metastatic breast cancer research, in honor of Lucy Stanovick, a former coach and mom of two PV basketball players, Nick & Kate. Together with Lucy\’s husband John, her kids, her family and our PV boys and girls players, thousands of dollars were raised. Ken continues to hold this fundraiser at Pocono Mountain West.',
        'He was instrumental in helping to get several of his players over the years into a better position to be accepted into college. He had one of his teams paint the home of a family in need for Habitat for Humanity. Lisa Neubert, his long-time booster club president, can remember many times trying to figure out how they were going to get this player or that one a decent pair of basketball shoes for the season, or rides to and from games, or even lunch money for the week. He would pay for these things out of his own pocket, rather than see one of his players go without. Ken’s long-time friend and colleague Mark Allison said, “The committee couldn’t have made finer choice in Kenny. Coach Piontkowski was my freshman coach when I was the head coach at Pleasant Valley. He then took over the head coaching position when I retired. Kenny has always been a hard working coach with a tremendous amount of basketball knowledge. Ken impressed me as a coach and as a person right from the very beginning. The thing that has always impressed me the most is how much Kenny cares about all of his kids and all the things he does for them. His players always loved him and played hard out of respect for him.',
        'Kenny works just as hard, cares just as much in the classroom as a teacher. He has always had great respect from his peers. Kenny has always been a class act and has the respect of everyone that knows basketball in this area. I am so proud of Kenny. When he took over as head coach at PV, he took basketball to greater heights, including a district championship. He was the right man for the job. Kenny’s hard work and dedication is evident by all the work he does for the All Star game. He has done a great service to the players, coaches, and fans of basketball in this area. I am so happy Kenny is getting this award. He certainly deserves it. I look forward to seeing him get the award. He is a great coach, great friend, great teacher, and one of the finest people I know.” ',
        'We heard these sentiments over and over from all the folks we spoke with while gathering our information and interviewing people. But who better to sum up what an impact Ken has made in basketball, as a coach and as a mentor, than former all star player, Pleasant Valley (and later Wilkes) boys basketball record holder, Tommy Kresge. “When I started out playing basketball I learned everything from my father, who coached me throughout grade school, but when I got to the high school level, my game elevated to a different level, and I owe that to Coach P for helping me grow in the game. His passion for the game was contagious and right from the start I gained immense respect for him and how he approached the game of basketball. He taught me that every practice is a chance to get better, and that even if you work hard, there is someone out there trying to work harder than you, and to never settle for anything. His competitiveness brought out the best in his players. I could talk about everything that involves Coach P and the game of basketball, but what I admired the most about him was his character. He’s a great guy and I’m proud to have experienced four years with him as my coach. If anyone deserves this award, it\’s Coach P.”',
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
        'In addition to her duties as the women\’s basketball coach, Haller serves as the scheduling coordinator, officials coordinator and meals/transportation coordinator for the Cyclones.',
        'Haller came to Centenary after spending seven seasons as the head coach at East Stroudsburg University. While at East Stroudsburg, she led the Warriors to three straight Pennsylvania State Athletic Conference (PSAC) East Championships. Haller and the Warriors won the PSAC Tournament Championship in 1994 and advanced to the NCAA Tournament in 1993 and 1994. She was named the PSAC Coach of the Year in 1993 and 1994 and in also was named the Division II, District II College Coach of the Year in 1994.',
        'At East Stroudsburg, Haller was responsible for managing all aspects of the program, including academics, recruiting, the budget, scouting, fundraising and more. In addition to her basketball duties, Haller helped plan and run summer basketball camps, established a camp sponsorship program for underprivileged youth. She was the athletic department’s representative for freshman orientation among other programs.',
        'In addition to her collegiate coaching experience, Haller has plenty of high school coaching experience. She was head coach at East Stroudsburg High School from 1987-1991 and after her time at East Stroudsburg University, she served first as the head coach at Pocono Mountain West High School and then at Pocono Mountain East High School. Haller was responsible for starting the Pocono Mountain West program after the inception of the new school in 2002. She won multiple league championships and qualified for districts several times.',
        'Haller was a talented point guard during her collegiate playing career at East Stroudsburg University. She scored 1,050 career points and dished out 365 career assists for the Warriors. Haller led East Stroudsburg to the PSAC Eastern Championship in 1985. Her 410 points rank 18th in single-season school history while her 147 assists during the 1984-85 season still ranks fourth in single-season history. Both of those numbers set a school record when she originally did it. She was named the team MVP twice and was the Female Athlete of the Year in 1985.',
        'Haller earned her bachelor\’s in movement and sports studies and her masters in Education / Sport Management from East Stroudsburg.',
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
      spiritInfo: ['Michael A. Stern, born April 20, 1961 to parents Harold and Natalie Stern. Michael grew up in the Bronx attended James Monroe High School and attended Sullivan County Community College.',
        'Michael is married to Carol Stern and they have four daughters. Michael and his family moved to the Poconos 18 years ago. The family got involved in many programs since the girls were involved in basketball at their schools. Two of their daughters played basketball for the Pocono Mountain West teams. Michael became involved in the Pocono Youth Basketball Association first as an assistant coach, then leaving the program after his girls were finished playing youth ball. Michael was approached about 10 years ago to take over the Pocono Youth Basketball Association and he quickly jumped on the opportunity to take over the program. During his tenure, the program has grown from grades 3rd to 6th to now having a senior league for boys in grades 7th – 12th. The older boys play against the east program of the Pocono Mountain School District. Michael also serves as the President of the Pocono Mountain Ecumenical Hunger Ministry, which is the local food pantry that assists families in the community. Michael is currently serving a 4-year term as a School Board Director for the Pocono Mountain School District. This is the second time that he has held this elected position.',
        'Michael is employed by the Rockefeller Family in New York City as a Records Manager. He has worked for the family for 24 years. Michael also works with an organization that presents classic R & B concerts in the Poconos.',
        'When Michael is not volunteering with the Pocono Youth Basketball Association and the Pocono Mountain Ecumenical Hunger Ministry he enjoys spending time with family and friends and also listening to classic R & B and watching HGTV.',
      ],
    },
    {
      key: '6',
      year: '2013',
      name: 'Msr. Johnn A. Bergamo',
      spiritInfo: ['Monsignor John A. Bergamo, Native of Hazelton, graduate of Mt. St. Mary’s College, Mt. St. Mary\’s Seminary and the Gregorian University, Rome. Ordained a priest for the Diocese of Scranton in 1965. Had assignments in Hazelton, Dallas (PA), Williamsport, Dalton.',
        'Monsignor John A. Bergamo was the Pastor of St. Rita\’s, Gouldsboro, 1979-1986. Monsignor John A. Bergamo was the Pastor of St. Matthew’s, East Stroudsburg since 1986. Has taught classes at Misericordia and at the University of Scranton. Has taught in the Catholic high schools of the diocese since ordination and at Notre Dame since 1986.',
        'He also serves as Director of Religious Formation at Notre Dame. Coached Notre Dame Elementary School basketball teams and has been coaching Notre Dame Jr. High boys since 1991.',
      ],
    },
    {
      key: '7',
      year: '2012',
      name: 'Bob Capasso & Dr. Bob Milvy',
      spiritInfo: ['The basketball announcing team of Bob Capasso and Bob Mlkvy has been together since 1996 and has covered over 500 great basketball games!',
        'Dr. Bob Mlkvy has been providing the color commentary for high school basketball on Blue Ridge Communications TV13 for over 25 years. Bob Mlkvy is a dentist in Palmerton but sports enthusiasts know him as an amazing basketball player who continues to wear his Chuck Taylor sneakers to all the games he announces. “Dr. Bob,” was an All-America at Penn from 1957 to 1961 and is a member of the Big 5 Hall 0f Fame. Bob was a standout player for his high school team in Palmerton and inducted into the Lehigh Valley Sports Hall of Fame. He even toured with Washington Generals as they played with the Harlem Globetrotters and toured the world. He first came to BRC TV13 as a basketball analyst in 1987. His positive style, knowledge of the game and “Dr. Bob’s Board” pregame segment are popular throughout the region. ',
        'Bob Capasso is the Sports Director for Blue Ridge Communications TV13 where he is the senior sports anchor on the nightly newscasts and the play by play announcer for area football games along with The Scranton Wilkes Barre Yankees telecasts and of course all the area basketball games. Bob Capasso won an EMMY award for his outstanding Play by Play coverage of sports in the region. When he is not announcing a sporting event or anchoring sports on the nightly newscasts Bob is busy hosting two weekly sports talk shows. Monday   Evening Quarterback airs during football season and SportScene 13 airs during basketball season. The shows recently celebrated a milestone - two decades on the air highlighting games along with coaches and player perspectives. Bob came to the station in 1991 following his early years in radio. He is a Seton Hall graduate where he played football for the Pirates.',
      ],
    },
    {
      key: '8',
      year: '2011',
      name: 'John Catanzaro',
      spiritInfo: ['We are blessed today to honor our very own Joe “Cat” Catanzaro stand before to receive the 9th Annual Spirit of Basketball Award. Joe comes to us from the Coal Minning area of Scranton but now he is all “Monroe County”. Joe has a bachelors degree from East Stroudsburg University and a Masters from Marywood in Counseling. Now,  I know why Counseling! Just think of all the coaches Joe had to Counsel along the way as they jump up and down on the sidelines. Joe, presently is serving his 19th year as PIAA State interpreter which comprises 12 districts, 85 Chapters and over 6000 Basketball Officals.  Joe is in his 25th year as District 11 Interpreter and 30th year as our Chapter Interpreter.',
        '“Joe Cat” has taught many of our current officials through the officiating course here at ESU Joe, presents several programs each year at the PIAA Officals Convention. Please note in order to do state playoff games this is a must and officials must attend at least every 5 years.',
        'Joe has worked over “Listen to This”…over 2500 games high school basketball games the past 40 years. In the collegiate Ranks Joe has officiated at the Division 1,2 and 3 levels which include Big East, Ivy League, ACC, Patriot League, PSAC and MAC… Joe thanks for all you have done to bring Basketball Officiating to a level of respect and Fairness!!!',
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
      spiritInfo: ['Ed Hagy was a star on both the basketball and football teams at Stroudsburg High School and is a member of the Stroudsburg High School Hall of Fame. Upon graduating from Lycoming College, he returned to Stroudsburg and has been an integral part of youth sports ever since.',
        'He became a PIAA basketball referee but soon turned in his officiating whistle for a coaching one when he became the assistant boys basketball coach at Stroudsburg High School where he helped to coach the Mountaineers to five Mountain Valley Conference and two District XI titles in the late 1990s.',
        'Ed went on to help coach youth soccer in the Pocono Mountain Youth Soccer Association for two years before once again concentrating on coaching basketball. He spent three years coaching in the YMCA basketball program and has spent the last four years coaching in the Stroudsburg 5/6th grade program.',
        'In the meantime, he has both sponsored and coached teams in the Reeders-Hornets Summer Basketball League and the Forks Township Summer Basketball League. He had also continued to provide sponsorship to the Stroudsburg Boys Basketball program',
        'Eds financial support and endless hours teaching basketball has helped hundreds of players to attend both summer basketball leagues and basketball team camps. Finally, since it is inception in 2003, Ed has been a major sponsor and supporter of the Perryman Keglovits All-Star Games Ed Hagy of Nationwide Insurance is certainly on our Communities side!!!',
      ],
    },
    {
      key: '11',
      year: '2008',
      name: 'Tom Kresge',
      spiritInfo: ['Thomas J. Kresge, one of the founders of the Western Pocono Jaycees basketball program, is this years Spirit of Basketball Award winner. The Jaycees program, which was started in 1982 at the 5th and 6th grade level, was instrumental to the development of basketball in the West End and the Pleasant Valley School District . Tom ran the program for seventeen years. He was involved in all aspects, including coordinating gym times, scheduling practices and games, refereeing, and, of course, coaching. The Jaycee program grew from eight players his first year, to well over one hundred participants by the end of Toms tenure. During that time, the 5th and 6th grade teams won two Greater Pocono Basketball Tournaments, a Pocono Mountain Tournament and an East Stroudsburg Tournament.',
        'After his work with the Jaycees, Tom went on to volunteer as an assistant coach for Pleasant Valley at the 7th and 8th grade level. He served in this capacity for two seasons, and then served as head 8th grade coach for one year. For the past two seasons, he has volunteered his time as an assistant for the Pleasant Valley junior varsity team. In 1996, Tom was honored with the Outstanding Service to Youth award, presented to him by long-time Stroudsburg middle school coach Bill White. Tom continues to be involved in basketball, and continues to have a positive influence on players in the Pleasant Valley basketball program.',
      ],
    },
    {
      key: '12',
      year: '2007',
      name: 'Bill Pensyl',
      spiritInfo: ['Bill Pensyl graduated from ESHS in 1955, earning 3 varsity letters in basketball and 3 varsity letters in baseball. He was a starter on Coach Jack Kists 1955 District Baseball Championship team, the only one in ESHS baseball history. While at ESHS, Bill scored 848 career points in varsity basketball and he went on receive "Little All-American" recognition in basketball at Elizabethtown College.',
        'Upon graduation from Elizabethtown, Bill became a teacher, Head Basketball Coach, Head Baseball Coach and ultimately, the Director of Athletics at Bangor High School. He coached basketball at Bangor for 38 years, winning more than 450 games and the 1988 District XI AAA Championship, and coached baseball for 23 years, with his Slater baseball squad advancing to the 1983 P.I.A.A. Baseball State Championship game. Coach Pensyl has already been inducted into the Halls of Fame of Bangor High School, Elizabethtown College, the Blue Mountain Baseball League, Lehigh Valley Basketball and the National High School Sports Federation (NFHS).',
      ],
    },
    {
      key: '13',
      year: '2006',
      name: 'Jim Werkheiser',
      spiritInfo: ['The dream of every coach is to be able to look down their bench and be able to consistently count on the personnel sitting there. A coach needs to be able to look deep into the bench when he or she needs someone to "Step- Up" and get the job done. I am not sure how many East Stroudsburg Coaches really new how deep their benches were. The scores table, in basketball is a neutral area for both teams to report but its also the area were the valuable statistics are kept. The scorers table can be the difference to a coach\'s pre, post and half time speech. It can be the difference between winning, losing and developing the psyche of all players who are part of the team.',
        'It seems like Jim Werkheiser has been around forever. "I graduated from the old Tannersville High School in 1948. Of course you remember the East Stroudsburg State Teachers College predecessor to East Stroudsburg University which I graduated from in 1952". I spent from 1952 till 1954 in the US Army. My first teaching job was at the Reeders Elementary School.',
        'I joined the East Stroudsburg Faculty in the fall of 1955. While at East Stroudsburg, "No grass grew under Jim\'s feet". He spent 37 years with the basketball program 6 as a coach and 31 years as a scorekeeper and statistician. Mr.Werkheiser coached 2 years as a golf coach, 5 years as a football coach, 20 years as a baseball coach and believe it or not even found time as president of the East Stroudsburg Music Boosters Club. Whew!',
        'Upon retirement in 1993 Jim continues to support his school district and continues to "Bleed Purple" and "Continues to have numbers flowing through his head", while serving on the East Stroudsburg Hall of Fame Steering Committee and the selection committees of the Athletic and Meritorious Walls of Fame.',
        'A man who could be counted and leaned on in the school and on the fields of athletics is Jim Werkheiser. Such a man is here again today to help at the scorers table and is truly deserving of the 2006 "Al Keglovits Spirit of Basketball Award".',
      ],
    },
    {
      key: '14',
      year: '2005',
      name: 'Ed Branyan',
      spiritInfo: ['How many of you remember the Big Red Chuck Taylor High Top Sneakers? You do not Slip nor slide with the stars on the side the Big Gentle Giant! Big Smile, Big Hook Shot, Big Heart? We contacted a few of his former students, they remember Dribble Bounce, Dribble Bounce in gym class follow the rules or your in BIG TROUBLE! Everything this man did and everything he gave was Big!',
        'Our Recipient graduated from East Pennsboro High School in 1960, played 2 sports football and basketball and was president of his class. In 1959 his football team was number 1 in the country that Big. In 1960 he was selected as alternate tight end for the Big 33, in those days they played Texas that is Big! He was wined and dined by 5 major Div 1 colleges Penn State, Miami Univ., Univ. of Arizona to name a few.',
        'We asked him what made you decide to go to college as a basketball player. Well, he said, there were numerous times during the football season that he got up to answer the phone but nobody was on the phone. You see, he had been hit so many times that the bells were ringing only in his head.',
        'Footballs Loss was Basketballs Gain! The Big Red Sneakers decided to attend East Stroudsburg State Teachers College. Those sneakers player for 4 years starting every year and Captain his senior year.',
        'Upon Graduation he taught Physical Education at Oxford, New Jersey. The following year he started the first of 34 years at Stroudsburg school district. He coached boys and girls basketball for 25 years. During his basketball tenure his record was 291 wins and 148 loses. He coached six 1000 point scorers. Realizing that in order for your team to be successful you needed to Practice and work hard so by the droves hundreds of his students attended Pocono Invitational Basketball Camp here in Stroudsburg.',
        'The big Red Sneakers picked the brains of NBA players like Calvin Murphy and Mike Reardon. College coaches like Lou Carnaseca and Bobby Knight. Our role model "the Big Red Sneakers" could be found everywhere in Monroe County playing pick up games with anyone and everyone',
        '"Big Ed" also had a well balanced academic side. He received his masters from East Stroudsburg College. He earned a principals certification while attending Moravian and Lehigh. He prides himself most for having taught every grade, K through 12.',
        'He currently resides in Port Richy, Florida with his lovely wife Kathleen half the year and summers in Stroudsburg. His daughter Stacy lives in Baton Rouge Louisiana and Lance lives here in the Poconos.',
        'Please extend a Very Big Hand for the "Big Red Sneakers" we have loved for over 40 years, Mr. Ed Branyan the 3rd Recipient of the Al Keglovits "Spirit of Basketball Award". Lance please step forward to accept this award on behalf of your DAD!!!',
      ],
    },
    {
      key: '15',
      year: '2004',
      name: 'Bill White',
      spiritInfo: ['He has coached basketball for 36 years. She has kept score at basketball games for 30 years. It all comes together each year as Bill and Bonnie White run the annual Greater Pocono Basketball Tournament for youngsters from fifth to eigth grades. More than 10,000 boys and girls have taken part in the tournament in its 32-year-old history. This year\'s event started Feb. 28th with 46 teams in four divisions and will conclude with championship and consolation round games Saturday. The Whites will be honored for their dedication and commitment to the sport of basketball and the you of the community when they jointly receive the Al Keglovits Spirit of Basketball Award Sunday. The presentation will take place between games of the second annual Arthur Perryman All-Star Basketball Classic at East Stroudsburg University\'s Koehler Fieldhouse. The top area high school senior players will compete in a girls\' game at 3 pm and a boys\' contest at 5. The whites took different routes to the basketball floor at the Stroudsburg Junior High School where the Greater Pocono tournament is now played. Bill grew up in Sayre, loved shop and had no intention of going to college. "My shop teacher convined me to go to school and I did. I applied to Millersville and they were full so I decided to go to Mansfield which was close to my home," he explained. Bill studied government, law and history at the northern Pennsylvania school. He didn\'t compete in varsity sports either in high school or college, but he says he always loved basketball and played a lot of intramurals. "In those days, there were no video games and things like that, you went out and played pickup games in all sports. That was our recreation," he said. Right out of college, Bill got a job teaching history back home at Sayre High School. He got involved in coaching immediately by helping the head basketball coach. "I don\'t know what my title was; I only knew I was helping. In those days, a lot of jobs you volunteered for and didn\'t get paid," he said. One of his original teaching colleagues was Bob Wert, who then took a teaching position in Stroudsburg. "Bob called me in the summer of 1967 and said there was an opening in the Stroudsburg School District. Dick Merring has left to go over to East Stroudsburg as a coach and I took his position as a junior high school teacher in seventh and eighth grades," White said. White started helping George Metropolous coach the fifth and sixth grade basketball team at the Clearview Elementary School. They would play the other elementary schools in town. He then moved over to coach the middle school and then junior high school basketball team, a position he still holds even though he retired as a social studies teacher at Stroudsburg High School last year. In one of his first years as a coach in 1973, Bill entered a team the then-named Monsignor McHugh Tournament run by George Litz of the since-closed Pocono Central High School. That is considered the first Greater Pocono tournament, making this year, according to the Whites, the 32nd year, not the 31st as originally thought. "There only had a few teams then and we wound up winning the title,"" said White. The next year, the current Bonnie White (she married Bill in 1991) came into the picture. The Stroudsburg native had attended ESU, received a bachelor\'s degree in Elementary Education in 1973 and was teaching fifth grade at Clearview. "My first year, we had a boy in class, Eddie Gruzska, who made the Stroudsburg fifth and sixth grade all-star team and I drove him to the tournament. The following year in 1974-75, the middle school opened and Eddie played for Bill\'s team and I started watching him play. I then volunteered to keep score at the games and I have been doing it ever since," Bonnie said. The Greater Pocono Basketball Tournament was run by the late Stanley Lee at the time and was moved to Stroudsburg permanently in 1976. The Whites took over the complete operation a few years later. At first, it was just a fifth and sixth grade boys tourney. "We added seventh and eighth grade boys in 1979, seventh and eighth grade girls in 1980 and fifth and sixth grade girls in 1983," said Bonnie, who now teaches sixth grade remedial math at the Stroudsburg Intermediate School. Over the years, the field has included teams from all the Pocono schools along with teams from New Jersey, the Scranton area and as far away as Hamburg. One of the former tourney players, Tammy Reese of the Eldred, NY team later played in the WNBA after a competing at the University of Virginia. "Bob Salmi (former NBA coach and now an ESPN commentator), who is from Stroudsburg, has said \'s the biggest basketball even for middle school and junior high school boys and girls in the Eastern United States," says Bill. The work on the tournament starts right at the beginning of the year, two months before the event. "I send letters out to the coach from every team from the previous year and I give them a form to fill out and a deadline for applying for the tournament. We also start to work on the ads for the program and on getting volunteers. Mark Slavin, whose sons played in the tournament years ago, takes care of all the trophies and the tournament finances," said Bonnie. Bill then set ups a tournament schedule and gives a list of the games to Kevin Lewis of the local basketball officials association who assigns the officials. Trainer Kelly Unruh from the Stroudsburg Junior High School works the entire tourney. There are numerous other people who help with the 15-day event. Volunteer workers singled out the mention in 64-page tourney program include announcer Bud Ruhl and all-tournament team head Bill Robinson along with Judy Kohlmann, Heather Cail, Barb Kapcala, Elizabeth Weekes, and John Benkoski. "It\'s very time consuming. We spend 100s and 100s of hours on it," said Bonnie, who is the scorekeeper for every tournament game. "It gets me through the winter, however, and when it\'s over, I know spring is here." The satisfaction of running the tourney, both Whites say, is seeing the young boys and girls enjoy themselves and improve as basketball players. "It\'s cool. Sometimes a kid will tell us, they met someone their college dormitory who said "I remember playing against you in the Greater Pocono Tournament". It happens all the time," said Bonnie. "Most of the greater players from the area who star in high school and some in college played in the tournament," said Bill. There are ten huge bulletin boards in the lobby of the Stroudsburg Intermediate School during the tourney with newspapers clippings highlighting the more than three decades of the event and the athletic exploits of former tourney players. The 2004 Greater Pocono Basketball Tournament will end Saturday with third-place games and 8am to 10:30 and the championship contests beginning from 11:45 am to 3:30 pm. After closing the gymnasium, the Whites will head home and when they arrive, Bonnie says they will turn on a television set and naturally, watch basketball. "We both like to watch college games, good fundamental basketball. Bill especially likes the ACC. We don\'t like the pro stuff," says Bonnie. Then Sunday, the Whites will get to watch basketball again, seeing many of their former Greater Pocono Basketball Tournament players close their high school careers in the Perryman Classic. And the players, coaches, and fans will get to say a big thanks to the 36-year basketball coach and the 30-year basketball scorekeeper for representing the spirit of basketball in the community.',
      ],
    },
    {
      key: '16',
      year: '2003',
      name: 'Pete Nevins',
      spiritInfo: ['Former Sports Information Director: East Stroudsburg University, University of Miami 60 - Pete Nevins was one of the nations most highly respected sports information directors.',
        'He is a member of the College Sports Information Directors (CoSIDA) Hall of Fame and has received the Warren Berg Award as the outstanding college SID in the nation. He also was honored with a lifetime achievement award from CoSIDA last.',
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
                            {spiritInfo.map((spiritLine) => (
                              <p>{spiritLine}</p>
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
