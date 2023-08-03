import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import lists from './data/lists.js';
import users from './data/users.js';
import User from './models/userModel.js';
import List from './models/ListModel.js';
import Task from './models/TaskModel.js';
import connectDb from './config/db.js';

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await User.deleteMany();
    await Task.deleteMany();
    await List.deleteMany();

    //   const adminUser = createUsers[0]._id;
    const createdLists = await List.insertMany(lists);

    const sampleLists = lists.map((list, index) => {
      return { ...list, list: createdLists[index]._id };
    });

    await List.insertMany(sampleLists);

    console.log(`Data Imported!`.green.inverse);

    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Task.deleteMany();
    await List.deleteMany();

    console.log(`Data Destroyed`.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
