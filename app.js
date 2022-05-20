const express = require('express');
require('dotenv').config();
const cors = require('cors');
const dbConnect = require('./config/connect');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes'));
app.get('/', (req, res) => {
	res.send('Bienvenido');
});

app.listen(port, () => console.log('Servidor Funcionando Correctamente'));
dbConnect();
