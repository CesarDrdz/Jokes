// import mongoose to build the model
const mongoose = require('mongoose')

// the schema - the rules that the enteries in the bd must follow
const JokesSchema = new mongoose.Schema({
    setup: String,
    punchline:String
},{timestamps: true});

// the model - is what we use to make the acctual queries
const Joke = mongoose.model("jokes",JokesSchema)
// export the model
module.exports = Joke;


// validations go here
