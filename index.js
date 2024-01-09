const express=require('express');
const app=express();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

require("dotenv").config();

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
    console.log(`server started at PORT no ${PORT}`)
});

const dbConnect=require("./config/database");
dbConnect();

app.get('/',(req,res)=>{
    res.send("Hello World...");
})