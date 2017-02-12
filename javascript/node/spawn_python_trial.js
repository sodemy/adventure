// from this web site. very thx.
// http://ayapi.github.io/posts/nodejsspawnpythonencoding/
// http://b.hatena.ne.jp/entry/285135219/comment/overmorrow

var spawn = require ('child_process').spawn,
python_adaptor = spawn('python', ['app.py'],
//{
//  env:("PYTHONIOENCODING" : "cp65001")
//});

data = [1,2,3,4,5,6,7,8,9],
dataString = '';

python_adaptor.stdout.on('data', function(data){
  dataString += data.toString();
});

python_adaptor.stdout.on('end', function(){
  console.log('Sum of numbers=', dataString);
});

python_adaptor.stdin.write(JSON.stringify(data));
python_adaptor.end();
