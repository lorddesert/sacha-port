const assert = require('node:assert')
const { findAvailablePort } = require('./index')
const test = require('node:test')

// test('findAvailablePort should reject if the port is being used.', () => {
//   assert.rejects(() => sachaPort.findAvailablePort(1234), '')
// })

test('Should return a port', async _ctx => {
  const desiredPort = process.env.PORT ?? 3000
  const port = await findAvailablePort(desiredPort)
  console.log(port)
  assert.ok(port)
})
