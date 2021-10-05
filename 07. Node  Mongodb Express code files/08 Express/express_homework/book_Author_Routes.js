// this is not a coding assignment

var express = require('express');
var router = express.Router();

// Require controller modules.
// Not coded. No need to code either.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');

/// BOOK ROUTES ///
// Identify the Purpose of the following routes.
// One to be answered are marked as "??"

// GET catalog home page.
router.get('/', book_controller.index);

// POST request for creating Book.
router.post('/book/create', book_controller.book_create_post);

// POST request to delete Book.
router.post('/book/:id/delete', book_controller.book_delete_post);

// ??
router.post('/book/:id/update', book_controller.book_update_post);

// ??.
router.get('/book/:id', book_controller.book_detail);

// ??
router.get('/books', book_controller.book_list);


/// AUTHOR ROUTES ///

// POST request for creating Author.
router.post('/author/create', author_controller.author_create_post);

// ??
router.post('/author/:id/delete', author_controller.author_delete_post);

// ??
router.post('/author/:id/update', author_controller.author_update_post);

// ??
router.get('/authors', author_controller.author_list);


module.exports = router;


/* 

ans 1 : POST request to update a Book refered by its id.

ans 2 : GET request to get or fetch Book details refered by its id.

ans 3 : POST request to get or fetch all Book details.

ans 4 : POST request to delete a author refered by its id.

ans 5 : POST request to update a author refered by its id.

ans 6 : GET request to get all author details.

*/