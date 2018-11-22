const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs')
const models = require('../../models');
const Note = require('../../models').note;
const User = require('../../models/user');

//@route    GET api/notes
//@desc     Get all comments from database
router.get('/', (req,res)=> {
    Note.findById(1).then(Note =>{
        res.json(Note);
    })
});

//@route    POST api/notes
//@desc     Post a comment
router.post('/newpost',(req,res)=> {
  
    const title = req.body.title;
    const body = req.body.body;
    const text = req.body.text;
    
    // console.log(req.user);
    console.log(req.body);

    models.Note.findOne({ where: {title : title} })
    .then(note => {
                models.Note.create({
                    userId : req.user.id,
                    title: title,
                    body: body,
                    text: text
                })
                .then(note => {
                    console.log(note);
                    res.json(note);
                }).catch(error => res.status(400).send(error));
               
        
    });
    
    
});

//@route    Update api/notes/:id
//@desc     Update a note to database
router.post('/edit/:id', (req,res)=> {
    res.json({'test':'This a UPDATE request'});
});

//@route    Delete api/notes/:id
//@desc     Post a note to database
router.delete('/:id', (req,res)=> {
    res.json({'test':'This a DELETE request'});
});


module.exports = router;