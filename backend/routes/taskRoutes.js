import express from 'express';
const router = express.Router();

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} from '../controllers/taskController.js';

router.route('/:listId/tasks').get(getTasks).post(createTask);
router
  .route('/:listId/tasks/:taskId')
  .patch(updateTask)
  .delete(deleteTask)
  .get(getTaskById);

export default router;
