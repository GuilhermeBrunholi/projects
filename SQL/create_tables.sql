CREATE TABLE "Users" (
	"Id"	TEXT NOT NULL UNIQUE,
	"Name"	TEXT NOT NULL,
	"BirthDate"	TEXT NOT NULL,
	"Email"	TEXT NOT NULL UNIQUE,
	"Password"	TEXT NOT NULL,
	"Active"	INTEGER NOT NULL DEFAULT 1,
	"CreatedAt"	TEXT NOT NULL,
	"DisabledAt"	TEXT,
	PRIMARY KEY("Id")
);