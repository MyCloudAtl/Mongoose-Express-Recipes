const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.run(3000, () => {
    console.log('Server is running on port 3000');
})
