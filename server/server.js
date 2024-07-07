const express = require('express')
const app = express()

const indexRouter = require('./routes/index');

// Middleware to parse JSON request bodies
app.use(express.json());

app.use('/', indexRouter);

app.listen(5000, () => {console.log("Server started on port 5000")})