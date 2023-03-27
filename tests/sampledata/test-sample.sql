-- Feature 1
INSERT INTO User (username, password, name) VALUES ('user1', 'abcabc', 'John Doe')
SELECT * FROM User

SELECT ID FROM User WHERE username = 'user1' AND password = 'acbabc'

-- Feature 2
INSERT INTO Shortlist VALUES (1, 2)
SELECT * FROM Shortlist

SELECT DISTINCT job_posting_id FROM Shortlist WHERE user_id = 1

DELETE FROM Shortlist WHERE job_posting_id = 2
SELECT DISTINCT job_posting_id FROM Shortlist WHERE user_id = 1

-- Feature 3
INSERT INTO Reply VALUES (2, 1, 'this is my first reply', '2023-3-5 14:56:59')
INSERT INTO Reply VALUES (2, 1, 'this is my second reply', '2023-3-5 14:58:00')

SELECT user_id, reply_text 
FROM Reply 
WHERE job_posting_id = 2 
ORDER BY date_posted DESC;

-- Feature 4
FROM JobPosting 
WHERE IF (True, UPPER(title) LIKE UPPER('%Sr%'), True) AND 
	  IF (True, UPPER(city) = UPPER('new york') 
		AND UPPER(state) = UPPER('ny'), True) AND
	  IF (True, avg_salary BETWEEN 100 AND 200, True) AND 
	  IF (True, rating >= 3.0, True)

SELECT * 
FROM JobPosting 
WHERE IF (False, UPPER(title) LIKE UPPER('%%'), True) AND 
	  IF (True, UPPER(city) = UPPER('New York') AND UPPER(state) = UPPER('NY'), True) AND
	  IF (False, avg_salary BETWEEN 0 AND 0, True) AND
	  IF (False, rating >= 0, True)