const { Router } = require('express');
const tvGuideController = require('./controller');
const dotenv = require ('dotenv');
dotenv.config();

const tvGuideRouter = new Router();

tvGuideRouter.get(`/:Date`, tvGuideController.getByTime);
// tvGuideRouter.get('/:tvshow', tvGuideController.get);
tvGuideRouter.get("/all", tvGuideController.getAll);
//tvGuideRouter.get("/*",tvGuideController.error);
// tvGuideRouter.post('/', tvGuideController.post);
// tvGuideRouter.put('/:id', tvGuideController.put);
// tvGuideRouter.delete('/:id', tvGuideController.delete);

module.exports = {
    tvGuideRouter
};


