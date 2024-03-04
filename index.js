import express from 'express'


const app = express()

app.get('/employees', (req, res) => res.send('obtain all employees'))
app.post('/employees', (req, res) => res.send('add employees'))
app.put('/employees', (req, res) => res.send('updating all employees'))
app.delete('/employees', (req, res) => res.send('deleting employees'))


app.listen(3000)

console.log('Server on port', 3000)