import asyncHandler from '../middleware/asyncHandler.js';
import List from '../models/ListModel.js';
import Task from '../models/TaskModel.js';

//@desc Get tasks on a specific list
//@route GET /lists/:listId/tasks

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ _listId: req.params.listId });
  if (tasks.length > 0) {
    return res.json(tasks);
  } else {
    res.status(404);
    throw new Error('Tasks not found with the specified list id');
  }
});

//@desc Create a new Task
//@route GET /lists/:listId/tasks

const createTask = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const listId = req.params.listId;

  const list = await List.findById(listId);
  if (!list) {
    res.status(404);
    throw new Error('Specified listId is not found');
  }

  const newTask = await Task.create({
    title,
    _listId: listId,
  });

  res.status(201).json({
    _id: newTask._id,
    title: newTask.title,
    _listId: newTask._listId,
    completed: newTask.completed,
  });
});

//@desc Get specific task on a specific list
//@route GET /lists/:listId/tasks/:taskId

const getTaskById = asyncHandler(async (req, res) => {
  const taskId = req.params.taskId;
  const listId = req.params.listId;

  const list = await List.findById(listId);

  if (!list) {
    res.status(404);
    throw new Error('List not found');
  }

  const task = await Task.findOne({ _id: taskId, _listId: listId });

  if (task) {
    res.status(200).json({
      _taskId: task._id,
      title: task.title,
      _listId: task._listId,
    });
  } else {
    res.status(404);
    throw new Error('Task not found for the specified list');
  }
});

//@desc Update a task
//@route /lists/:listId/tasks/:taskId
const updateTask = asyncHandler(async (req, res) => {
  const taskId = req.params.taskId;
  const listId = req.params.listId;

  const list = await List.findById(listId);

  if (!list) {
    res.status(404);
    throw new Error('List not found');
  }

  const updatedTask = await Task.findByIdAndUpdate(taskId, {
    title: req.body.title,
  });

  if (!updatedTask) {
    res.status(404);
    throw new Error('Task not found');
  }
  res.status(201).json({ message: 'Task updated successfully' });
});

//@desc Delete a specified task
//@route /lists/:id/tasks/:taskId
const deleteTask = asyncHandler(async (req, res) => {
  const taskId = req.params.taskId;
  const listId = req.params.listId;

  const list = await List.findById(listId);

  if (!list) {
    res.status(404);
    throw new Error('List not found');
  }

  const task = await Task.findById(taskId);

  if (list && task) {
    await Task.deleteOne({ _id: task._id });
    res.status(200).json({ message: 'Task Deleted Successfully' });
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
});

export { getTasks, createTask, updateTask, deleteTask, getTaskById };
