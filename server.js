const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
module.exports.bcrypt = bcrypt;

require('dotenv').config({ path: __dirname + '/config/.env' });

const app = express();
app.use(cors());
app.use(express.json());

const users = require('./routes/userRoutes');
const carts = require('./routes/cartRoutes');
const order = require('./routes/orderRoutes');

app.use('/users', users);
app.use('/carts', carts);
app.use('/order', order);


app.listen(process.env.PORT || 3300, () => console.log('3300'));

mongoose.connect('mongodb+srv://davidZim:SctU3HLxKp99LOyY@shoppi-shop.mb6zdol.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongoose connected'))
.catch(error => console.error(error));

//old node ver 16.16.0