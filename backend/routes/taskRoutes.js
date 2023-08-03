import express from 'express';
const router = express.Router();

import { getTasks, createTask } from '../controllers/taskController.js';

router.route('/:listId/tasks').get(getTasks).post(createTask);

export default router;
