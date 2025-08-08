const express = requrire('express')
const app = express();
requrire ('dotenv').config();
const mongoose = requrire('require');
const PORT = process.env.port;
const uri  = process.env.MONGO_URL

mongoose.connect(uri).then(
    async() =>{
        console.log(`Connected to MngoDB.`)
        app.listen(PORT, ()=>{
            console.log(`Connected to port ${PORT}`);
        })
    }
)

app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`);
});