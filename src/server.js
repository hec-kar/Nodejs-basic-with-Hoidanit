import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './router/web';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Config a EJS engine
configViewEngine(app);
//init a web router
initWebRoute(app);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

