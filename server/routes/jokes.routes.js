// import the controllers to use the instantiated model
const JokeController = require("../controllers/jokes.controller")
console.log(JokeController);

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes)
    app.post("/api/jokes", JokeController.createNewJoke)
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke)
    app.put("/api/jokes/:id", JokeController.updateExistingJoke)
    app.delete("/api/jokes/:id", JokeController.deleteAnExistingJoke)
}