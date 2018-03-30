const app = require('express')();
const morgan = require('morgan');

const PORT = 3000;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.json({});
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('BOOT ERR: ', err);
  } else {
    console.log(`SERVER UP ON: ${PORT}`);
  }
});
