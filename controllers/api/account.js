const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt-nodejs');
const models = require('../../models');

//const User = require('../../models').user;

/*
    Validation needs to be implemented 
*/

router.get('/error', (req, res) => {
    res.sendStatus(401);
  })


//@route    POST account/signin
//@desc     POST request to login
router.post('/signin',
  passport.authenticate('local', { failureRedirect: '/api/account/error' }),
  (req, res) => {
        console.log(req.user.id);
    res.json({
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      username: req.user.username,
    });
  });

//@route    POST account/signup
//@desc     POST request to handle new accounts being created 
router.post('/signup', (req,res) => {

    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const school = req.body.school;
    const email = req.body.email;
    const passw = req.body.passw;

    console.log(req.body)
    console.log(email)
    // console.log(models);

    //look for unique account with same email
    models.User.findOne({ where: { email:email } })
    .then(userEmail => {
        //if there are no users with the same email
        if(!userEmail){
            //look for unique username
            models.User.findOne({where : { username }})
            .then(user => {
                if(!user){
                    //create new unique user
                    bcrypt.hash(passw, null, null, (err, hashedPassword) => {
                        if(err) console.log(err);
                        models.User.create({
                            // userId: user.id,
                            firstName: fname,
                            lastName: lname,
                            username: username,
                            email: email,
                            school: school,
                            password: hashedPassword
                        })
                        .then(user => {
                            console.log(user);
                            res.json(user);
                        })
                        .catch(error => {
                            res.status(400).send(error)
                        });
                    });
                } else{
                    res.json({error: 'username already taken'})
                    console.log('username already taken')
                }
            })
            .catch(err => {
                //error looking for username
                console.log('error in findOne {username}')
                console.log(err)
                res.send('error: ' + err)
            })

        } else {
            res.json({error: 'Email already taken'});
            console.log('Email already taken')
        }
    })
    .catch(err => {
        //error looking for email
        console.log('error in findOne {email}')
        console.log(err)
        res.send('error: ' + err)
    });
    
});

module.exports = router;