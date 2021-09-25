const brain = require('brain.js');
var net = new brain.NeuralNetwork();
const fs = require('fs');

net.train(trainingSet,
    {
        errorThresh: 0.005,  // error threshold to reach
        iterations: 20000,   // maximum training iterations
        log: true,           // console.log() progress periodically
        logPeriod: 1,       // number of iterations between logging
        learningRate: 0.3    // learning rate
    }
);

let wstream = fs.createWriteStream('./data/itog.json');
wstream.write(JSON.stringify(net.toJSON(),null,2));
wstream.end();
