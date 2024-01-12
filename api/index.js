require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})