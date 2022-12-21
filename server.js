const express = require('express');
const app = express;

const db = require();

global.__basedir = __dirname;

db.sequelize.sync({force: true }).then(()=>{
    console.log('Drop and Resync with { force: true}');
});

let router = require('./');
app.use(express.static());
app.use('/',router);

//Create Server
const server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port

    console.log("App listening at " , host , port);
})