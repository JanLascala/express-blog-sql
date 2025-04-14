//expors
const express = require('express');
const app = express();
const port = 3000;
const notFound = require('./Middleware/notFound.js');
const errorHandler = require('./Middleware/errorHandler.js');
//access CORS! const & app.use must be on top and without final dash on local host
const cors = require("cors");
app.use(cors({ origin: 'http://localhost:5173' }))

//posts main data
const posts = require('./data/posts.js')

// export routers
const postsRouters = require('./routers/posts_routers.js')

//add static image? here later??
app.use(express.static('public'));
//server listen
app.listen(port, () => {
    console.log(`server listening http://localhost:${port}`);
})
//set path for routes !!!!!!! remember to do it at the set up !!!!!!!!
app.use('/api/v1/posts', postsRouters);


// middle ware
app.use(express.json());
//middleware 500
app.use(errorHandler);

//middle 404error
app.use(notFound);



