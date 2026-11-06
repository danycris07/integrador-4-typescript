// Funcion con parametros y retorno

function sumar(a: number, b: number): number {
    return a + b;
}

// Funcion con parametro opcional

function saludar(nombre: string, apellido?: string): void {
    console.log("Hola", nombre, apellido);
}

// Funcion con parametro por defecto

function mostrarEdad(edad: number = 18): void {
    console.log("Edad:", edad);
}

// Mostrar resultados

console.log("Suma:", sumar(10, 5));

saludar("Juan", "Perez");
saludar("Pedro");

mostrarEdad();
mostrarEdad(25);
