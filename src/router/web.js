import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/user/detail/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser)
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:userId', homeController.editUserPage);
    router.post('/update-user', homeController.postUpdateUser);

    return app.use('/', router);
}


export default initWebRoute;