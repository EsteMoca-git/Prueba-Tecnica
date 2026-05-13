const express = require('express');

const router = express.Router();

const {
    crearCliente,
    obtenerClientes,
    actualizarCliente,
    eliminarCliente
} = require('../controllers/clienteController');

router.post('/clientes', crearCliente);
router.get('/clientes', obtenerClientes)
router.put('/clientes/:id', actualizarCliente)
router.delete('/clientes/:id', eliminarCliente);



module.exports = router;