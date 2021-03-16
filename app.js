const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
	res.send('Hello hacker with gorgeous eyes 😊');
});
app.listen(port,()=> console.log(`She hacked on port ${port}!🤓`))
