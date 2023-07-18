const express = require("express");

//express app initialization
const app = express();
app.use(express.json());

//application routes

//default express error handler
function errorHandler(err, req, res, next) {
  if (res.errorHandler) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => {
  console.log(`app is listening on port 3000`);
});
