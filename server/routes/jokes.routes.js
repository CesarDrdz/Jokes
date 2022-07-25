// import the controllers to use the instantiated model
const JokeController = require("../controllers/jokes.controller")
console.log(JokeController);

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes)
}