const express = require('express');
const morgan = require('morgan');
const port = 8080;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))

// resource
// attributes: color, model, isManual
const cars = {
  abcd: {
    color: 'hot pink',
    model: 'corolla',
    isManual: true,
  },
  efgh : {
    color: 'purple',
    model: 'mini van',
    isManual: false
  }
}

const generateId = () => {
  return Math.floor(Math.random() * 1000) + 1;
}

// Browse // GET /cars
app.get('/cars', (req, res) => {


  const templateVars = { cars }
  res.render('cars', templateVars)
})


// Read // GET /cars/:id
app.get('/cars/:id', (req, res) => {
  // console.log('req.params', req.params)
  const id = req.params.id;
  const car = cars[id];

  if(!car) {
    return res.redirect('/cars')
  }

  const templateVars = { car, carId: id }
  res.render('car', templateVars)

})

// Edit // POST /cars/:id
app.post('/cars/:id', (req, res) => {
  const id = req.params.id;
  const newColor = req.body.color;

  cars[id].color = newColor;


  res.redirect('/cars');
})

// Add // Post /cars
app.post('/cars', (req, res) => {
  const newCar = req.body;
  const newId = generateId();

  cars[newId] = newCar;

  res.redirect('/cars')
})

// Delete // Post /cars/:id/delete
app.post('/cars/:id/delete', (req, res) => {
  const id = req.params.id;

  delete cars[id]

  res.redirect('/cars')

})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})