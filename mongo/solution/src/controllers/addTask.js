import TaskCollection from '../database/model/Task.js';


const addTask = async (req, res) => {
  
  try {
    const { task } = req.body;
    const newTask = await TaskCollection.create({ task });
    res.status(201).json({
      error: false,
      task:newTask
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error.',
    });
  };
};

export default addTask;
