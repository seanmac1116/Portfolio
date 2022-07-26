const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages')
const path = require('path')
const app = express();
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', route);

mongoose.connect("mongodb+srv://seanmac11:NJIuhbvgy1122@cluster0.brdjeem.mongodb.net/PortfolioDB", {useNewURLParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(process.env.port, () =>{
        console.log("server is running on 3000")
    })
})

//NJIuhbvgy1122