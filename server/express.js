const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

//Add schema to server
const User = require("./models/user.js");

const user_routes = require("./router/user_router");
const shiftRoutes = require("./router/shift_router");
const config = require("./config/db_config");
const session = require("express-session");
const passport = require("passport");
require("./config/passport")(passport);

// Adding Mongoose and connecting to MongoDB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/clockitdb"); //name is based on DB name
mongoose.connect(config.database);
const db = mongoose.connection;

// Check connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Check for DB errors
db.on("error", function (err) {
  console.log("Connection Error");
});

//Middleware/configuring the server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/user", user_routes);
app.use("/shifts", shiftRoutes);

// Initialize session
app.use(
  session({
    secret: "gtrdt54e8u54t%T%$%G5gsrg5",
    resave: false,
    saveUninitialized: false,
    cookie: {},
  })
);
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// //access the shift data
// router.get("/", function (req, res) {
//   // Query MongoDB for shifts
//   Shift.find({}, 'clockIn')
//     .then((shifts) => {
//       // Pass shifts as JSON response
//       const clockIns = shifts.map(shift => shift.clockIn);
//       res.json(clockIns);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     });
// });

// app.get("/test", (req, res) => {
//   console.log("endpoint tested")
//   res.send("test successful")
// })

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
