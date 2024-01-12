require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoute = require('./routes/student.route.js');

const app = express();
const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', studentRoute)

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})