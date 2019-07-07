const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', {title:'My Express App', message: 'Hello Tao'});
});

module.exports = router;