const {sequelize} = require('./db');
const {User, Board, Cheese} = require('./index');

describe("User, Board and Cheese Models", () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    });

    test("can create a User MODEL", async () => {
        const user = await User.create({
            name: "Emil",
            email: "edeleon1060@gmail.com"
        });
        expect(user.name).toBe("Emil");
        expect(user.email).toBe("edeleon1060@gmail.com");
    });

    test("can create a Board MODEL", async () => {
        const board = await Board.create({
            type: "Mexican",
            description: "Melted Queso Oaxaca",
            rating: 5
        });
        expect(board.type).toBe("Mexican");
        expect(board.description).toBe("Melted Queso Oaxaca");
        expect(board.rating).toBe(5);
    });

    test("can create Cheese MODEL", async () => {
        const cheese2 = await Cheese.create({
            title: "Queso Fresco",
            description: "Honduran style Cheese"
        });
        expect(cheese2.title).toBe("Queso Fresco"),
        expect(cheese2.description).toBe("Honduran style Cheese")
    });

    // User can have many Board
    test("can create User with many Boards", async () => {
        const spongebobUser = await User.create({
            name: "Spongebob",
            email: "spongebob.squarepants@krustykrab.com"
        });
        const oaxacaCheeseBoard = await Board.create({
            name: "Mexican",
            description: "Melted Queso Oaxaca",
            rating: 5
        });
        const krabbyPattyBoard = await Board.create({
            name: "Krabby Patty",
            description: "Seafood",
            rating: 4.5
        });
        await spongebobUser.addBoard(oaxacaCheeseBoard); // is adding user2 and board2
        await spongebobUser.addBoard(krabbyPattyBoard);
        const userBoard2 = await spongebobUser.getBoards();

        expect(userBoard2.length).toBe(2);
        expect(spongebobUser.name).toBe("Spongebob");
        expect(spongebobUser.email).toBe("spongebob.squarepants@krustykrab.com");
    });

});


// seed data file