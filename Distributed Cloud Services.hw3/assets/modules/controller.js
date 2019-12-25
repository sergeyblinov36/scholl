const tvGuide = require("./data");
const dotenv = require ('dotenv');
const mongoose = require('mongoose');
dotenv.config();
module.exports = {
    getAll(req, res,next) {
        mongoose
            .connect(tvGuide.url,tvGuide.options)
            .then(async ()=>{
                const response = await tvGuide.ts.find();

                if (response) await res.json(response);
                else res.status(404).send("not found");
            })

    .catch(err => {
    console.error("some error occurred", err);
    res.status(500).send(err.message);
});
    },
    error(req,res,next){

        res.status(404).send("route does not exist");
    },
    getByTime(req,res,next){
        mongoose
            .connect(tvGuide.url,tvGuide.options)
            .then(async ()=>{
                const d = req.params.Date;
                console.log(d);
                const response = await tvGuide.ts.find({Date:d});

                if (response) await res.json(response);
                else res.status(404).send("not found");
            })
            .catch(err => {
                console.error("some error occurred", err);
                res.status(500).send(err.message);
            });
    }
};





