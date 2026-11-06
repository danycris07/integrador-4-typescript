# Glosario de TypeScript

### 1. TypeScript
Es un lenguaje de programación basado en JavaScript que permite utilizar tipos de datos.

```typescript
let nombre: string = "Juan";
```

### 2. JavaScript
Es un lenguaje de programación utilizado para desarrollar páginas y aplicaciones web.

```javascript
let edad = 20;
console.log(edad);
```

### 3. String
Es un tipo de dato que se utiliza para guardar textos.

```typescript
let nombre: string = "Pedro";
```

### 4. Number
Es un tipo de dato que permite guardar números.

```typescript
let precio: number = 1500;
```

### 5. Boolean
Es un tipo de dato que solamente puede tener dos valores: `true` o `false`.

```typescript
let activo: boolean = true;
```

### 6. Array
Es una lista que permite guardar varios elementos. Se puede indicar qué tipo de dato contiene.

```typescript
let edades: number[] = [18, 20, 25];
```

### 7. Unión
Es un tipo que permite que una variable pueda recibir más de un tipo de dato.

```typescript
let dato: string | number = "Hola";
```

### 8. Función
Es un bloque de código que realiza una tarea y puede devolver un resultado.

```typescript
function sumar(a: number, b: number): number {
    return a + b;
}
```

### 9. Interface
Es una estructura que permite definir las propiedades que debe tener un objeto.

```typescript
interface Persona {
    nombre: string;
    edad: number;
}
```

### 10. Type
Permite crear tipos de datos personalizados.

```typescript
type Rol = "ADMIN" | "USER";
```

### 11. Enum
Permite crear un conjunto de valores identificados por nombres.

```typescript
enum Estado {
    ACTIVO,
    INACTIVO
}
```

### 12. Tipo literal
Permite limitar una variable a valores específicos.

```typescript
type EstadoTarea = "ACTIVO" | "INACTIVO";
```

### 13. Parámetro opcional
Es un parámetro que puede omitirse al llamar a una función.

```typescript
function saludar(nombre: string, apellido?: string): void {
    console.log(nombre, apellido);
}
```

### 14. Compilador
Es una herramienta que transforma el código TypeScript en JavaScript.

```bash
npx tsc
```
