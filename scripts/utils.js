const path = require('path')
const os = require('os')
const { exe } = require('utlz')

exe('cd', [path.join(os.homedir(), 'Desktop')])
