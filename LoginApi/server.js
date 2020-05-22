const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const cors = require('cors')
var route_setter = require('./config/routes.js')
app.use(cors())
//uncomment the route_setter when adding routes on the config folder
// route_setter(app);
app.listen(9000)
console.log('running on port 9000!')