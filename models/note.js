const Sequelize = require('sequelize')

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
        type: DataTypes.STRING(3000),
        allowNull: false,
        // get() {
        //     return this.getDataValue('body').toString('utf8'); // or whatever encoding is right
        //   },
        validate: {
            notEmpty: true,
            },
        },
        image:{
            type: DataTypes.ARRAY(Sequelize.TEXT),
            allowNull: true,
        },
        text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        
    },
    });

    Note.associate = (models) => {
        models.Note.belongsTo(models.User
        );
      }
    return Note;
};