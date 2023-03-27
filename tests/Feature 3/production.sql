-- Feature 3

-- User ivanm(id = 3) adds two replys to job posting with id=2
INSERT INTO Reply VALUES (2, 3, 'this is my first reply', '2023-3-5 14:56:59')
INSERT INTO Reply VALUES (2, 3, 'this is my second reply', '2023-3-5 14:58:00')

SELECT * FROM Reply

-- View all replies to job posting with id=2
SELECT user_id, reply_text 
FROM Reply 
WHERE job_posting_id = 2 
ORDER BY date_posted DESC;