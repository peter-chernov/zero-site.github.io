const Gpio = require('onoff').Gpio;
const led = new Gpio(2, 'out');
const button = new Gpio(3, 'in', 'both');

button.watch((err, value) => led.writeSync(value));