const express = require('express');
const pug = require('pug');

const app = express();


app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/../client/public'))


app.get('*', (req, res) => {
  res.render('app');
})


app.listen(8080, () => {
  console.log('Server started on :8080');
});
