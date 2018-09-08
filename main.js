
const app = require('express')();
const config = require('./config.json');

app.get('/', (request, response) => {
	response.send('Hello, World!');
});

app.listen(config.port, () => {
	console.log(`listening on port ${config.port}...`);
});
