const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by CrazyDave');
});

app.get('/proxySize', (req, res, next)=>{
	res.sendfile("assets/a1_proxy_size.json")
})

app.get('/devHours', (req, res, next)=>{
	res.sendfile("assets/a1_dev_hours.json")
})

app.get('/3aTest1', (req, res, next)=>{
	res.sendfile("assets/3a_test1.json")
})

app.get('/3aTest2', (req, res, next)=>{
	res.sendfile("assets/3a_test2.json")
})

app.listen(port,  () => 
	console.log('listening on port ' + port
));


