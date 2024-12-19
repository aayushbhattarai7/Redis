import express from 'express'
import WebSocket,{WebSocketServer } from 'ws';
import Redis from 'ioredis'
const app = express()
const port = 4000

const wss = new WebSocketServer({ port: 8081 });
const redisClient = new Redis({
    port:6379,
    host:'127.0.0.1',
    username:'default',
    password:'aayush',
    db:0,
})

const redisSub = new Redis({
    port:6379,
    host:'127.0.0.1',
    username:'default',
    password:'aayush',
    db:0,
})

const channel = "chat_channel"

redisSub.on('message', (channel, message)=> {
    console.log("message received", message)

    wss.clients.forEach((client)=>{
        if(client.readyState === WebSocket.OPEN){
            client.send(message)
        }
    })
})

redisSub.subscribe(channel)

const server = app.listen(port, () =>{
    console.log("running on port: " + port)
})

server.on('upgrade', (request, socket, head)=>{
    wss.handleUpgrade(request, socket, head, (ws)=>{
        wss.emit('connection', ws, request)
    })
})

wss.on('connection', (ws)=>{
    console.log("ws connected")

    ws.on('message', (message)=>{
        console.log("message received", message)
                //  Check if Redis client is in a ready state
        if (redisClient.status === 'ready') {
            // Publish the message to the Redis channel if the client is ready
            redisClient.publish('chat_channel', message, (err, res) => {
                if (err) {
                    console.error('Failed to publish message to Redis:', err);
                } else {
                    console.log('Message published to Redis:', res);
                }
            });
        } else {
            console.error('Redis client is not connected. Reconnecting...');
            redisClient.connect().then(() => {
                console.log('Reconnected to Redis');
                redisClient.publish('chat_channel', message);
            }).catch((error) => {
                console.error('Failed to reconnect to Redis:', error);
            });
        }
    })
    ws.on('close', ()=>{
        console.log("ws closed")
    })
})



// const express = require('express');
// const WebSocket = require('ws');
// const redis = require('redis');
// const bodyParser = require("body-parser")
// const app = express();
// const port = 3000;

// const wss = new WebSocket.Server({ noServer: true });
// app.use(bodyParser.json())
// const redisClient = redis.createClient();
// const redisSubscriber = redis.createClient();

// const channel = 'chat_channel';

// redisSubscriber.on('message', (channel, message) => {
//     console.log('Message received from Redis:', message);

//     wss.clients.forEach((client) => {
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(message);
//         }
//     });
// });

// redisSubscriber.subscribe(channel);

// const server = app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

// server.on('upgrade', (request, socket, head) => {
//     wss.handleUpgrade(request, socket, head, (ws) => {
//         wss.emit('connection', ws, request);
//     });
// });

// wss.on('connection', (ws) => {
//     console.log('New WebSocket connection');

//     ws.on('message', (message) => {
//         console.log('Received message:', message);
//         console.log("maiyaaaa");
    
//         // Check if Redis client is in a ready state
//         if (redisClient.status === 'ready') {
//             // Publish the message to the Redis channel if the client is ready
//             redisClient.publish('chat_channel', message, (err, res) => {
//                 if (err) {
//                     console.error('Failed to publish message to Redis:', err);
//                 } else {
//                     console.log('Message published to Redis:', res);
//                 }
//             });
//         } else {
//             console.error('Redis client is not connected. Reconnecting...');
//             // Reconnect to Redis if the client is not connected
//             redisClient.connect().then(() => {
//                 console.log('Reconnected to Redis');
//                 redisClient.publish('chat_channel', message); // Retry publishing after reconnection
//             }).catch((error) => {
//                 console.error('Failed to reconnect to Redis:', error);
//             });
//         }
//     });
    

//     ws.on('close', () => {
//         console.log('WebSocket disconnected');
//     });
// });

