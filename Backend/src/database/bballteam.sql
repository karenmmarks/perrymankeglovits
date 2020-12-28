CREATE TABLE IF NOT EXISTS UserAccounts (
	userName VARCHAR (20) NOT NULL,
	password CHAR (60) NOT NULL,
	PRIMARY KEY (userName) 
	);

	CREATE TABLE IF NOT EXISTS UserSession (
	userName VARCHAR (20) NOT NULL,
	reAuth BOOLEAN NOT NULL,
	FOREIGN KEY (userName) 
	 	REFERENCES UserAccounts(userName)
	 	ON DELETE CASCADE
	);
  
  CREATE TABLE IF NOT EXISTS PlayerInfo ( 
	userName VARCHAR (20) NOT NULL,
	currentYear int NOT NULL,
	email VARCHAR (255),
	cellPhone VARCHAR (15),
	jerseySize ENUM ('XS', 'SM', 'MD', 'LG', 'XL', 'XXL'),
	 FOREIGN KEY (userName) 
	 	REFERENCES UserAccounts(userName)
	 	ON DELETE CASCADE
	);

	CREATE TABLE IF NOT EXISTS WebInfo ( 
	userName VARCHAR (20) NOT NULL,
	firstName VARCHAR (255) NOT NULL,
	lastName VARCHAR (255) NOT NULL,
	currentYear int NOT NULL,
	teamType ENUM ('GIRLS_TEAM', 'BOYS_TEAM') NOT NULL,
	team ENUM ('KAG', 'PAG', 'KAB', 'PAB'),
	schoolName ENUM ('ESS', 'ESN', 'STBG', 'PV', 'PME', 'PMW', 'NDES') NOT NULL,
	userImageUrl VARCHAR (255),
	role enum ('ADMIN', 'COACH', 'PLAYER') NOT NULL,
	playerNumber VARCHAR (3),
		FOREIGN KEY (userName) 
	 	REFERENCES UserAccounts(userName)
	 	ON DELETE CASCADE
	);

	CREATE TABLE IF NOT EXISTS PrinterInfo ( 
	userName VARCHAR (20) NOT NULL,
	currentYear int NOT NULL,
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