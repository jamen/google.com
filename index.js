#!/usr/bin/env node

var opn = require('opn')
var search = encodeURIComponent(process.argv.slice(2).join(' '))
opn('https://google.com/#q=' + search, { wait: false })
