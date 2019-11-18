const url = require('url') // Import Node url module
const qs = require('querystring')

module.exports = {
  serverHandle: function (req, res) {
    const route = url.parse(req.url)
    const path = route.pathname // Retrieve and print the current path
    const params = qs.parse(route.query)   // Retrieve and print the queryParams
      
    res.writeHead(400, {'Content-Type': 'text/html'});


    if (path === '/Bonjour' && 'Name' in params) {

      if(params['Name'] == 'Niklas'){
        res.write('Bonjour ' + params['Name'] + ' How is it going?')
      }
    } 
    
    else {
      res.write('Bonjour tout le monde')
    }  
  



    const queryParams = qs.parse(url.parse(req.url).query);
    console.log(queryParams);

    res.end(); //
  }};