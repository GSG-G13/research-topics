import TaskCollection from '../database/model/Task.js'

const getTasks = async (req, res) => {
  try {
    const tasks = await TaskCollection.find()

    res.json({
      error: false,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
}

export default getTasks;