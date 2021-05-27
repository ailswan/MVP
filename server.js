const express = require('express');
const { data } = require('jquery');
const bodyParser = require('body-parser');
const path = require('path');
const rp = require('request-promise');
const $ = require('cheerio');
const { fstat } = require('fs');
const fs = require('fs');



const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/overview', function (req, res) {

  let location = req.query.location;
  console.log(location);
  const url = 'https://www.zillow.com/homes/' + location;
  console.log(url);
  

  // fake data
  let rawdata = fs.readFileSync('data.json');
  let result = JSON.parse(rawdata);
  console.log(result);
  res.json(result);
  return;
  // fake data

  rp(url)
    .then(function(html){
      //success!
      // console.log(html);
      result = [];
      let articles = $('li > article', html);
      for (let i = 0; i < articles.length; i++) {
        console.log(articles[i]);
        let price = $('.list-card-price' ,articles[i]).text();
        let address = $('address' ,articles[i]).text();
        let img = $('img' ,articles[i]).attr('src');
        result.push({
          address: address,
          price: price,
          img: img
        });
      }
      console.log(result);
      res.json(result);
    })
    .catch(function(err){
      //handle error
    });

})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => { console.log('listening on port: ', PORT, '.'); });
