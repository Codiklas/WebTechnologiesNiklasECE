const http = require('http')
const handles = require('./handles')
const server = http.createServer(handles.serverHandle);
server.listen(1337, "127.0.0.1")