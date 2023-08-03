import express from 'express';
const router = express.Router();

import {
  getLists,
  createList,
  updateList,
  deleteList,
} from '../controllers/listController.js';

router.route('/').get(getLists).post(createList);
router.route('/:id').patch(updateList).delete(deleteList);

export default router;
