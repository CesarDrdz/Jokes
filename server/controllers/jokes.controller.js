
// this is the controller 
// all CRUD OPS
// this file makes quiries to the DB 
// using the model 
// import the model (require)

const Joke = require("../models/jokes.models")

// CRUD
module.exports.findAllJokes = (req, res) => {
    // nothing put in the find so it will find everything.
    Joke.find()
        .then(allTheJokes => {
            console.log(allTheJokes);
            // Important what we return here is what we will recieve in react!
            res.json(allTheJokes)
        })
        .catch(err => res.json({
            message: "Something went wrong ", error: err
        }))
}
// create 
module.exports.createNewJoke = (req, res) => {
    // db.joke.insertOne({setup:" ", punchline: "  "})
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ user: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
