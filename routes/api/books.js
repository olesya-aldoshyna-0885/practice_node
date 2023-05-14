// заново НЕ ПИШЕМ const express = require('express') и const app = express();
//  так как создатся еще одно приложение
// необходимо создать отдельную страницу и затем вставить ее в основную
const express = require('express');
const books = require('./books');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(books);
})

router.get('/:id', (req, res) => {
  res.json(books[0]);
})

module.exports = router;