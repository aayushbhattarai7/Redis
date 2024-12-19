// subscriber.js

import Redis from "ioredis";
const client = new Redis({   
     port:6379,
    host:'127.0.0.1',
    username:'default',
    password:'aayush',
    db:0,})
// client.subscribe("my-channel-1", "my-channel-2", (err, count) => {

//   if (err) {
//     // Just like other commands, subscribe() can fail for some reasons,
//     // ex network issues.
//     console.error("Failed to subscribe: %s", err.message);
//   } else {
//     // `count` represents the number of channels this client are currently subscribed to.
//     console.log(
//       `Subscribed successfully! This client is currently subscribed to ${count} channels.`
//     );
//   }
// });

// client.on("message", (channel, message) => {
//   console.log(`Received ${message} from ${channel}`);
// });

// // There's also an event called 'messageBuffer', which is the same as 'message' except
// // it returns buffers instead of strings.
// // It's useful when the messages are binary data.
// client.on("messageBuffer", (channel, message) => {
//   // Both `channel` and `message` are buffers.
//   console.log(channel, message);
// });


const subscribe = ()=> {
  const streamkey = `location: 12345`
  client.subscribe(streamkey, (err, count)=>{
    if(err){
      console.log('failed to subscribe', err)
      return
    }
    console.log("Subscribed now listening")
  })

  client.on('message', (channel, message)=>{
    if(channel === streamkey){
      const locationData = JSON.parse(message)
      console.log("New location", locationData)
    }
  })
}

subscribe()
