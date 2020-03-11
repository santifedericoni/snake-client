const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.177',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: SF');
  });

  conn.on('connect', () => {
    conn.write('Move: up');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = connect;