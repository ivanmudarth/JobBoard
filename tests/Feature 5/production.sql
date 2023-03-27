-- Insert new employer
INSERT INTO Employer (name, employee_count, revenue, ownership_type, city, state)
VALUES ('New Employer', 100, 1000000, 'Private', 'New York', 'NY');

-- Insert new job posting
INSERT INTO JobPosting (title, employer_id, description, min_salary, max_salary, avg_salary, city, state, rating)
VALUES ('New Job Posting', LAST_INSERT_ID(), 'Description of new job posting',50000, 70000, 60000, 'New York', 'NY', 4.5);

-- Added to end of Employer table 
SELECT * FROM Employer ORDER BY id DESC LIMIT 5;

-- Added to end of JobPosting table 
SELECT * FROM JobPosting ORDER BY id DESC LIMIT 2;


-- Add a new job for existing employer (id = 70)
INSERT INTO JobPosting (title, employer_id, description, min_salary,max_salary, avg_salary, city, state, rating)
VALUES ('New Job Posting 2', 70, 'Description of new job posting', 70000, 90000, 80000, 'New York', 'NY', 4.5);

-- Show jobs for employer_id = 70 
SELECT * FROM JobPosting WHERE employer_id=70