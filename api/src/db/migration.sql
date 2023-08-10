-- DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cohorts;


CREATE TABLE cohorts (
  cohortsId SERIAL PRIMARY KEY,
  cohortName varchar,
  startDate varchar,
  endDate varchar
);

CREATE TABLE users (
  usersid SERIAL PRIMARY KEY,
  cohortsId INTEGER REFERENCES cohorts(cohortsId),
  userName varchar,
  password varchar,
  firstName varchar,
  lastName varchar,
  email varchar,
  role varchar
);

CREATE TABLE managers (
  managersId SERIAL PRIMARY KEY,
  usersId INTEGER REFERENCES users(usersId),
  cohortsId INTEGER REFERENCES cohorts(cohortsId)
);

CREATE TABLE students (
  studentsId SERIAL PRIMARY KEY,
  usersId INTEGER REFERENCES users(usersId),
  cohortsId INTEGER REFERENCES cohorts(cohortsId),
  ets varchar,
  branch varchar,
  clearanceType varchar
);


CREATE TABLE tasks (
  tasksId SERIAL PRIMARY KEY,
  studentsId INTEGER REFERENCES students(studentsId),
  taskName varchar,
  taskDescription text,
  dueDate varchar,
  apptDate varchar
);

-- CREATE TABLE comments (
--   commentsId SERIAL PRIMARY KEY,
--   managersId INTEGER REFERENCES managers(managersId),
--   tasksId INTEGER REFERENCES tasks(tasksId),
--   comment text
-- );
