const session = require("express-session");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
var logger = require("morgan");
var app = express();

var indexRouter = require("./routes/index");
const companyRouter = require("./routes/company");
const adminRouter = require("./routes/admin");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://poornima:1234@cluster0.76tvd1s.mongodb.net/jobDb?retryWrites=true&w=majority",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("connect to db");
    }
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(fileUpload());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 1 },
    // cookie for 1hour,
  })
);
app.use("/", indexRouter);
app.use("/company", companyRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
