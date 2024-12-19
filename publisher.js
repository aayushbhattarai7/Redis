// publisher.js

import Redis from 'ioredis'
const redis = new Redis({
    port:6379,
    host:'127.0.0.1',
    username:'default',
    password:'aayush',
    db:0,
});

const userId = Math.random().toFixed(6)
const streamKey = `location: 12345`
const latitude = (Math.random()* 180 - 90).toFixed(6)
const longitude = (Math.random()* 360 - 180).toFixed(6)
const sendLocation = async() => {
  const locationData = {
    userId,
    latitude,
  longitude,
  time: new Date().toISOString()
}
const args = []
Object.keys(locationData).forEach((key)=> {
  args.push(key, locationData[key])
})
const arg = JSON.stringify(args)
await redis.publish(streamKey, arg)   
console.log(streamKey, ...args, "stored")
}



setInterval(()=>{
  sendLocation()
}, 2000)


  // setInterval(() => {
  //   const message = { foo: Math.random() };
  //   // Publish to my-channel-1 or my-channel-2 randomly.
  //   const channel = `my-channel-${1 + Math.round(Math.random())}`;
  
  //   // Message can be either a string or a buffer
  //   redis.publish(channel, JSON.stringify(message));
  //   console.log("Published %s to %s", message, channel);
  // }, 1000);
