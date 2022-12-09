const express = require('express') // Import express so we can use it
const app = express() // Setup your express app instance
const port = 3000 // Set the port your express app will listen on

// A route for GET requests at the path '/' using app.get()
app.get('/', (req, res) => {
  res.send('Look Out World! Here We Come!') // use res.send() to send a response back to the client
})

// A different Route for GET requests at the path '/hello-bob' also using app.get()
app.get('/hello-bob', (req, res) => {
    res.send('Hello, Bob! How are you?')
})

// In order for any of our routes to work, we need to tell the app to LISTEN for requests using app.listen()
app.listen(port, () => {
  console.log(`Example app has stated listening on port ${port}`)
})