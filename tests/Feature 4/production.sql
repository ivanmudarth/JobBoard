-- Feature 4

-- Filter job postings based on all available parameters
FROM JobPosting 
WHERE IF (True, UPPER(title) LIKE UPPER('%Sr%'), True) AND 
	  IF (True, UPPER(city) = UPPER('new york') 
		AND UPPER(state) = UPPER('ny'), True) AND
	  IF (True, avg_salary BETWEEN 100 AND 200, True) AND 
	  IF (True, rating >= 3.0, True)

-- Filter job postings based on location only
SELECT * 
FROM JobPosting 
WHERE IF (False, UPPER(title) LIKE UPPER('%%'), True) AND 
	  IF (True, UPPER(city) = UPPER('New York') AND UPPER(state) = UPPER('NY'), True) AND
	  IF (False, avg_salary BETWEEN 0 AND 0, True) AND
	  IF (False, rating >= 0, True)
LIMIT 10
