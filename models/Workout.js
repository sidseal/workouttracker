const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // {
    //     day: new Date(new Date().setDate(new Date().getDate() - 7)),
    //     exercises: [
    //       {
    //         type: "resistance",
    //         name: "Bicep Curl",
    //         duration: 20,
    //         weight: 100,
    //         reps: 10,
    //         sets: 4
    //       },

    day: {
        type: Date,
        required: true,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            reps: Number,

        }
    ]

});

const Workout = mongoose.model("Example", WorkoutSchema);

module.exports = Workout;