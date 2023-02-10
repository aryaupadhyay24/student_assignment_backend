const express = require("express");
const app = express();
const port = 800;
app.use(express.json());



var cors = require('cors')
app.use(cors())
app.use(express.json())
const connectToMongo=require('./db');
connectToMongo();


const authRouter=require('./routes/auth')
const noteRouter=require('./routes/note')
// const authRouter=require('../routes/auth')
const studenRouter=require('./routes/student')



// EXPRESS SPECIFIC STUFF


// PUG SPECIFIC STUFF
app.use('/api',authRouter);
app.use('/apinote',noteRouter);
app.use('/student',studenRouter);
 
// ENDPOINTS
app.get('/', (req, res)=>{
    
    res.send("hello   123");
    

});
// });
// app.post('/',(req,res)=>{
//     res.render('../routes/auth');
// })


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});