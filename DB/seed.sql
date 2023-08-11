INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('mj123', '12345qwerty', 'Mick', 'Jagger', 'mickjagger@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('rp123', '12345qwerty', 'Robert', 'Plant', 'robertplant@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('fm123', '12345qwerty', 'Freddie', 'Mercury', 'freddiemercury@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('jm123', '12345qwerty', 'Jim', 'Morrison', 'jimmorrison@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('st123', '12345qwerty', 'Steve', 'Tyler', 'stevetyler@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('jj123', '12345qwerty', 'Janis', 'Joplin', 'janisjoplin@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('ar123', '12345qwerty', 'Axl', 'Rose', 'axlrose@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('jl123', '12345qwerty', 'John', 'Lennon', 'johnlennon@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('pm123', '12345qwerty', 'Paul', 'McCartney', 'paulmccartney@gmail.com', 'student');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('rd123', '12345qwerty', 'Roger', 'Daltrey', 'rogerdaltrey@gmail.com', 'manager');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('db123', '12345qwerty', 'David', 'Bowie', 'davidbowie@gmail.com', 'manager');
INSERT INTO users(userName, password, firstName, lastName, email, role) VALUES('ev123', '12345qwerty', 'Eddie', 'Vedder', 'eddievedder@gmail.com', 'manager');


INSERT INTO cohorts(cohortName, startDate, endDate) VALUES('2023-01', '05/01/2023', '09/01/2023');
INSERT INTO cohorts(cohortName, startDate, endDate) VALUES('2023-02', '06/01/2023', '10/01/2023');
INSERT INTO cohorts(cohortName, startDate, endDate) VALUES('2023-03', '07/01/2023', '11/01/2023');


INSERT INTO managers(usersId, cohortsId) VALUES('946d9968-6d1d-4ee4-8191-e478ed1e16eb', 1);
INSERT INTO managers(usersId, cohortsId) VALUES('ac50ef9d-b700-4870-a019-0fcec19d6143', 2);
INSERT INTO managers(usersId, cohortsId) VALUES('46a1b7d3-0b10-4b64-bbff-7517d38831e5', 3);


INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('e883441e-f483-4275-a94a-dbb80e730ba4', 1, '09/01/2023', 'Army', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('4e339339-a896-482c-9bb2-a8d693ced6e7', 1, '09/01/2023', 'Navy', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('52e0042b-a3d6-4304-92cf-86a6f5cc7154', 1, '09/01/2023', 'Air Force', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('9a031e83-e3aa-49e4-a246-0e1d1afdb158', 2, '10/01/2023', 'Army', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('a3828ce2-d94e-42e8-ba11-7642000901b4', 2, '10/01/2023', 'Navy', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('0b594717-b381-4741-978b-07f2a078837c', 2, '10/01/2023', 'Air Force', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('c2172930-586a-4322-a7e5-85f3b68bbf58', 3, '11/01/2023', 'Army', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('567cae0e-55e6-4a9c-b374-2b725dcc8f3e', 3, '11/01/2023', 'Navy', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('c17092aa-d204-4d98-b89c-5eea457b450f', 3, '11/01/2023', 'Air Force', 'SECRET');


INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(1, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '09/01/2023', '08/25/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(1, 'DD 214', '214 accurancy with correction and updates', '09/01/2023', '08/27/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(1, 'Clear', 'Follow checklist and complete all neccessary actions', '09/01/2023', '08/25/2023-09/01/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(2, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '10/01/2023', '09/25/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(2, 'DD 214', '214 accurancy with correction and updates', '10/01/2023', '09/27/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(2, 'Clear', 'Follow checklist and complete all neccessary actions', '10/01/2023', '09/25/2023-10/01/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(3, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '11/01/2023', '10/25/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(3, 'DD 214', '214 accurancy with correction and updates', '11/01/2023', '10/27/2023');
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate) VALUES(3, 'Clear', 'Follow checklist and complete all neccessary actions', '11/01/2023', '10/25/2023-11/01/2023');

-- INSERT INTO comments(managersId, tasksId, description) VALUES('Do the dishes');



