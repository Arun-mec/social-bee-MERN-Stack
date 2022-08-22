const express = require('express')
const app = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
//configuring the dotenv variable
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Connected to the database")
}).catch(err => console.log(err));

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan());

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/post',postRouter);

app.listen(process.env.port || 5000,()=>{
    console.log('listening on port');
})