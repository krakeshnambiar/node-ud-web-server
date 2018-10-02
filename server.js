const express = require('express');
const hbs = require('hbs');

var app = express();
//use static html
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
//helper
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('convertUpper', (text) =>{
    return text.toUpperCase();
});

app.get('/',(req, res) => {
    //res.send('Hello Node Express !!');
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        message: 'Welcome to RAK'
    })
});

app.get('/about',(req,res) =>{
    //res.send('About the website');
    res.render('about.hbs',{
        pageTitle: 'About Page',
        header: 'My Home >> About'
    });
})

app.get('/bad',(req,res) =>{
    res.send({
        errorCode: 101,
        errorMaessage: 'Request failed:error page'
    })
})

app.listen(3000, () =>{
    console.log('server started in port 30000')
});