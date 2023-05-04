import TaskCollection from '../database/model/Task.js';
import mongoose from 'mongoose';
const updateTask = async (req, res) =>{
  try {
    const { taskId } = req.params;
    const { task } = req.body;
    const newTask = await TaskCollection.updateOne({_id: new mongoose.Types.ObjectId(taskId)}, {task});
    res.status(201).json({
      error: false,
      newTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
}

export default updateTask;