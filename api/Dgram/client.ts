import { createSocket } from 'dgram';
const message = Buffer.from('Some bytes');
const client = createSocket('udp4');

// 向本地的4200端口发送数据
client.send(message, 4200, 'localhost', (err) => {
  client.close();
});
