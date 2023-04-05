import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/user/detail/:id', homeController.getDetailPage);


    return app.use('/', router);
}


export default initWebRoute;