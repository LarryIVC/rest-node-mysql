import { Router } from 'express';
import {
  createEmployee,
  deleteEmployee,
  getEmployees,
  updateEmployee,
  getEmployeeById
} from '../controllers/employees.controller.js';

const router = Router()

router.get('/employees', getEmployees)
router.post('/employees', createEmployee)
router.put('/employees', updateEmployee)
router.delete('/employees', deleteEmployee)
router.get('/employees/:id', getEmployeeById)

export default router