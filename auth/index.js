require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { PORT } = process.env;
const app = express();

app.use( cors({ origin: '*' }) );
app.use( morgan( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } )  );
app.use( cookieParser() );

routes(app);

app.listen(PORT, () => console.log(`portofolio service run in port ${PORT}`));