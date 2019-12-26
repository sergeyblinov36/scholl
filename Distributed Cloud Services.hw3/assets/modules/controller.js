//the code resembles David Sallam's because I used it as a reference to write my code
//I did not copy it,but like I've said I used it as a reference

const tvGuide = require("./data");
const dotenv = require ('dotenv');
const mongoose = require('mongoose');
dotenv.config();
module.exports = {
    getAll(req, res) {
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
    error(req,res){

        res.status(404).send("route does not exist");
    },
    getByTime(req,res){
        mongoose
            .connect(tvGuide.url,tvGuide.options)
            .then(async ()=>{
                const d = req.params.Date;console.log(d);
                const response = await tvGuide.ts.find({Date:d});

                if (response) await res.json(response);
                else res.status(404).send("not found");
            })
            .catch(err => {
                console.error("some error occurred", err);
                res.status(500).send(err.message);
            });
    },
    getById(req,res){
        mongoose
            .connect(tvGuide.url,tvGuide.options)
            .then(async ()=>{
                const n = req.params.id;

                const response = await tvGuide.ts.find({id:n});

                if (response) await res.json(response);
                else res.status(404).send("not found");
            })
            .catch(err => {
                console.error("some error occurred", err);
                res.status(500).send(err.message);
            });
    },
    createShow(req, res) {
        mongoose
            .connect(tvGuide.url, tvGuide.options)
            .then(async () => {
                const {Time , TVShow , TVShow_link = null , Date , Description = null, id} = req.body;
                const show = new tvGuide.ts({ Time,TVShow,TVShow_link,Date,Description,id });
                console.log(Time);
                const response = await show.save();

                if (response)  res.json(response);
                else res.status(404).send("not found");
            })
            .catch(err => {

                console.error("some error occurred", err);
                res.status(500).send(err.message);
            });
    },
    deleteShow(req, res) {
        mongoose
            .connect(tvGuide.url, tvGuide.options)
            .then(async () => {
                const id = req.params;
                console.log(tvGuide.ts.count());
                const response = await tvGuide.ts.deleteOne({ id });

                if (response.deletedCount !== 0) {
                    res.json(response);
                } else {
                    res
                        .status(404)
                        .send("tv show does");
                }
            })
            .catch(err => {
                console.error("some error occurred", err);
                res.status(500).send(err.message);
            });
    },
    updateShow(req, res) {
        mongoose
            .connect(tvGuide.url, tvGuide.options)
            .then(async () => {
                const id = req.params;
                const body = req.body;

                const result = await tvGuide.ts.updateOne( id , body);
                if (result.nModified !== 0) {
                    res.json(result);
                } else {
                    res
                        .status(404)
                        .send("tv show doesn't exist");
                }
            })
            .catch(err => {
                console.error("some error occurred", err);
                res.status(500).send(err.message);
            });
    }
};





