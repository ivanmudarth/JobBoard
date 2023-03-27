-- Feature 2

-- users dhruvs(id = 2) and ivanm(id = 3) both add jobs to their shortlist 
INSERT INTO Shortlist VALUES (2, 54)
INSERT INTO Shortlist VALUES (3, 372)
INSERT INTO Shortlist VALUES (3, 524)

SELECT * FROM Shortlist

-- view ivanm's shortlist 
SELECT DISTINCT job_posting_id FROM Shortlist WHERE user_id = 3

-- delete job_posting_id of 524 from ivanm's shortlist 
DELETE FROM Shortlist WHERE user_id = 3 AND job_posting_id = 524

-- view ivanm's shortlist again after deletion 
SELECT DISTINCT job_posting_id FROM Shortlist WHERE user_id = 3