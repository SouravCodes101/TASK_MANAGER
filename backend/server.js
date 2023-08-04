import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import listRoutes from './routes/listRoutes.js';
import tasksRoutes from './routes/taskRoutes.js';

connectDb();
const app = express();
const port = process.env.PORT || 5000;

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ROUTE HANDLERS */

/* LIST ROUTES */
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/lists', listRoutes);
app.use('/lists', tasksRoutes);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
