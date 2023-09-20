const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController.js');

app.get('/read/:post_id', postController.viewPost);
app.get('/create/', postController.createPost);
app.post('/create', postController.createNewPost);
app.post('/delete/:post_id', postController.deletePost);
app.get('/update/:post_id', postController.updatePost);
app.post('/update/:post_id', postController.updateNewPost);

module.exports = router;