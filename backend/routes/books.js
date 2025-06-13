const express = require("express");
const { getAllBooks, getSingleBook, createBook } = require("../contoller/books");
const router = express.Router();

router.get('/',getAllBooks);

router.get('/:bookId',getSingleBook);

router.post('/getBooks',createBook)


module.exports = router;