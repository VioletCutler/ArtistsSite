CREATE TABLE "posts" (
  "id" Serial PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "content" text NOT NULL,
  "user" int
);

CREATE TABLE "videos" (
  "id" Serial PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "date" date NOT NULL,
  "description" text NOT NULL,
  "post" int
);

CREATE TABLE "images" (
  "id" Serial PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "date" date NOT NULL,
  "description" text NOT NULL,
  "post" int
);

CREATE TABLE "audio" (
  "id" Serial PRIMARY KEY,
  "title" varchar(255),
  "date" date NOT NULL,
  "description" text NOT NULL,
  "post" int
);

CREATE TABLE "tags" (
  "id" Serial PRIMARY KEY,
  "name" varchar(255)
);

CREATE TABLE "postTags" (
  "post" int,
  "tag" int
);

CREATE TABLE "users" (
  "id" Serial PRIMARY KEY,
  "name" varchar(255),
  "password" varchar(255)
);

ALTER TABLE "posts" ADD FOREIGN KEY ("user") REFERENCES "users" ("id");

ALTER TABLE "postTags" ADD FOREIGN KEY ("post") REFERENCES "posts" ("id");

ALTER TABLE "postTags" ADD FOREIGN KEY ("tag") REFERENCES "tags" ("id");

ALTER TABLE "videos" ADD FOREIGN KEY ("post") REFERENCES "posts" ("id");

ALTER TABLE "images" ADD FOREIGN KEY ("post") REFERENCES "posts" ("id");

ALTER TABLE "audio" ADD FOREIGN KEY ("post") REFERENCES "posts" ("id");
