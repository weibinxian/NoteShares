const express = require('express');
const router = express.Router();

const models = require('../../models');


//@route    GET api/notes
//@desc     Get all comments from database
router.get('/', (req,res)=> {
    res.json({'test':'This a UPDATE request'});
});

//@route    POST api/notes
//@desc     Post a comment
router.post('/',(req,res)=> {
    
    const body = req.body.body;
    
    // console.log(req.user);
    console.log(req.body);

    models.Comment.findOne({ where: {id : id} })
    .then(commentid => {
         //if there are no same comment id
            if(!commentid){
                models.comment.create({
                    noteId : req.note.id,
                    body: body,
                }).then(comment => {
                    console.log(comment);
                    res.json(comment);
                }).catch(error => res.status(400).send(error));
            }  else {
                res.json({error: 'same commentid'})
                console.log('The note does not have a unique id')
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