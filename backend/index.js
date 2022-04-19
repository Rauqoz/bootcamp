const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const port = process.env.PORT || 4500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', routes);

const server = app.listen(port, (err) => {
	if (err) throw err;
	console.log(`Server on Port: ${port}`);
});
