import mongoose from 'mongoose';

const { Schema } = mongoose;

// Esquema de Venta
const ventaSchema = new Schema({
    monto: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },
    empleado: { type: Schema.Types.ObjectId, ref: 'Empleado', required: true }, //? Relacionar con Empleado
});

// Modelo de Venta
const Venta = mongoose.model('Venta', ventaSchema);

export default Venta;
