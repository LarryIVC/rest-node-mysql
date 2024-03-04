import express from 'express'
import { pool } from './db.js'


const app = express()

app.get('/ping', async (req, res) => {
  const [result] = await pool.query('SELECT 1 + 1 as result')
  res.json(result)
})

app.get('/employees', (req, res) => res.send('obtain all employees'))
app.post('/employees', (req, res) => res.send('add employees'))
app.put('/employees', (req, res) => res.send('updating all employees'))
app.delete('/employees', (req, res) => res.send('deleting employees'))


app.listen(3000)

console.log('Server on port', 3000)