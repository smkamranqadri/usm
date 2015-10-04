/// <reference path="../typings/tsd.d.ts" />

//third party module import
import * as express      from "express";
import * as morgan       from "morgan";
import * as cookieParser from "cookie-parser";
import * as bodyParser   from "body-parser";
import * as path         from "path";
import * as mongoose     from "mongoose";

//custom module import
let index : express.Router  = require('./routes/indexRoute');

//server configuration
let app   : express.Express = express();
let port  : number          = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost/ums');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//builtin middleware
app.use(express.static(path.join(__dirname, '../public')));

//third party middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//custom mounted middleware for routing
app.use('/', index);

//start server
app.listen(port, () => {
  console.log('Express started on Port : ' + port);
});