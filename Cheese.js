const {Sequelize, sequelize} = require("./db");

let Cheese = sequelize.define("Cheese", {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});

module.exports = {
    Cheese
};