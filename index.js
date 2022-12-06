const {User} = require("./User");
const {Board} = require("./Board");
const {Cheese} = require("./Cheese");

User.hasMany(Board);
// Board.belongsToMany(Cheese, {through: })


module.exports = {
    User,
    Board,
    Cheese
};