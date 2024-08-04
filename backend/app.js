const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require('path');
const errorHandler = require("./middleware/error");
const authRoutes = require('./routes/authRoutes');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api', authRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
