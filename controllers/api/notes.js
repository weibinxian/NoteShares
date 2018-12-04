const express = require('express');
const router = express.Router();

const models = require('../../models');

//@route    GET api/note if
//@desc     Get the note from database by ID
router.get('/note/:id', (req,res)=> {
    models.Note.findById(req.params.id)
    .then(Note => {
        res.json(Note)
    })
    .catch(err => {
        res.json(err)
    });
});

//@route    GET api/note if
//@desc     Get the note from database by ID
router.get('/keyword/', (req,res)=> {

    console.log(req.query)
    res.json('hi')

});

//@route    GET api/note if
//@desc     Get the note from database by ID
router.get('/all/:id', (req,res)=> {
    console.log(req.params.id)
    models.Note.findAll({ where: {userId: req.params.id}})
    .then(Note => {
        res.json(Note)
        
    })
    .catch(err => {
        res.json(err)
    });
});

//@route    POST api/notes
//@desc     Post a note to database
router.post('/newpost',(req,res)=> {
  
    const title = req.body.title;
    const body = req.body.body;
    const text = req.body.text;
    const image = req.body.image;
    
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
                text: text,
                image: image
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
});


module.exports = router;