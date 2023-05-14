const express = require('express');
// const fs = require('fs/promises');
// const moment = require('moment');
const cors = require('cors');

// const books = require('./books');
const booksRouter = require('./routes/api/books');
const app = express();

// пакет cors уже содержит в себе мидлвар для обработки cors-ошибок 
// при запросе с одного адреса на другой
app.use(cors());
app.use('/api/books', booksRouter)
// четвертый пример
// перенесли код в папку роутс - апи

// логирование - это когда каждый результат запроса
// записывается в текстовый файл, обычно в файл server.log в public
// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const date = moment().format('DD-MM-YYYY_hh:mm:ss');
//   await fs.appendFile('./public/server.log', `\n${method} ${url} ${date}`);
//   next();
// })

// app.get('/books', (req, res) => {
//   res.send(books);
// });

// первый пример
// app.get('/contact', (request, res) => {
//     console.log(request.url);
//     console.log(request.method);
//   res.send('<h1>Contact page</h1>');
// });

// второй пример
// app.use((req, res, next) => {
//   console.log('first middleware')
//   next();
// })

// 

// app.get('/products', (req, res) => {
//   res.json([]);
// })
// app.get('/books', (req, res) => {
//   res.json(books);
// })

// третий пример- обработка ошибки 404
// если в постман ввести не существующий адрес http://localhost:3030/brands
// в ответ придет HTML, а нам нужен JSON @
// пишем общий мидлвар с обработкой 404 ошибки после всех мидлваров с адресами
app.use((req, res) => {
  res.status(404).json({
    message:"Not found"
  })
})

app.listen(3030, () => {
  console.log('Example app listening on port 3030!');
});