const express = require('express');
const router = express.Router();


//@route    GET api/user
//@desc     Get all user from database
router.get('/', (req,res)=> {
    res.json({'test':'This a GET request'});
});

//@route    POST api/user
//@desc     Post a user to database
router.post('/', (req,res)=> {
    res.json({'test':'This a POST request'});
});

//@route    Update api/user/:id
//@desc     Update a user to database
router.post('/edit/:id', (req,res)=> {
    res.json({'test':'This a UPDATE request'});
});

//@route    Delete api/user/:id
//@desc     Post a user to database
router.delete('/:id', (req,res)=> {
    res.json({'test':'This a DELETE request'});
});


module.exports = router;
