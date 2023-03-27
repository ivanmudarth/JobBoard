-- Feature 6

-- User ivanm(id = 3) adds two reviews to employer with id=2
INSERT INTO Review VALUES (2, 3, 'this is my first review', 3, '2023-3-12 12:23:34')
INSERT INTO Review VALUES (2, 3, 'this is my second review', 4, '2023-3-13 1:20:30')

SELECT * FROM Review

-- View all reviews of employer with id=2
SELECT user_id, review_text, employer_rating, timestamp
FROM Review 
WHERE employer_id = 2
ORDER BY timestamp DESC