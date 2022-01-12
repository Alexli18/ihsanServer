const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const isValid = require('./middleware/auth');

const barberController = require('./controllers/barber-controller');
const authController = require('./controllers/auth-controller');
const orderController = require('./controllers/orders-controller');
const serviceController = require('./controllers/service-controller');



const init = async () => {
    try {
        await mongoose.connect('mongodb://localhost/Barber', {
        });
        app.listen( port, (err) => {
            console.log('Mongo server up');
        });
    } catch (err) {
        console.log(err);
    }
}

init()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/auth', authController);


app.use('/barbers', isValid, barberController);

app.use('/order', isValid, orderController);

app.use('/service', isValid, serviceController)





