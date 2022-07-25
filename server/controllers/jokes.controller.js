
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
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// find one 
module.exports.findOneSingleJoke = (req, res) => {

    // this extra var(id) at the end of params must match our route in order for it to work ("/api/jokes/:id")
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// -------UPDATE from the plateform
// module.exports.updateExistingJoke = (req, res) => {
//     joke.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedJoke => res.json({ joke: updatedJoke }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }


// UPDATE WITH SENSAI JOHN
module.exports.updateExistingJoke = (req, res) => {
    console.log(req.params);
    // destructuring 
    const { id } = req.params
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedJoke = res.json({ updatedJoke }))
        .catch(err => res.json({ message: 'Something Went Wrong', error: err }));
}

// DELETE
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}