const express = require("express");
// const mongojs = require("mongojs");

const app = express();

// const databaseUrl = "zoo";
// const collections = ["animals"];

 const db = require("./models")

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/api/workouts/range",(req,res)=>{
    db.Workout.find({}).then((err, found) => {
        if (err) {
          console.log(err);
        } else {
          res.json(found);
        }
      });
    });


app.listen(3000, () => {
    console.log("App running on port 3000!");
  });