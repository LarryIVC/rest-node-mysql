import { Router } from 'express';

const router = Router()

router.get('/employees', (req, res) => res.send('obtain all employees'))
router.post('/employees', (req, res) => res.send('add employees'))
router.put('/employees', (req, res) => res.send('updating all employees'))
router.delete('/employees', (req, res) => res.send('deleting employees'))

export default router