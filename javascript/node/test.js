var spawn = require('child_process').spawn;
var python_test = spawn('python', ['test.py']);

python_test.stdout.on('data', function(data){
  console.log(data);
});
