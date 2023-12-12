const axios = require('axios');
const { response } = require('express');
const express = require('express');

//router
const app = express.Router();

app.get('/', (req,res) => {
    let isActive = true;

    const users = [
        {
            id: 1,
            name: "ryan",
            lastname: "perez"
        },
        {
            id: 2,
            name: "luis",
            lastname: "aguilar"
        }
    ]

    res.render('index',{title: 'Index page', isActive: isActive, users: users});
});

app.get('/about', (req,res) => {
    const title = 'Mi pagina creada desde express';
    res.render('about');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/posts', async (req, res) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    res.render('posts',{
        posts: response.data,
    });
});

//exportando router
module.exports = app;