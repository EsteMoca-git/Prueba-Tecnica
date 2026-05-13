const express = require('express');
const cors = require('cors');

const conectarDB = require('./config/db');

const clienteRoutes = require('./routes/clienteRoutes')

require('dotenv').config();

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api', clienteRoutes);

app.get('/', (req, res) => {
    res.send('API funcionando');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});