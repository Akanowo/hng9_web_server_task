const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
	res.setHeader('Server', 'Nginx');
	return res.send('Hello world!');
});

app.listen(PORT, () => console.log(`App started on ${PORT}`));
