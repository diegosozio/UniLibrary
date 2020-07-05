const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController');

const BooksController = require('../controllers/booksController');

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
	

/* GET all books. */
router.get('/books', BooksController.getAllBooks);

/* POST add new genre. */
router.post('/genre', BooksController.addNewGenre);
module.exports = router;

/* POST add new author. */
router.post('/author', BooksController.addNewAuthor);
module.exports = router;

/* POST add new book type. */
router.post('/book-type', BooksController.addBookType);
module.exports = router;

/* POST add new book. */
router.post('/book', BooksController.addNewBook);

/* GET all books. */
router.get('/books', BooksController.getAllBooks);
/* GET all genres. */
router.get('/genres', BooksController.getAllGenres);
/* GET all book types. */
router.get('/book-types', BooksController.getAllBookTypes);
/* GET all authors. */
router.get('/authors', BooksController.getAllAuthors);

router.route('/authenticate')
	/* Check if user is authenticated */
	.post( UsersController.login);


router.route('/register')
	/* Register a new user. */
	.post(UsersController.register);

module.exports = router;

 