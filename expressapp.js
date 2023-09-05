
import express from 'express';
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  res.send('About Page');
})

app.get('/home', (req,res) => {
    res.send('Home Page');
});

app.get('/profile', (req,res) => {
    res.send('Profile Page');
});

app.get('/cartpage', (req,res) => {
    res.send('Cart Page');
});


app.get('/productpage', (req,res) => {
    res.send('Product Page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})