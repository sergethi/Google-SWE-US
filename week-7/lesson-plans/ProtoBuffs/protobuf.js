//create protobuf.js file 

//the protobufjs package needs imported
const protobuf = require('protobufjs');

//the load function loads the user.proto file
run().catch(err => console.log(err));

async function run() {
  const root = await protobuf.load('user.proto');

  const User = root.lookupType('userpackage.User');

  //user.verufy() function validates name and age are correct types
  console.log(User.verify({ name: 'test', age: 2 })); // null
  console.log(User.verify({ propertyDoesntExist: 'test' })); // null
  console.log(User.verify({ age: 'not a number' })); 

  //Part 2 - encoding - while protobufs can do basic data validation - main use is encode and decode
  
  const encodeBuf = User.encode({ name: 'Bob', age: 50 }).finish();

  //Try different names and ages and watch the utf8 change

  console.log(Buffer.isBuffer(encodeBuf)); // true
  console.log(encodeBuf.toString('utf8')); // Gnarly string that contains "Bill"
  console.log(encodeBuf.toString('hex')); // 0a0442696c6c101e

  //Part 3 - decoding 
  const decodeBuf = User.encode({ name: 'Bob', age: 50 }).finish();

  const obj = User.decode(decodeBuf);
  console.log(obj); // User { name: 'Bob', age: 50 }  

  //Protocol Buffers are used to transfer data over networks as alternatives to JSON and XML
  const asProtobuf = User.encode({ name: 'Joe', age: 27 }).finish();
  const asJSON = JSON.stringify({ name: 'Joe', age: 27 });

  console.log(asProtobuf.length) // 7
  console.log(asJSON.length) // 23, 3x bigger!

  //one JSON object is 3x bigger than one protocol buffer object
  //How readable and easy is it to understand Protocl Buffs compared to JSON
}

