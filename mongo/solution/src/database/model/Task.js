import mongoose from 'mongoose';

const tasksSchema = new mongoose.Schema({
  task: { type:String, required: true }
})

const TaskCollection = mongoose.model('Tasks', tasksSchema);

export default TaskCollection;