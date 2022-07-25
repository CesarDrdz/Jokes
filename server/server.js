
const express = require('express')
const app = express();
const PORT = 8000;
const DB = "jokes_DB";

// ---Middleware--
app.use(express.json(), express.urlencoded({extended:true}));
// ---------------

require("./config/mongoose.config")(DB);
// after the db import the routes here
require("./routes/jokes.routes")(app);

// Start the server (at the end if the file)
app.listen(PORT, () => {
    console.log(`>>> SERVER UP ON PORT ${PORT} <<`);
})