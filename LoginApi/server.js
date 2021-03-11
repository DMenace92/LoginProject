const express = require('express');
require('./config/db')
const userRouter = require('./routers/user')
const app = express();
const PORT = process.env.PORT || 9000
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(userRouter)


app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))
