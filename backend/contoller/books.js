const Book = require("../model/books");
const multer = require("multer");
const path = require("path");

// Get All Books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Get Single Book by ID
const getSingleBook = async (req, res) => {
  const bookId = req.params.bookId;
  try {
    const book = await Book.findById(bookId);

    if (!book) {
      // Fixed condition check
      return res.status(404).json({ error: "Book Not Found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/books");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
  },
});

const upload = multer({ storage: storage }).single("image");

// Create a Book
const createBook = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Error uploading image", details: err.message });
    }
    const { name, description, summary, type, quantity, price } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image is required" });
    }
    const imgUrl = `/uploads/books/${req.file.filename}`;
    try {
      const book = await Book.create({
        name,
        description,
        summary,
        type,
        quantity,
        price,
        imgUrl,
      });

      res.status(201).json({ statusCode: 201, success: true, data: book });
    } catch (error) {
      res
        .status(400)
        .json({ error: "Invalid Request", details: error.message });
    }
  });
};

module.exports = { createBook, getAllBooks, getSingleBook };
