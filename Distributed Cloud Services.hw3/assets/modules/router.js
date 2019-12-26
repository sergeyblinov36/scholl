const { Router } = require('express');
const tvGuideController = require('./controller');
const dotenv = require ('dotenv');
dotenv.config();

const tvGuideRouter = new Router();

tvGuideRouter.get(`/date/:Date`, tvGuideController.getByTime);
tvGuideRouter.get(`/name/:id`, tvGuideController.getById);
tvGuideRouter.get("/all", tvGuideController.getAll);
tvGuideRouter.post('/show', tvGuideController.createShow);
tvGuideRouter.put('/show/:id', tvGuideController.updateShow);
tvGuideRouter.delete('/show/:id', tvGuideController.deleteShow);

module.exports = {
    tvGuideRouter
};


