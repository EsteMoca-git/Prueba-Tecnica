export interface Cliente {

    _id?: string;

    identificacion: string;

    tipoIdentificacion: string;

    primerNombre: string;

    segundoNombre?: string;

    primerApellido: string;

    segundoApellido?: string;

    direccion?: string;

    telefono: string;

    email: string;

    ocupacion?: string;

    fechaNacimiento: string;

    foto?: string;
}