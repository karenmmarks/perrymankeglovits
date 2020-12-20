CREATE TABLE IF NOT EXISTS UserAccounts (
	userName VARCHAR (20) NOT NULL,
	password CHAR (60) NOT NULL,
	PRIMARY KEY (userName) 
	);
  
  CREATE TABLE IF NOT EXISTS PlayerInfo (
	userName VARCHAR (20) NOT NULL,
	email VARCHAR (255),
	cellPhone VARCHAR (15),
	jerseySize ENUM ('xs', 'sm', 'md', 'lg', 'xl', '2xl'),
	firstName VARCHAR (255) NOT NULL,
	lastName VARCHAR (255) NOT NULL,
	teamType ENUM ('girlsTeam', 'boysTeam') NOT NULL,
	team ENUM ('KAG', 'PAG', 'KAB', 'PAB'),
	schoolName ENUM ('ESS', 'ESN', 'SB', 'PV', 'PME', 'PMW', 'ESND') NOT NULL,
	userImageUrl VARCHAR (255),
	role enum ('admin', 'coach', 'player') NOT NULL,
	playerNumber VARCHAR (3),
	favSportsTeams TEXT,
	favMovieTVShows TEXT,
	favFoods TEXT,
	famousPersonToMeet TEXT,
	BBallCareerHighlights TEXT,
	threeThingsUnknown TEXT,
	
	 FOREIGN KEY (userName) 
	 	REFERENCES UserAccounts(userName)
	 	ON DELETE CASCADE
	);