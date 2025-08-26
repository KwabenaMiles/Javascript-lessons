/*
  ==================================
  ES6 module index file
  This file serves as the entry point for the module, exporting all necessary components.
  An extenrnal file that contains reusable code that can be imported into other javascript files.
  Write resuable code  for many different applications.
  Can contain functions, classes, variables, functions, and constants etc.
  ==================================


*/

import {PI, getSphereVolume, getCircleArea, } from './mathUtil.js';

console.log(PI); // 3.14
const sphereVolume = getSphereVolume(10);
console.log(sphereVolume); // 4186.666666666667
const circleArea = getCircleArea(5);
console.log(circleArea); // 78.53981633974483