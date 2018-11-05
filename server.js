const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./middlewares/authentication');
const models = require('./models');

const PORT = process.env.PORT || 3001;

//init app
const app = express();

//bodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//other middleware init
app.use(passport.initialize());
app.use(passport.session());

//api routes
const Notes = require('./controllers/api/notes');
const Users = require('./controllers/api/Users');
const Account = require('./controllers/api/account');
app.use('/api/notes', Notes);
app.use('/api/user', Users);
app.use('/api/account', Account);

//sync the models and database
//then start the server and listen 
models.sequelize.sync({force: true})
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    });
