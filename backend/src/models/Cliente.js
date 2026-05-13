const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({

    identificacion: {
        type: String,
        required: true,
        unique: true
    },

    tipoIdentificacion: {
        type: String,
        required: true,
        enum: ['RC', 'TI', 'CC']
    },

    primerNombre: {
    type: String,
    required: true,
    match: [/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/, 'Solo letras']
},

    segundoNombre: {
        type: String
    },

    primerApellido: {
        type: String,
        required: true
    },

    segundoApellido: {
        type: String
    },

    direccion: {
        type: String
    },

    telefono: {
    type: String,
    required: true,
    match: [/^[0-9]+$/, 'El teléfono solo debe contener números']
},

    email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Correo inválido']
},

    ocupacion: {
        type: String
    },

    fechaNacimiento: {
        type: Date,
        required: true
    },

    foto: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Cliente', clienteSchema);