const express = require('express');
const router = express.Router();


//@route    GET api/notes
//@desc     Get all notes from database
router.get('/', (req,res)=> {
    res.json({'test':'This a GET request'});
});

//@route    POST api/notes
//@desc     Post a note to database
router.post('/', (req,res)=> {
    res.json({'test':'This a POST request'});
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