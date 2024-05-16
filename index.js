const app = require('./app');
const pool = require('./database/db');
const commentRoutes = require('./routes/comment')(pool);

// Register routes
app.use('/api', commentRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
