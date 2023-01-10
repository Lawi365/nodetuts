const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//3rd party middleware.
const morgan = require('morgan');

// express app
const app = express();

//connect to mongondb
const dburl = 'mongodb+srv://<pass>@nodetuts.ksmyxi0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err));

//registering view engines

app.set('view engine','ejs');
// app.set('views','myviews');

//listen for requests


//add middleware.
// app.use((req,res,next)=>{
//     console.log('First request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method); next();
// });
// app.use((req,res,next)=>{
//     console.log('another request has been made: ');
//     next();
// });

//middleware and static sites
app.use(express.static('public'))
app.use(morgan('dev'));

//mongoose and mongo sandbox routes.
app.get('/add-blog',(req, res)=>{
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about the new blog follow along'
    });
    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById('63bc9aa574a399c2afeb20e4')
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.get('/',(req,res)=>{
    const blogs = [
        {title:'Lawrence Begins to blog',snippet:'It may come as a suprise but did you know that I write blogs'},
        {title:'Lawrence Continues to blog',snippet:'It may come as a suprise but did you know that I write blogs'},
        {title:'Lawrence Finished blogging',snippet:'It may come as a suprise but did you know that I write blogs'}
    ];

    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html',{root:__dirname});
    res.render('index',{title: ' Home',blogs});
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
