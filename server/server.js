const app = require("./express")
const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://knoppy981:Dede5562@cluster0.wgbd9.mongodb.net/?retryWrites=true&w=majority'

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info("Express server started at port %s.", port)
})

mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URI)

mongoose.connection.on('error', (err) => {
    throw new Error(`unable to connect to database: ${err}`)
})
