# Proyecto de Suministros de Limpieza

Este proyecto es una aplicación diseñada para un comercio de suministros de limpieza. Permite a los empleados registrar sus ventas de manera individual y acceder a la aplicación utilizando credenciales seguras.

## Estructura del Proyecto

El proyecto se compone de dos modelos principales:

1. **Empleado**
2. **Venta**

### Modelos

#### Empleado

- **nombre**: Cadena de texto que representa el nombre del empleado.
- **email**: Cadena de texto que debe ser única y sirve como identificador para el acceso a la aplicación.
- **contraseña**: Cadena de texto que almacena la contraseña del empleado (debería ser almacenada de forma segura, utilizando técnicas como hashing).

#### Venta

- **monto**: Número que representa el monto de la venta.
- **fecha**: Fecha en la que se realizó la venta, con un valor predeterminado de la fecha actual.
- **empleado**: Referencia al modelo `Empleado`, que indica quién realizó la venta.

### Relaciones

La relación entre los modelos **Empleado** y **Venta** es referenciada. Un empleado puede realizar múltiples ventas, pero cada venta está asociada a un solo empleado. Esta decisión se tomó por las siguientes razones:

1. **Eficiencia**: Al usar referencias, evitamos cargar todos los registros de ventas de un empleado cada vez que consultamos sus datos. Esto mejora el rendimiento de la aplicación, especialmente cuando hay muchos registros.

2. **Flexibilidad**: Si en el futuro se necesitan agregar más campos a la venta o realizar consultas complejas sobre las ventas, tener una relación referenciada nos permite hacerlo de manera más sencilla.

3. **Escalabilidad**: En caso de que se desee agregar más funcionalidades (como reportes de ventas), es más fácil trabajar con un esquema que tenga relaciones bien definidas.
