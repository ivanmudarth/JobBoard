-- Feature 1
INSERT INTO User (username, password, name) VALUES ('user1', 'abcabc', 'John Doe')
INSERT INTO User (username, password, name) VALUES ('dhruvs', 'pass1', 'Dhruv Shah')
INSERT INTO User (username, password, name) VALUES ('ivanm', 'pass2', 'Ivan Mudarth')

SELECT * FROM User

SELECT ID FROM User WHERE username = 'user1' AND password = 'acbabc'
SELECT ID FROM User WHERE username = 'dhruvs' AND password = 'pass1'
SELECT ID FROM User WHERE username = 'ivanm' AND password = 'pass2'
