const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index');

describe("User, Board and Cheese Models", () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    test("can create a User", async () => {
        const user = await User.create({
            name: "Emil",
            email: "edeleon1060@gmail.com"
        });
        expect(user.name).toBe("Emil");
        expect(user.email).toBe("edeleon1060@gmail.com");
    });

    test("can create a Board", async () => {
        const board = await Board.create({
            type: "Mexican",
            description: "Melted Queso Oaxaca",
            rating: "5/5"
        });
        expect(board.type).toBe("Mexican");
        expect(board.description).toBe("Melted Queso Oaxaca");
        expect(board.rating).toBe("5/5");
    });

    test("can create Cheese", async () => {
        const cheese = await Cheese.create({
            title: "Queso Oaxaca",
            description: "Mexican Cheese"
        });
        expect(cheese.title).toBe("Queso Oaxaca");
        expect(cheese.description).toBe("Mexican Cheese");

        const cheese2 = await Cheese.create({
            title: "Queso Fresco",
            description: "Honduran style Cheese"
        });
        expect(cheese2.title).toBe("Queso Fresco"),
        expect(cheese2.description).toBe("Honduran style Cheese")
    });

});


// seed data file