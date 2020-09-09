const express = require("express");
const app = express();
const mongoose = require("mongoose");



// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // check
app.use(express.json()); // check

app.use(require("./public/api.js"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//     useNewUrlParser: true,
//     useFindAndModify: false
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`) });
