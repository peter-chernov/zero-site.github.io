#!/usr/bin/env node
import process from 'process';
let two = function() {
    console.log(two);
}
if (process.argv[2] === "2") {
    two()
}