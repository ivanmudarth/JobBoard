const express = require("express");
const app = express();
const db = require("./config/db");
const port = 3001;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.text({ type: 'text/plain' }))

// getJobs
app.get(
  "/api/getJobs/:title/:city/:state/:min_salary/:max_salary/:rating",
  (req, res) => {
    const title = req.params.title.replace("&", " ");
    const city = req.params.city.replace("&", " ");
    const state = req.params.state.replace("&", " ");
    const min_salary = req.params.min_salary;
    const max_salary = req.params.max_salary;
    const rating = req.params.rating;

    const isTitle = title !== "null";
    const isLocation = city !== "null" && state !== "null";
    const isSalary = min_salary !== "null" && max_salary !== "null";
    const isRating = rating !== "null";

    db.query(
      `SELECT * \
    FROM JobPosting \
    WHERE IF (${isTitle}, UPPER(title) LIKE UPPER('%${title}%'), True) AND \
        IF (${isLocation}, UPPER(city) = UPPER('${city}') AND \
                  UPPER(state) = UPPER('${state}'), True) AND \
        IF (${isSalary}, avg_salary BETWEEN ${min_salary} AND ${max_salary}, True) AND \
        IF (${isRating}, rating >= ${rating}, True)`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send(result);
      }
    );
  }
);

// getJob
app.get("/api/getJob/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    `SELECT * \
    FROM JobPosting \
    WHERE id = ${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// getReplies
app.get("/api/getReplies/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    `SELECT * \
    FROM Reply \
    WHERE job_posting_id = ${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// postReplies
app.post('/api/postReply/:user_id/:job_id', (req, res) => {
  const user_id = req.params.user_id;
  const job_id = req.params.job_id;
  const text = req.body;
  const timestamp = 0;

  db.query(
    `INSERT INTO Reply \
    VALUES (${job_id}, ${user_id}, '${text}', NOW())`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
