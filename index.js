const net = require('node:net')

function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    const { port } = server.address()
  })
}

module.exports = { findAvailablePort }