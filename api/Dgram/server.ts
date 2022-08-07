import { createSocket } from 'dgram';
// 创建一个udp的socket连接
const server = createSocket('udp4');

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

// 监听本地的4200端口
server.bind({
  port: 4200,
  address: 'localhost',
});
