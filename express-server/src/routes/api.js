const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/booksController');

const UsersController = require('../controllers/usersController');


router.route('/users')
	/* GET all users. */
	.get(UsersController.getAllUsers);

router.route('/users/:username')
	/* GET user by username */
	.get(UsersController.getUserByUsername)
	/* PUT user by username */
	.put(UsersController.updateUserByUsername)
	/* DELETE user by username */
	.delete( UsersController.deleteUserByUsername);

router.route('/authenticate')
	/* Check if user is authenticated */
	.post( UsersController.login);

router.route('/register')
	/* Register a new user. */
	.post(UsersController.register);	




/* GET all books. */
router.get('/books', BooksController.getAllBooks);
/* POST add new genre. */
router.post('/genre', BooksController.addNewGenre);
/* POST add new author. */
router.post('/author', BooksController.addNewAuthor);
/* POST add new book type. */
router.post('/book-type', BooksController.addBookType);
/* POST add new book. */
router.post('/book', BooksController.addNewBook);

/* Reserve books. */
router.post('/books/reserve', BooksController.reserve);
/* get reservations books. */
router.get('/books/:bookId/reservations', BooksController.reservations);
/* DELETE a book by id. */
router.post('/books/:bookId', BooksController.deleteBook);
/* UPDATE a book by id. */
router.post('/books/:bookId/edit', BooksController.editBook);

/* GET a book by id. */
router.get('/books/:bookId', BooksController.getBook);
/* GET all books. */
router.get('/books', BooksController.getAllBooks);
/* GET all genres. */
router.get('/genres', BooksController.getAllGenres);
/* GET all book types. */
router.get('/book-types', BooksController.getAllBookTypes);
/* GET all authors. */
router.get('/authors', BooksController.getAllAuthors);


module.exports = router;

 