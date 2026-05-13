const Cliente = require('../models/Cliente');

// (C) create  creamos al cliente.

const crearCliente = async (req, res) => {

    try {

        const cliente = new Cliente(req.body);

        await cliente.save();

        res.status(201).json(cliente);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            msg: 'Error al crear cliente'
        });
    }
};


// (R) Read leer cliente

const obtenerClientes = async (req, res) => {

    try {

        const clientes = await Cliente.find();

        res.json(clientes);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            msg: 'Error obteniendo clientes'
        });
    }
};

// (U) Update: Actualizamos la información del cliente

const actualizarCliente = async (req, res) => {

    try {

        const { id } = req.params;

        const clienteActualizado = await Cliente.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.json(clienteActualizado);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            msg: 'Error actualizando cliente'
        });
    }
};




//(D)  Delete: Para eliminar el registro del cliente.

const eliminarCliente = async (req, res) => {

    try {

        const { id } = req.params;

        await Cliente.findByIdAndDelete(id);

        res.json({
            msg: 'Cliente eliminado correctamente'
        });

    } catch (error) {

    console.log(error);

    if (error.code === 11000) {

        return res.status(400).json({
            msg: 'Ya existe un cliente con este email o identificación'
        });

    }

    res.status(500).json({
        msg: 'Error al crear cliente',
        error: error.message
    });

}
};


module.exports = {
    crearCliente,
    obtenerClientes,
    actualizarCliente,
    eliminarCliente
};