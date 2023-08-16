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


INSERT INTO managers(usersId, cohortsId) VALUES('caf391f4-c4ec-4066-afa2-1e80f457a74a', 1);
INSERT INTO managers(usersId, cohortsId) VALUES('926ad601-5c9a-41ca-b2df-dbff64cbe486', 2);
INSERT INTO managers(usersId, cohortsId) VALUES('8519ed7a-257f-4422-90ea-091d19a9ff00', 3);


INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('08fe5d56-2f71-42a1-b782-7a533452313f', 3, '2023-09-01', 'Army', 'SECRET', 'Schofield Barracks, HI', 'Cannon Crewmember');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('0819e06c-63cd-42c6-a504-4de0b341feb6', 3, '2023-09-01', 'Navy', 'SECRET', 'Norfolk, VA', 'Hospital Corpsman');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('cb42ccb6-76e1-47fd-ac67-299aa7c82f2f', 3, '2023-09-01', 'Air Force', 'SECRET', 'Langley-Eustis, VA', 'Pilot');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('42c8b0bb-6241-4439-b93e-490ebaddc1a9', 2, '2023-10-01', 'Army', 'SECRET', 'Fort Bragg, NC', 'Military Police');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('aa21d834-64fb-4d82-90f5-b32fa4723d0c', 2, '2023-10-01', 'Navy', 'SECRET', 'Pearl Harbor, HI', 'Aviation Electricians Mate');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('01b26f1f-04b6-4e99-bf05-366cd61c83d1', 2, '2023-10-01', 'Air Force', 'SECRET', 'Ramstein Air Base, GER', 'Aircraft Maintenance');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('29b89ef8-e25d-4594-a90e-1396bc5a478e', 1, '2023-11-01', 'Army', 'SECRET', 'Fort Hood, TX', 'Supply Technician');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('babdecf8-c8eb-4650-91e2-b393c3e449b3', 1, '2023-11-01', 'Navy', 'SECRET', 'San Diego, CA', 'Machinery Repairman');
INSERT INTO students(usersId, cohortsId, ets, branch, clearanceType, dutyLocation, jobTitle) VALUES('fbefe90b-4367-4429-bc60-ffa6be838cc9', 1, '2023-11-01', 'Air Force', 'SECRET', 'Anderson AFB, GUAM', 'Intel Analyst');


INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'DD 214', '214 accurancy with correction and updates', '2023-09-01', '2023-08-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'DD 214', '214 accurancy with correction and updates', '2023-10-01', '2023-09-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'DD 214', '214 accurancy with correction and updates', '2023-11-01', '2023-10-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(10, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(10, 'DD 214', '214 accurancy with correction and updates', '2023-09-01', '2023-08-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(10, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(11, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(11, 'DD 214', '214 accurancy with correction and updates', '2023-10-01', '2023-09-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(11, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(12, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(12, 'DD 214', '214 accurancy with correction and updates', '2023-11-01', '2023-10-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(12, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(13, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(13, 'DD 214', '214 accurancy with correction and updates', '2023-09-01', '2023-08-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(13, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-09-01', '2023-08-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(14, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(14, 'DD 214', '214 accurancy with correction and updates', '2023-10-01', '2023-09-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(14, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-10-01', '2023-09-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(15, 'CIF Turn-In', 'Clean, Inventory, and Organize and equipment to get turned in', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(15, 'DD 214', '214 accurancy with correction and updates', '2023-11-01', '2023-10-27', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(15, 'Clear', 'Follow checklist and complete all neccessary actions', '2023-11-01', '2023-10-25', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'TAPS', 'Complete all Classes', '2023-09-01', '2023-08-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'TAPS', 'Complete all Classes', '2023-09-01', '2023-08-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'TAPS', 'Complete all Classes', '2023-09-01', '2023-08-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(10, 'TAPS', 'Complete all Classes', '2023-10-01', '2023-09-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(11, 'TAPS', 'Complete all Classes', '2023-10-01', '2023-09-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(12, 'TAPS', 'Complete all Classes', '2023-10-01', '2023-09-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(7, 'TAPS', 'Complete all Classes', '2023-11-01', '2023-10-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(8, 'TAPS', 'Complete all Classes', '2023-11-01', '2023-10-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(9, 'TAPS', 'Complete all Classes', '2023-11-01', '2023-10-21', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-09-01', '2023-08-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-09-01', '2023-08-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-09-01', '2023-08-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(10, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-10-01', '2023-09-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(11, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-10-01', '2023-09-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(12, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-10-01', '2023-09-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(13, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-11-01', '2023-10-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(14, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-11-01', '2023-10-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(15, 'FINAL Physical', 'Complete Labs and arrive 15 min early', '2023-11-01', '2023-10-19', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-09-01', '2023-08-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-09-01', '2023-08-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-09-01', '2023-08-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(10, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-10-01', '2023-09-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(11, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-10-01', '2023-09-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(12, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-10-01', '2023-09-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(13, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-11-01', '2023-10-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(14, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-11-01', '2023-10-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(15, 'Schedule HHG', 'Complete all paperwork and confirm appt', '2023-11-01', '2023-10-17', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(1, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-09-01', '2023-08-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(2, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-09-01', '2023-08-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(3, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-09-01', '2023-08-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(10, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-10-01', '2023-09-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(11, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-10-01', '2023-09-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(12, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-10-01', '2023-09-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(13, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-11-01', '2023-10-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(14, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-11-01', '2023-10-22', false);
INSERT INTO tasks(studentsId, taskName, taskDescription, dueDate, apptDate, completed) VALUES(15, 'Submit VA Claim', 'Get medical records and submit to VA', '2023-11-01', '2023-10-22', false);

-- INSERT INTO comments(managersId, tasksId, description) VALUES('Do the dishes');



