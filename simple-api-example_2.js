const express = require('express')
const app = express() 
const port = 3000 

app.use(express.json());       // Add this to support JSON-encoded POST bodies
app.use(express.urlencoded()); // And/or add this to support URL-encoded POST bodies

app.get('/', (req, res) => {
  res.send('Look Out World! Here We Come!')
})

// To process a POST request, we use app.post()
app.post('/submit-data', (req, res) => {
  // We can access the data passed in the POST request's body by accessing req.body
  console.log(req.body)

  // req.body will be a JSON object. If you want to convert it to a string, you can use JSON.stringify()
  res.send('You sent the following data: \n ' + JSON.stringify(req.body))
})

app.listen(port, () => {
  console.log(`Example app has stated listening on port ${port}`)
})