const express = require('express');

const app = express();

app.use(express.static('./dist/avatar-shuffle'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/avatar-shuffle/'});
  });

  app.listen(process.env.PORT || 8080, ()=>{
      console.log("Server has started");
  });