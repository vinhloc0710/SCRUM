require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')



const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

const accRoute = require('./routes/accommodationRouter')

app.use('/api/acc',accRoute)

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})
 

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})