const express = require('express');
const app = express();

app.set('views engine', 'ejs')
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.listen(3000, () =>{
    console.log("Server is listening on 3000")
})
