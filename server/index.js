const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "confinter_db",
})

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.post("/register", (req, res) => {
    const { fName } = req.body;
    const { lName } = req.body;
    const { email } = req.body;
    const { message } = req.body;
    
    let SQL = "INSERT INTO clients ( fName, lName, email, message ) VALUES ( ?,?,?,? )";
    db.query(SQL, [fName, lName, email, message], (err, result) => {
        console.error(err);
    });
});