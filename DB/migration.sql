DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cohorts;

CREATE TABLE users (
  usersId UUID PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  userName varchar NOT NULL,
  password varchar NOT NULL,
  firstName varchar NOT NULL,
  lastName varchar NOT NULL,
  email varchar NOT NULL,
  role varchar NOT NULL
);

CREATE TABLE cohorts (
  cohortsId SERIAL PRIMARY KEY,
  cohortName varchar,
  startDate varchar,
  endDate varchar
);

CREATE TABLE managers (
  managersId SERIAL PRIMARY KEY,
  usersId UUID REFERENCES users(usersId),
  cohortsId INTEGER REFERENCES cohorts(cohortsId)
);

CREATE TABLE students (
  studentsId SERIAL PRIMARY KEY,
  usersId UUID REFERENCES users(usersId),
  cohortsId INTEGER REFERENCES cohorts(cohortsId),
  ets date,
  branch varchar,
  clearanceType varchar
);

CREATE TABLE tasks (
  tasksId SERIAL PRIMARY KEY,
  studentsId INTEGER REFERENCES students(studentsId),
  taskName varchar,
  taskDescription text,
  dueDate date,
  apptDate date,
  completed BOOLEAN
);

-- CREATE TABLE comments (
--   commentsId SERIAL PRIMARY KEY,
--   managersId INTEGER REFERENCES managers(managersId),
--   tasksId INTEGER REFERENCES tasks(tasksId),
--   comment text
-- );
