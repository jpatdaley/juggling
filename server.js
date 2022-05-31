require('dotenv').config()
const express = require('express');
const method = require("method-override");
const { GridFSBucketWriteStream } = require('mongodb');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

const Ball = require('./models/balls.js');

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))

// ===== Setup Engine =======
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(method("_method"))
app.use(express.urlencoded({extended:false}));
app.use(express.static('./public'))
// Use Express middleware to parse JSON.
app.use(express.json())



// Index
app.get('/balls', (req, res) => {
    Ball.find({}, (err, allBalls) => {
        res.render('Index', {balls: allBalls});
    });
});




// New
app.get('/balls/new', (req, res) => {
    res.render('New');
});

// Delete
app.delete('/balls/:id', (req, res) => {
    Ball.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            res.status(200).redirect('/balls')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
app.put('/balls/:id', (req, res) => {
    // Update function has 4 arguments
    // 1. the id
    // 2. the content of what we want to update
    // 3. options object {new: true}
    // 4. callback
    Ball.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBalls) => { 
        if (!err) {
            res.status(200).redirect('/balls')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/balls/', (req, res)=>{
    Ball.create(req.body, (error, createdBall)=>{
        res.redirect('/balls'); 
    });
});

    // Edit
    app.get("/balls/:id/edit", (req, res) => {
        Ball.findById(req.params.id, (err, foundBall) => {
        if (!err) {
            res.render('Edit', {ball: foundBall})
        } else {
            res.status(400).json(err)}
        });
    });

// Show 
app.get('/balls/:id', (req, res) => {
    Ball.findById(req.params.id, (err, foundBall) => {
        res.render('Show', {ball: foundBall})
    });
});


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});