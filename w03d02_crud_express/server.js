const express = require('express');
const morgan = require('morgan');
const port = 8080;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

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

  const templateVars = { car }
  res.render('car', templateVars)

})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})