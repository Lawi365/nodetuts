const express = require('express');

// express app
const app = express();

//registering view engines

app.set('view engine','ejs');
// app.set('views','myviews');

//listen for requests
app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html',{root:__dirname});
    res.render('index',{title: ' Home'});
});

app.get('/about',(req,res)=>{
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html',{root: __dirname})
    res.render('about',{title: ' About'})
});

app.get('/blogs/create',(req, res)=>{
    res.render('create',{title: ' New Blog'});
})


//redirects

// app.get('/about-us',(req,res)=>{
//     // res.redirect('/about');
//     res.render('about')
// })

// 404 page.
app.use((req,res)=>{
    res.status(400).render('404',{title: 'Error'});
})