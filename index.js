const express = require('express')
const path = require('path')
var exphbs = require('express-handlebars');
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
    console.log("listening...");
})
