const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/usersController');
const BooksController = require('../controllers/booksController');

/* Get welcome message */
router.get('/', UsersController.getWelcomeMessage);

/* GET all users. */
router.get('/users', UsersController.getAllUsers);


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

module.exports = router;

/* GET one users. 
router.get('/users/:id', (req, res) => {
	User.findById(req.params.id, (err, users) => {
		if (err) res.status(500).send(error)

		res.status(200).json(users);
	});
});

/* Create a user. 
router.post('/users', (req, res) => {
	let user = new User({
		name: req.body.name,
		age: req.body.age
	});

	user.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'User created successfully'
		});
	});
});
*/