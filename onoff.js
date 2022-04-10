import {Gpio} from 'onoff-debug';
const pin = new Gpio(parseInt(process.argv[2]), 'out', 'both', {reconfigureDirection: false});
if (pin.readSync() === 1) {
    pin.writeSync(0);
} else {
    pin.writeSync(1);
}
console.log(pin.readSync());