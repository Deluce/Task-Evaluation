const express = require('express');
	  path = require('path');
	  bodyParser = require('body-parser');
	  index = require('./routes/index');
	  product = require('./routes/product.route');

	  port = 3000;

	  app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MiddleWare
app.use(bodyParser.urlencoded({edtended: false}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/products', product);

app.listen(port, function(){
	console.log('Server up: http://localhost: '+ port);
});