const express = require('express');
const app = express();
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bodyParser = require('body-parser');
const colors = require('colors');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
connectDB();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));

app.use('/', indexRouter);
app.use('/authors', authorRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});