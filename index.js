const express = require('express');
const app = express();
const db = require('./config/mongoose');
// const mongoose = require('mongoose');
const port = 8001;
app.use(express.urlencoded());
// mongoose.Promise = global.Promise;
app.use('/', require('./routes'));


app.listen(port, function (err) {
    if (err) {
        console.log('Error');
    } else {
        console.log(`server is running:${port}`);
    }
});
module.exports=app;
