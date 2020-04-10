// const express = require('express');

// const app = express();

// app.use(express.static('./dist/avatar-shuffle'));

// app.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: 'dist/avatar-shuffle/'});
//   });

//   app.listen(process.env.PORT || 8080, ()=>{
//       console.log("Server has started");
//   });

  //Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/avatar-shuffle'));
app.use(express.static('AvatarShuffle/dist/avatar-shuffle'));


app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/avatar-shuffle/index.html'));
});

console.log(__dirname);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, ()=>{
    console.log("server has started on port 8080")
});