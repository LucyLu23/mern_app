//console.log("Hello World")
const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require ('./middleware/errorMiddleware')
const port = process.env.PORT || 6666

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))// middleware

app.use('/api/goals', require('./routes/goalRoutes'))

/* app.get('/api/goals',(req, res) => {
    //res.send('Get goals')
    //res.json({message: 'Get goals'})
    res.status(200).json({ message: 'Get goals'})
})
 */

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
