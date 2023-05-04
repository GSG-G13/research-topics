import TaskCollection from '../database/model/Task.js';
import mongoose from 'mongoose';

const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;
  
    await TaskCollection.deleteOne({_id: new mongoose.Types.ObjectId(taskId)});
    res.json({
      error: false,
      message: 'Deleted Successfully.',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
}

export default deleteTask;