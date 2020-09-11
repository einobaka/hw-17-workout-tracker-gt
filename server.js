// Dependencies**
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Express dependencies**
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes**
app.use('/', require('./routes/html.js'));
app.use('/api', require('./routes/api.js'));

// To DB route**
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// Port**
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`) });

