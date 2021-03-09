const express = require('express');
require('./config/db')
const userRouter = require('./routers/user')
const app = express();
const PORT = process.env.port || 9000
app.use(userRouter)
const cors = require('cors')

app.use(cors())
app.listen(()=> console.log(`Server running on port ${PORT}`))
