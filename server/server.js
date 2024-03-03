require('dotenv').config();

const path = require('node:path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

// Serving static files 
app.use(express.static("public"))
app.use('/images', express.static(path.join('public', 'images')));


// Import Routes
const categoryRouters = require('./routers/categoryRouters');

// Routers 
app.use('/', categoryRouters);

app.listen(port, async () => {
    console.log(`Server started on port ${port}!`);
});



// npm install http2-express-bridge

// const http2Express = require('http2-express-bridge')
// const http2 = require('http2')
// const { readFileSync } = require('fs')
// const app = http2Express(express)

// const options = {
//   key: readFileSync('<Certificate Key>'),
//   cert: readFileSync('<Certificate file>'),
//   allowHTTP1: true
// }
// const server = http2.createSecureServer(options, app)
// server.listen(port)