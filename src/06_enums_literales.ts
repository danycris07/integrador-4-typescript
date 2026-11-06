// Crear un enum

enum Estado {
    ACTIVO,
    INACTIVO,
    PENDIENTE
}

// Crear un tipo literal

type Rol = "ADMIN" | "USER";

// Crear variables

let estado: Estado = Estado.ACTIVO;
let rol: Rol = "ADMIN";

// Mostrar resultados

console.log("Estado:", Estado[estado]);
console.log("Rol:", rol);
