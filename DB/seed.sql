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


INSERT INTO cohorts(cohortName, startDate, endDate) VALUES('2023-01', '2023-05-01', '2023-09-01');
INSERT INTO cohorts(cohortName, startDate, endDate) VALUES('2023-02', '2023-06-01', '2023-10-01');
INSERT INTO cohorts(cohortName, startDate, endDate) VALUES('2023-03', '2023-07-01', '2023-11-01');


INSERT INTO managers(usersId, cohortsId) VALUES('caf391f4-c4ec-4066-afa2-1e80f457a74a', 3);
INSERT INTO managers(usersId, cohortsId) VALUES('926ad601-5c9a-41ca-b2df-dbff64cbe486', 4);
INSERT INTO managers(usersId, cohortsId) VALUES('8519ed7a-257f-4422-90ea-091d19a9ff00', 5);


INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('08fe5d56-2f71-42a1-b782-7a533452313f', 3, '2023-09-01', 'Army', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('0819e06c-63cd-42c6-a504-4de0b341feb6', 3, '2023-09-01', 'Navy', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('cb42ccb6-76e1-47fd-ac67-299aa7c82f2f', 3, '2023-09-01', 'Air Force', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('42c8b0bb-6241-4439-b93e-490ebaddc1a9', 4, '2023-10-01', 'Army', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('aa21d834-64fb-4d82-90f5-b32fa4723d0c', 4, '2023-10-01', 'Navy', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('01b26f1f-04b6-4e99-bf05-366cd61c83d1', 4, '2023-10-01', 'Air Force', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('29b89ef8-e25d-4594-a90e-1396bc5a478e', 5, '2023-11-01', 'Army', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('babdecf8-c8eb-4650-91e2-b393c3e449b3', 5, '2023-11-01', 'Navy', 'SECRET');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType) VALUES('fbefe90b-4367-4429-bc60-ffa6be838cc9', 5, '2023-11-01', 'Air Force', 'SECRET');


INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'DD 214', '214 accurancy with correction and updates', '2023-09-01', '2023-08-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'DD 214', '214 accurancy with correction and updates', '2023-10-01', '2023-09-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'DD 214', '214 accurancy with correction and updates', '2023-11-01', '2023-10-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(4, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(4, 'DD 214', '214 accurancy with correction and updates', '2023-09-01', '2023-08-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(4, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(5, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(5, 'DD 214', '214 accurancy with correction and updates', '2023-10-01', '2023-09-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(5, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(6, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(6, 'DD 214', '214 accurancy with correction and updates', '2023-11-01', '2023-10-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(6, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(7, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(7, 'DD 214', '214 accurancy with correction and updates', '2023-09-01', '2023-08-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(7, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(8, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(8, 'DD 214', '214 accurancy with correction and updates', '2023-10-01', '2023-09-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(8, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(9, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(9, 'DD 214', '214 accurancy with correction and updates', '2023-11-01', '2023-10-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(9, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-11-01', '2023-10-25', false);
-- INSERT INTO comments(managersId, tasksId, description) VALUES('Do the dishes');



