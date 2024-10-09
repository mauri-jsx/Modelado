import mongoose from 'mongoose';

const { Schema } = mongoose;

// Esquema de Venta
const SaleSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    data: { type: Date, default: Date.now },
    employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: true }, //? Relacionar con Empleado
});

// Modelo de Venta
const Sale = mongoose.model('Sale', SaleSchema);

export default Sale;
