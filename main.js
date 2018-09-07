
const app = require('express')();

app.get('/', (request, response) => {
	console.log('Hello, World!');
});

app.listen(8686, () => {
	console.log('listening...');
});

