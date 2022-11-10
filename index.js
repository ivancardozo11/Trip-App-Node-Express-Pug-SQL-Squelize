import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

console.log(process.env.DB_KEY)
const app = express();
const port  = process.env.PORT || 4000;

db.authenticate().then(()=> 
console.log('Database successfully connected'))
.catch( error => console.log(error));

app.set('view engine', 'pug');

app.use((req, res, next)=>{

    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de viajes";
    return next();
})

app.use(express.static('public'));

app.use('/', router);





app.listen(port,() =>{
    console.log(`Server working properly on port ${port}`);
})

