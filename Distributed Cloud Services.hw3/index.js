const express = require("express");
const {tvGuideRouter} = require("./assets/modules/router.js");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require ('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tvGuide',tvGuideRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => console.log('Express server is running on port ', port));
