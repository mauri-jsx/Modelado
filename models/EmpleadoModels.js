import mongoose from 'mongoose';

const { Schema } = mongoose;

// Esquema de Empleado
const employeeSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Modelo de Empleado
const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
