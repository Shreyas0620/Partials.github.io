const express = require('express')
const app = express();
const port = 8000;
const hbs = require('hbs')
const path = require('path')



app.set('view engine' , 'hbs')
const partialsPath = path.join(__dirname, '../views/partials')
app.use(express.static('.'))

// middleware 
hbs.registerPartials(partialsPath)

app.get('/',(req,res)=>{
    res.render('home')
    
})
app.get('/about',(req,res)=>{
    res.render('about')
    
})

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`)
})