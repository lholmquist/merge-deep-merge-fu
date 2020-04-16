'use strict';
const fs = require('fs');

const deepmerge = require('deepmerge');
const mergedeep = require('merge-deep');
const isStream = require('isstream');
const isPlainObject = require('is-plain-object')

const archivePath = '/home/lucasholmquist/develop/just-playing/merge-deep-merge-fu/archive.tar';
const readStream = fs.createReadStream(archivePath);

const options = {body: readStream};

const deepMerged = deepmerge({key1: 'deepmerged'}, options);

console.log(deepMerged);

const mergeDeeped = mergedeep({key1: 'merge-deep'}, options);

console.log(mergeDeeped);

const deepMergeWithPlainObject = deepmerge({key1: 'deepmergedPlainObject'}, options, {isMergeableObject: isPlainObject});

console.log(deepMergeWithPlainObject);

console.log(`deep merge stream check: ${isStream(deepMerged.body)}`);
console.log(`deep merge with plain object stream check: ${isStream(deepMergeWithPlainObject.body)}`);
console.log(`merge deep stream check: ${isStream(mergeDeeped.body)}`);
