if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bodyParser = require('body-parser');
const colors = require('colors');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

// Connect to Database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
    .on('error', error => console.error(error))
    .once('open', () => console.log('Connected to Mongoose'.cyan.bold));

app.use('/', indexRouter);
app.use('/authors', authorRouter);

//Listen to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));