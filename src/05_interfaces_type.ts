// Crear una interfaz

interface Usuario {
    nombre: string;
    edad: number;
    email?: string;
}

// Crear un type

type Producto = {
    nombre: string;
    precio: number;
};

// Crear objetos

let usuario: Usuario = {
    nombre: "Lucas",
    edad: 22
};

let producto: Producto = {
    nombre: "Teclado",
    precio: 15000
};

// Mostrar resultados

console.log("Usuario:", usuario);
console.log("Producto:", producto);
