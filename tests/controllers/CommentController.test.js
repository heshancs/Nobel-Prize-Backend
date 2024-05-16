const CommentController = require('./../../controllers/comment');
const Comment = require('./../../models/comment');

describe('CommentController', () => {
  describe('getAllComments', () => {
    test('should return all comments', async () => {
      const poolMock = { query: jest.fn() };
      const commentModelMock = new Comment(poolMock);

      const req = {};
      const res = { status: jest.fn(() => res), json: jest.fn() };
      const next = jest.fn();

      const commentController = new CommentController(poolMock);

      const mockComments = [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }];
      poolMock.query.mockResolvedValue({ rows: mockComments });

      await commentController.getAllComments(req, res, next);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockComments);
      expect(next).not.toHaveBeenCalled();
    });

    test('should handle errors', async () => {
      const poolMock = { query: jest.fn() };
      const commentModelMock = new Comment(poolMock);

      const req = {};
      const res = { status: jest.fn(() => res), json: jest.fn() };
      const next = jest.fn();

      const commentController = new CommentController(poolMock);

      const errorMessage = 'Database error';
      poolMock.query.mockRejectedValue(new Error(errorMessage));

      await commentController.getAllComments(req, res, next);

      expect(next).toHaveBeenCalledWith(new Error(errorMessage));
      expect(res.status).not.toHaveBeenCalled();
      expect(res.json).not.toHaveBeenCalled();
    });
  });
});
