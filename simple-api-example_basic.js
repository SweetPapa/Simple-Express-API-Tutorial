const express = require('express')
const app = express() 
const port = 3000 

app.use(express.json());       
app.use(express.urlencoded()); 

let movieDatabase = [
  'Star Wars',
  'Back to the Future',
  'Little Miss Sunshine',
  'American Psycho',
  'Saw'
]

app.get('/', (req, res) => {
  res.send('Welcome to Our API!')
})

app.listen(port, () => {
  console.log(`Example app has stated listening on port ${port}`)
})