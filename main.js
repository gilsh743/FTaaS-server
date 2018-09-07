
const app = require('express')();

app.get('/', (request, response) => {
	response.send('Hello, World!');
});

app.listen(8686, () => {
	console.log('listening...');
});

