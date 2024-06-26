const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
const app=express();
const path=require("path");
dotenv.config();

//middlewares


app.use(express.json());

MONGO_URI="mongodb+srv://manshimalik456:g1bwsiGR4e0l3TqT@cluster0.ltbcdov.mongodb.net/tod";

app.use(cors());
mongoose.connect(MONGO_URI).then(()=>console.log("mongodb connected")).catch((err)=>console.log(err));
app.use("/api",require("./routes/todoRoutes"));
app.use(express.static(path.join(__dirname,'./client/build')));
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})
app.listen(5020,()=>console.log(`listening`))
