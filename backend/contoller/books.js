const Book = require('../model/books');

// Get All Books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
};

// Get Single Book by ID
const getSingleBook = async (req, res) => {
    const bookId = req.params.bookId;
    try {
        const book = await Book.findById(bookId); // Fixed findById

        if (!book) { // Fixed condition check
            return res.status(404).json({ error: 'Book Not Found' });
        }

        res.json(book);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};

// Create a Book
const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book); // Return 201 status
    } catch (error) {
        res.status(400).json({ error: "Invalid Request", details: error.message });
    }
};

module.exports = { createBook, getAllBooks, getSingleBook };
