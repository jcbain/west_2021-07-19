const fs = require('fs');

// sync readfileSync
const data = fs.readFileSync('./index.html', {encoding: 'utf-8'})
console.log('sync', data.length)

// readFile
fs.readFile('./inde.html', {encoding: 'utf-8'}, (err, data) => {
  if (err) {
    return console.log(err)
    
  }

  console.log('async', data)
})

console.log('hi there')
