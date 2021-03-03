const express = require('express');
const app = express();
const PORT = process.env.port || 9000
require('./config/db')
const cors = require('cors')
app.use(cors())
app.listen(()=> console.log(`Server running on port ${PORT}`))
