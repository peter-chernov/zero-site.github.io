import {Gpio} from 'onoff-debug';
const pin2 = new Gpio(2, 'out', 'both', {reconfigureDirection: false});
const pin3 = new Gpio(3, 'out', 'both', {reconfigureDirection: false});
const pin4 = new Gpio(4, 'out', 'both', {reconfigureDirection: false});
pin2.writeSync(0);
pin3.writeSync(0);
pin4.writeSync(0);
let numb = 1;
setInterval(function() {
    if (numb === 1) {
        pin4.writeSync(0);
        pin2.writeSync(1);
    } else if(numb === 2) {
        pin2.writeSync(0);
        pin3.writeSync(1);
    } else if(numb === 3) {
        pin2.writeSync(0);
        pin3.writeSync(1);
        numb = 0;
    }
    numb = numb++;
}, 1000);
console.log(pin.readSync());