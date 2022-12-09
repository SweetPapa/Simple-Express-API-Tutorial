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

// A simple route to return the movie data
app.get('/get-data', (req, res) => {
  res.send({data: movieDatabase})
})

// A route to add a movie to the database
app.post('/submit-data', (req, res) => {
  console.log('Data Passed Recieved')
  console.log(req.body)

  // If the movieKey property does not exist, we need to return an error message
  if (!req.body.newMovieTitle ){
    res.send('Please supply a newMovieTitle in your request').status(501)
    return
  }
 
  const movieName = req.body.newMovieTitle // Create a new variable (for readability sake)

  // Let us try to delete the key specified, if it fails, we can send back an error message:
  try {
    movieDatabase.push(movieName)
    res.send({status: `Added ${movieName} to Database Successfully`, databaseData: movieDatabase}).status(201)
  } catch (e) {
    res.send({status: 'Failed to Add New Movie to Database Successfully', error: e}).status(501)
  }
})

// To process a PUT request, we use app.put()
// This code will update the movieDatabase array with a new Movie. 
// The user must specify the index number in the array to update and a new value
app.put('/update-data', (req, res) => {
  console.log('Data Passed Recieved')
  console.log(req.body)

  // If the movieKey or newMovieTitle properties do not exists, we need to return an error message
  if (!req.body.movieKey || !req.body.newMovieTitle){
    res.send('Please supply both a movieKey and newMovieTitle in your request').status(501)
    return
  }
 
  const movieKey = parseInt(req.body.movieKey) // Convert movieKey to a number if it is not one already
  const movieTitle = req.body.newMovieTitle // Save the movie title in a variable (so it is easier to read)

  // Let us try to update the key specified with the data passed, if it fails, we can send back an error message:
  try {
    movieDatabase[movieKey] = movieTitle
    res.send({status: 'Updated Database Successfully', databaseData: movieDatabase}).status(201)
  } catch (e) {
    res.send({status: 'Failed to Update Database Successfully', error: e}).status(501)
  }
})

// To process a DELETE request, we use app.delete()
// We will use splice() to remove the specified key from the movieDatabase array object
app.delete('/delete-data', (req, res) => {
  console.log('Data Passed Recieved')
  console.log(req.body)

  // If the movieKey property does not exist, we need to return an error message
  if (!req.body.movieKey ){
    res.send('Please supply a movieKey in your request').status(501)
    return
  }
 
  const movieKey = parseInt(req.body.movieKey) // Convert movieKey to a number if it is not one already

  // Let us try to delete the key specified, if it fails, we can send back an error message:
  try {
    const movieToDelete = movieDatabase[movieKey]

    if (typeof movieToDelete === 'undefined'){
      throw 'Movie Key Not Found'
    }

    movieDatabase.splice(movieKey, 1)

    res.send({status: `Deleted ${movieToDelete} from Database Successfully`, databaseData: movieDatabase}).status(201)
  } catch (e) {
    res.send({status: 'Failed to Delete Key from Database Successfully', error: e}).status(501)
  }
})

app.listen(port, () => {
  console.log(`Example app has stated listening on port ${port}`)
})