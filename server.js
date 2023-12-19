const express = require("express");
const app = express();
const port = 3000;

// setting up the ejs to render the html correctly
app.set("view engine", "ejs");
//making the middleware which is at the end of the day just a function
const timer = function (req, res, next) {
  const date = new Date();
  const day = date.getDay(); // 0 (Sunday) to 6 (Saturday)
  const hour = date.getHours(); // 0 to 23
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next();
  } else {
    res.send(
      "Sorry, the website is only available during working hours (Monday to Friday, from 9 to 17)."
    );
  }
};
//using the middleware
app.use(timer);
// Serve static files (CSS)
app.use(express.static("public"));
// Importing and using the routes
const routes = require("./routes/route"); 
app.use("/", routes);
// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});