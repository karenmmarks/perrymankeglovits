CREATE TABLE IF NOT EXISTS UserAccounts (
	userName VARCHAR (20) NOT NULL,
	password CHAR (60) NOT NULL,
	firstName VARCHAR (255) NOT NULL,
	lastName VARCHAR (255) NOT NULL,
	email VARCHAR (255),
	currentYear int NOT NULL,
	PRIMARY KEY (userName) 
);

CREATE TABLE IF NOT EXISTS UserSession (
	userName VARCHAR (20) NOT NULL,
	reAuth BOOLEAN NOT NULL,
	FOREIGN KEY (userName) 
	 	REFERENCES UserAccounts(userName)
	 	ON DELETE CASCADE,
	PRIMARY KEY (userName) 
);
  
CREATE TABLE IF NOT EXISTS PlayerInfo ( 
	userName VARCHAR (20) NOT NULL,
	infoSplit VARCHAR (4) DEFAULT 'info',
	cellPhone VARCHAR (15),
	jerseySize ENUM ('XS', 'SM', 'MD', 'LG', 'XL', 'XXL'),
	webSplit VARCHAR (3) DEFAULT 'web',
	firstName VARCHAR (255) NOT NULL,
	lastName VARCHAR (255) NOT NULL,
	teamType ENUM ('GIRLS_TEAM', 'BOYS_TEAM') NOT NULL,
	team ENUM ('KAG', 'PAG', 'KAB', 'PAB'),
	schoolName ENUM ('ESS', 'ESN', 'STBG', 'PV', 'PME', 'PMW', 'NDES') NOT NULL,
	userImageUrl VARCHAR (255),
	role enum ('ADMIN', 'COACH', 'PLAYER') NOT NULL,
	playerNumber VARCHAR (3),
	printerSplit VARCHAR (7) DEFAULT 'printer',
	favSportsTeams TEXT,
	favMovieTVShows TEXT,
	favFoods TEXT,
	famousPersonToMeet TEXT,
	BBallCareerHighlights TEXT,
	threeThingsUnknown TEXT,
	 FOREIGN KEY (userName) 
	 	REFERENCES UserAccounts(userName)
	 	ON DELETE CASCADE,
	PRIMARY KEY (userName) 
);