const express = require('express');
const router = express.Router();
const models = require('../../models');


//@route    GET api/user
//@desc     Get all user from database
router.get('/:id', (req,res)=> {
    models.User.findById(req.params.id)
    .then(user => {
        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id,
            email: user.email,
            username: user.username,
            school: user.school,
        }
        res.json(userData)
    })
    .catch(err => {
        res.json(err)
    })
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
