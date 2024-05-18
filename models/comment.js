class Comment {
    constructor(pool) {
      this.pool = pool;
    }
  
    async getAllComments() {
      try {
        const result = await this.pool.query('SELECT * FROM comments');
        return result.rows;
      } catch (error) {
        console.log(error)
        throw new Error(error.message);
      }
    }
  
    async getCommentById(id) {
      try {
        const result = await this.pool.query('SELECT * FROM comments WHERE id = $1', [id]);
        if (result.rows.length > 0) {
          return result.rows[0];
        } else {
          throw new Error('Comment not found');
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async createComment({ laureatId, userId, text, firstname, lastname }) {
      try {
        const result = await this.pool.query(
          'INSERT INTO comments (laureat_id, user_id, text, firstname, lastname) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [laureatId, userId, text, firstname, lastname]
        );
        return result.rows[0];
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async updateComment(id, { text }) {
      try {
        const result = await this.pool.query(
          'UPDATE comments SET text = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
          [text, id]
        );
        if (result.rows.length > 0) {
          return result.rows[0];
        } else {
          throw new Error('Comment not found');
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  
    async deleteComment(id) {
      try {
        const result = await this.pool.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length > 0) {
          return result.rows[0];
        } else {
          throw new Error('Comment not found');
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }

    async getCommentsByLaureatId(laureatId) {
      try {
        const result = await this.pool.query('SELECT * FROM comments WHERE laureat_id = $1', [laureatId]);
        return result.rows;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
  
  module.exports = Comment;
  