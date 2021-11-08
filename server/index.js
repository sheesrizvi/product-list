const express = require('express')
const request = require('request')
const cors = require("cors")

var url = 'https://fakestoreapi.com/products'

const app = express()
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    const request = require('request');
    request('https://fakestoreapi.com/products', function (error, response, body) {
        let data = JSON.parse(body)
      if(response.statusCode === 200){
          res.send(data)
      }
    });
})

app.listen(3001, () => console.log("Server running..."))