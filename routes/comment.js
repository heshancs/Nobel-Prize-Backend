const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment');

module.exports = (pool) => {
  const commentController = new CommentController(pool);

  // Get all comments
  router.get('/comments', (req, res, next) => commentController.getAllComments(req, res, next));

  // Laureat a new comment
  router.post('/comments', (req, res, next) => commentController.createComment(req, res, next));

  // Get a single comment by ID
  router.get('/comments/:id', (req, res, next) => commentController.getCommentById(req, res, next));

  // Update a comment by ID
  router.put('/comments/:id', (req, res, next) => commentController.updateComment(req, res, next));

  // Delete a comment by ID
  router.delete('/comments/:id', (req, res, next) => commentController.deleteComment(req, res, next));

   // Get all comments for a specific userId
   router.get('/comments/laureat/:laureatId', (req, res, next) => commentController.getCommentsByLaureatId(req, res, next));

  return router;
};
