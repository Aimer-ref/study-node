/**
 * 前置知识：https://segmentfault.com/q/1010000009002065
 * 1个字节是8位 但是为了显示好看 变成16进制 但是本质上还是2进制
 */
// 生成一个2个字节的 并且且填充为158的缓冲区
const buf1 = Buffer.alloc(2, 158);
console.log(buf1); // <Buffer 9e 9e>  9*16的1次方 + 14*16的0次方 e代表14

const buf2 = Buffer.from([411, 25, 6, 7]);
console.log(buf2);

// 字符串的话会调用对应的chartCodeAt 例如 'n'.charCodeAt(0) => 110 再讲120转成16进制 => 6e
const buf3 = Buffer.from('node');
console.log(buf3); // <Buffer 78 61 73>
