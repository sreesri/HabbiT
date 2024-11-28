const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://devshriramms:admin@cluster1.5dvlx.mongodb.net/").then(() => {
    console.log("Connected to Mongo db")
}).catch((error) => {
    console.log("Connection failed",error);
})

app.listen(port, () => { 
    console.log("Server started");
})

const Habit = require("./models/habbit.ts")

// Create habbit
app.post("/habit", async (req, res) => {
    try {
        const { title, color, reminder, repeatMode } = req.body
        const habit = new Habit({
            title,
            color,
            reminder,
            repeatMode
        })

        const saved = await habit.save()
        res.status(200).json(saved)
    } catch (e) {
        res.status(500).json({e:"Network error"})
    }
})