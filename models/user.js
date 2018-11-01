const bcrypt = require('bcrypt-nodejs');

/*
NOT FINAL TABLE FOR USER

*/ 
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        }
    });

    User.beforeCreate((user) => 
        new sequelize.Promise((resolve) => {
            bcrypt.hash(user.password, null, null, (err, hashedPassword) => {
                resolve(hashedPassword);
            });
        })
        .then((hashedPassword) => {
            user.password = hashedPassword;
        })
    );

    return User;
};