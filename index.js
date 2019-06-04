var bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const serveIndex = require('serve-index')
const app = express()
const port = process.env.PORT || 3000;


/* app.get('/', (req, res) => res.send('Hello World I am in /Root')) */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/* app.get('/data', function(req, res, next) {
    res.json(data).pretty();
  }); */

app.use("/table",express.static('table')); 
/* app.use('/contact', express.static('views')); */

/* app.use(serveIndex('views/images',{'icons':true}));  */// this will show the folder structure and give access only
//those files in the specified folder
app.use(express.static('views')); 
/* app.use("/public",express.static('dummy')); */  /* use for different routing */

/* app.use(bodyParser.urlencoded({ extended: false })); */

app.post("/", (req,res)=>{
  var personName = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var data = personName + email + subject + message;

  /* fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
})  */
res.redirect("https://wa.me/?text=I'm%20inquiring%20about%20the%20apartment%20listing")
})

