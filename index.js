#!/usr/bin/env node
import process from 'process';
let message = "Hello, ";
let name = process.argv[2];
message = message + name;
console.log( message );