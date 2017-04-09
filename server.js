var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

// route get
router.get('/', function(req, res) {
    res.json({ message: 'Welcome' });   
});

app.use('/api', router);

// route post
router.post('/', function(req, res) {
	res.json({ message: req.body.info });
});


app.listen(port);
console.log('Listening to port : ' + port);