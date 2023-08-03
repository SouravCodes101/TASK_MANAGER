import asyncHandler from '../middleware/asyncHandler.js';
import List from '../models/ListModel.js';

//@desc Fetch all lists
//@route /lists
//@access
const getLists = asyncHandler(async (req, res) => {
  const lists = await List.find({});
  res.json(lists);
});

//@desc Create a list
//@route /lists
const createList = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const newList = await List.create({
    title,
  });

  if (newList) {
    res.status(201).json({
      _id: newList._id,
      title: newList.title,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@desc Update a specified list
//@route /lists/:id
const updateList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id);

  if (list) {
    list.title = req.body.title || list.title;
    const updatedList = await list.save();

    // res.sendStatus(200);
    res.status(200).json({
      _id: updatedList._id,
      title: updatedList.title,
    });
  } else {
    res.status(404);
    throw new Error('List not found');
  }
});

//@desc Delete a specified list
//@route /lists/:id
const deleteList = asyncHandler(async (req, res) => {
  const list = await List.findById(req.params.id);

  if (list) {
    await List.deleteOne({ _id: list._id });
    res.status(201).json({ message: 'List deleted successfully' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
export { getLists, createList, updateList, deleteList };
