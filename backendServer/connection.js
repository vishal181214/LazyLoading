import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://vishalgai:UKkUknD3ztBhSxdV@cluster0.apnmfbt.mongodb.net/userSession?retryWrites=true&w=majority',{ useNewUrlParser: true})
.then(()=>{
    console.log('Connected to db');
})
.catch((error)=>{
    console.log(error.message);
});