// 服务
var 
  express = require('express'),
  // config = require('./config'),
  app = express(),
  fs= require('fs'),
  path = require('path'),
  ejs = require('ejs');
  // tools = require('./tools');

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'webroot')));

app.get('/index.html', function(req, res){
	var index = './webroot/index.html';
	if(fs.existsSync(index)){
		fs.readFile(index,function(e,content){
			if(e) throw e;
			res.set({
				'Content-Type': 'text/html'
			});
			res.send(content);
		})
	}
});

app.listen(8080);
