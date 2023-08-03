import asyncHandler from '../middleware/asyncHandler.js';
import Task from '../models/TaskModel.js';

//@desc Get tasks on a specific list
//@route GET /lists/:listId/tasks

const getTasks = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.listId);
  if (product) {
    return res.json(task);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

//@desc Create a new Task
//@route GET /lists/:listId/tasks

const createTask = asyncHandler(async (req, res) => {
  //   const task = await Task.findById(req.params.listId);

  const { title } = req.body;
  // const newList = new List({
  //   title,
  //   // _userId: req.user._id, // Assuming you are using the user object from the authentication middleware
  // });
  const newTask = await Task.create({
    title,
    _listId: req.params.listId,
  });

  if (newTask) {
    res.status(201).json({
      _id: newTask._id,
      title: newTask.title,
      completed: newTask.completed,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export { getTasks, createTask };
