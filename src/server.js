import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './router/web';
import initAPIRoute from './router/api';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Config a EJS engine
configViewEngine(app);
//init a web router
initWebRoute(app);
//init a API Router
initAPIRoute(app);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

