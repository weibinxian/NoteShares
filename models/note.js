const bcrypt = require('bcrypt-nodejs');

/*
NOT FINAL TABLE FOR Note

*/ 
module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('note', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        body: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            },
        },
        /*
        image:{

        }
        */
       text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    });


    return Note;
};