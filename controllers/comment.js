const Comment = require('../models/comment');

class CommentController {
  constructor(pool) {
    this.commentModel = new Comment(pool);
  }

  async getAllComments(req, res, next) {
    try {
      const comments = await this.commentModel.getAllComments();
      res.status(200).json(comments);
    } catch (err) {
      next(err);
    }
  }

  async getCommentById(req, res, next) {
    const { id } = req.params;
    try {
      const comment = await this.commentModel.getCommentById(id);
      res.status(200).json(comment);
    } catch (err) {
      next(err);
    }
  }

  async createComment(req, res, next) {
    const { laureatId, userId, text, firstname, lastname } = req.body;
    try {
      const newComment = await this.commentModel.createComment({ laureatId, userId, text, firstname, lastname });
      res.status(201).json(newComment);
    } catch (err) {
      next(err);
    }
  }

  async updateComment(req, res, next) {
    const { id } = req.params;
    const { text } = req.body;
    try {
      const updatedComment = await this.commentModel.updateComment(id, { text });
      res.status(200).json(updatedComment);
    } catch (err) {
      next(err);
    }
  }

  async deleteComment(req, res, next) {
    const { id } = req.params;
    try {
      await this.commentModel.deleteComment(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  async getCommentsByLaureatId(req, res, next) {
    const { laureatId } = req.params;
    try {
      const comments = await this.commentModel.getCommentsByLaureatId(laureatId)
      res.status(200).send(comments);
    } catch (err) {
      next(err);
    }
  }
}



module.exports = CommentController;
