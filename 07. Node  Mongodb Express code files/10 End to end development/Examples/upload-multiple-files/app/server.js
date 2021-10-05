const express = require("express");
const app = express();
const initRoutes = require("./routes/web");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});


// In case if you some deprecation warning , Ignore it.  Can refer this , to solve it.
// https://stackoverflow.com/questions/66190532/deprecationwarning-listening-to-events-on-the-db-class-has-been-deprecated-and