import mongoose from 'mongoose';

const { Schema } = mongoose;

// Esquema de Empleado
const empleadoSchema = new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
});

// Modelo de Empleado
const Empleado = mongoose.model('Empleado', empleadoSchema);

export default Empleado;
