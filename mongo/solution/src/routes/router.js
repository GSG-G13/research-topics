import express  from 'express';
import { addTask, clearTasks, deleteTask, getTasks, updateTask } from '../controllers/index.js';

const router = express.Router();

router.get('/task', getTasks);
router.post('/task', addTask);
router.patch('/task/edit/:taskId', updateTask);
router.delete('/task/remove/:taskId', deleteTask);
router.delete('/task/clear', clearTasks);

export default router ;
