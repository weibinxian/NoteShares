const express = require('express');
const router = express.Router();

const models = require('../../models');
const Note = require('../../models').note;

//@route    GET api/notes
//@desc     Get all notes from database
router.get('/', (req,res)=> {
    Note.findById(1).then(Note =>{
        res.json(Note);
    })
});

//@route    POST api/notes
//@desc     Post a note to database
router.post('/newpost',(req,res)=> {
  
    const title = req.body.title;
    const body = req.body.body;
    const text = req.body.text;
    
    // console.log(req.user);
    console.log(req.body);

    /*
    Note need a unique title to be created 
        -is there another way we can have similar titles?
    */
    models.Note.findOne({ where: {title : title} })
    .then(noteTitle => {
        if(!noteTitle){
            //create a new note
            models.Note.create({
                userId : req.user.id,
                title: title,
                body: body,
                text: text
            })
            .then(note => {
                console.log(note);
                res.json(note);
            }).catch(error => {
                res.status(400).send(error)
            });
           
        } else {
            res.json({error: 'Pick a new title'})
            console.log('The note does not have a unique title')
        }
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