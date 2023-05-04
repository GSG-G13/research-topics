import TaskCollection from '../database/model/Task.js';;

const clearTasks = async (req, res) => {
  try {
    await TaskCollection.deleteMany({});
    res.json({
      error: false,
      message: 'Deleted Successfully.',
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
}

export default clearTasks;