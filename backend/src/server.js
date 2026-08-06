require('dotenv/config')
const app = require('./app')
const { port } = require('./config/env')

const server = app.listen(port, () => {
  console.log(`Annai Packers & Movers API running on http://localhost:${port}`)
})

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err)
  server.close(() => process.exit(1))
})
