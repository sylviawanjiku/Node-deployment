const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello hacker with gorgeous eyes 😊');
});
app.get('/dem', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('I AM AWESOME')
})
app.listen(port, () => console.log(`She hacked on port ${port}!🤓`))
