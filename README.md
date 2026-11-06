# Trabajo Práctico Integrador: Investigación en TypeScript

## Objetivo

Investigar los temas básicos de TypeScript, comprobarlos con ejemplos simples y explicar los conceptos con palabras propias.

## Requisitos

- Node.js y npm instalados.
- Un editor de código, por ejemplo Visual Studio Code.
- Git instalado.
- Una cuenta de GitHub para publicar el repositorio.

## Tema 1: ¿Qué es TypeScript?

### ¿Qué es TypeScript y quién lo desarrolla?

TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superset de JavaScript, osea que agrega algunas características sobre JavaScript, como los tipos de datos. Por eso, gran parte del código JavaScript también es válido en TypeScript.

### ¿Qué diferencias tiene con JavaScript?

La principal diferencia es que TypeScript permite indicar los tipos de datos de las variables, parámetros y funciones. En JavaScript no es obligatorio indicar esos tipos.

Además, TypeScript se compila a JavaScript para poder ejecutarse en los entornos que utilizan JavaScript.

### ¿Qué ventajas ofrece?

- Permite detectar algunos errores antes de ejecutar el programa.
- Ayuda a organizar el código.
- Permite saber qué tipo de dato recibe una variable o función.
- Mejora el autocompletado del editor.
- Es útil cuando los proyectos empiezan a crecer.

### ¿Cuál es su versión actual?

Las versiones de TypeScript se actualizan con el tiempo. Para saber cuál es la última versión estable al momento de entregar el trabajo, se puede consultar el paquete oficial en npm: https://www.npmjs.com/package/typescript. También se puede consultar la documentación oficial: https://www.typescriptlang.org/.

Para ver la versión instalada en este proyecto se puede ejecutar:

```bash
npx tsc --version
```

## Tema 2: Crear y ejecutar un proyecto

### ¿Cómo se instala TypeScript en un proyecto?

Primero se crea una carpeta para el proyecto y se inicializa npm:

```bash
npm init -y
```

Después se instala TypeScript como dependencia de desarrollo:

```bash
npm install -D typescript
```

Para poder ejecutar archivos TypeScript directamente, también instalamos tsx:

```bash
npm install -D tsx
```

### ¿Para qué sirve el archivo tsconfig.json?

Es un archivo de configuración de TypeScript. Sirve para indicar cómo se va a compilar el proyecto, por ejemplo dónde están los archivos, dónde se guardan los archivos JavaScript y qué opciones se van a utilizar.

### ¿Qué hace el comando tsc?

El comando `tsc` es el compilador de TypeScript. Revisa el código y genera archivos JavaScript a partir de los archivos TypeScript.

Para compilar el proyecto se utiliza:

```bash
npm run build
```

### ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?

- **tsc:** compila el código TypeScript y genera archivos JavaScript.
- **tsx:** permite ejecutar archivos TypeScript directamente, sin tener que generar primero los archivos JavaScript.
- **node:** ejecuta archivos JavaScript.

Por ejemplo, se puede compilar con `tsc` y después ejecutar el archivo generado con Node:

```bash
npm run build
node dist/03_tipos_basicos.js
```

También se puede ejecutar directamente con tsx:

```bash
npm run tema3
```

## Tema 3: Tipos básicos

### ¿Qué son los tipos string, number y boolean?

Son tipos de datos que permiten indicar qué valor puede guardar una variable.

- **string:** se utiliza para guardar textos.
- **number:** se utiliza para guardar números.
- **boolean:** se utiliza para guardar valores `true` o `false`.

Ejemplo:

```typescript
let nombre: string = "Jonathan";
let edad: number = 20;
let activo: boolean = true;
```

### ¿Cómo se declara un array con tipo?

Un array es una lista que permite guardar varios valores. En TypeScript podemos indicar qué tipo de datos va a contener.

Ejemplo:

```typescript
let nombres: string[] = ["Juan", "Pedro", "Lucas"];
let edades: number[] = [18, 20, 25];
```

### ¿Qué es un tipo unión?

Es un tipo que permite que una variable pueda tener más de un tipo de dato. Se utiliza el símbolo `|` para separar los tipos.

Ejemplo:

```typescript
let codigo: string | number;
codigo = "ABC123";
codigo = 123;
```

### ¿Por qué se recomienda evitar any?

Porque `any` permite guardar cualquier tipo de dato y desactiva el control de tipos para esa variable. Esto puede provocar errores y hace que se pierdan algunas de las ventajas de TypeScript.

## Tema 4: Funciones

### ¿Cómo se indican los tipos de los parámetros?

Se indica el nombre del parámetro seguido de dos puntos y el tipo de dato que va a recibir.

```typescript
function saludar(nombre: string): void {
    console.log("Hola " + nombre);
}
```

### ¿Cómo se indica el tipo de retorno?

Se colocan dos puntos después de los paréntesis de la función y se indica el tipo de dato que va a devolver.

```typescript
function sumar(a: number, b: number): number {
    return a + b;
}
```

### ¿Qué es un parámetro opcional?

Es un parámetro que no es obligatorio enviar cuando se llama a una función. Se indica utilizando el signo `?`.

```typescript
function saludar(nombre: string, apellido?: string): void {
    console.log("Hola", nombre, apellido);
}
```

### ¿Qué es un parámetro por defecto?

Es un parámetro que tiene un valor asignado desde la declaración de la función. Si no se envía otro valor, utiliza el que tiene por defecto.

```typescript
function mostrarEdad(edad: number = 18): void {
    console.log(edad);
}
```

## Tema 5: Interfaces y type

### ¿Qué es una interfaz y para qué sirve?

Una `interface` es una estructura que permite definir qué propiedades y tipos de datos debe tener un objeto. Sirve para mantener un orden y controlar que los objetos tengan las propiedades correspondientes.

```typescript
interface Usuario {
    nombre: string;
    edad: number;
}
```

### ¿Qué es un type?

Un `type` permite crear un tipo de dato personalizado. Se puede utilizar para definir objetos, uniones y otros tipos de datos.

```typescript
type Producto = {
    nombre: string;
    precio: number;
};
```

### ¿Cómo se declara una propiedad opcional?

Se utiliza el signo `?` después del nombre de la propiedad. Esto significa que puede estar presente o no.

```typescript
interface Usuario {
    nombre: string;
    edad?: number;
}
```

### ¿Cuándo conviene usar cada uno?

La `interface` se suele utilizar para definir la estructura de objetos. `type` es más flexible porque también permite crear uniones y otros tipos personalizados. Los dos sirven para definir tipos y se pueden utilizar según lo que necesitemos en el proyecto.

## Tema 6: Enums y tipos literales

### ¿Qué es un enum?

Un `enum` es una forma de crear un conjunto de valores con nombres. Sirve para trabajar con opciones que ya están definidas.

```typescript
enum Estado {
    ACTIVO,
    INACTIVO,
    PENDIENTE
}
```

### ¿Qué es un tipo literal?

Es un tipo que permite que una variable solamente pueda tener uno o varios valores específicos.

```typescript
type Rol = "ADMIN" | "USER";
```

### ¿En qué se parecen y en qué se diferencian?

Se parecen porque los dos permiten trabajar con un conjunto de valores definidos.

La diferencia es que `enum` crea una estructura con valores identificados por nombres, mientras que los tipos literales limitan directamente los valores que puede recibir una variable.

### ¿En qué situaciones se puede usar cada uno?

`enum` se puede utilizar cuando tenemos varios estados o categorías que queremos identificar por nombres.

Los tipos literales se pueden utilizar cuando queremos limitar una variable a determinadas opciones, por ejemplo los roles de un usuario o los estados de una tarea.

## Fuentes consultadas

- Documentación oficial de TypeScript: https://www.typescriptlang.org/docs/
- TypeScript Handbook: https://www.typescriptlang.org/docs/handbook/intro.html
- Instalación de TypeScript: https://www.typescriptlang.org/download/
- Paquete oficial de TypeScript en npm: https://www.npmjs.com/package/typescript

---

## Cómo instalar y ejecutar el proyecto

1. Abrir una terminal dentro de la carpeta del proyecto.
2. Instalar las dependencias:

```bash
npm install
```

3. Ejecutar cada ejemplo:

```bash
npm run tema1
npm run tema2
npm run tema3
npm run tema4
npm run tema5
npm run tema6
```

4. Para compilar todos los archivos:

```bash
npm run build
```

Los archivos JavaScript generados se guardan en la carpeta `dist`.

Para ejecutar un archivo compilado:

```bash
node dist/03_tipos_basicos.js
```

## Entrega mediante Git y GitHub

La consigna pide trabajar en la rama `develop` y después unirla con `main`.

Si todavía no inicializaste el repositorio, podés utilizar estos comandos desde la carpeta del proyecto:

```bash
git init
git branch -M main
git commit --allow-empty -m "Inicializar repositorio"
git switch -c develop
```

Después de crear o modificar cada archivo, realizar su commit. Por ejemplo:

```bash
git add README.md
git commit -m "Agregar investigacion de TypeScript"

git add src/01_typescript.ts
git commit -m "Agregar ejemplo de TypeScript"

git add src/02_proyecto.ts
git commit -m "Agregar ejemplo de proyecto"

git add src/03_tipos_basicos.ts
git commit -m "Agregar ejemplos de tipos basicos"

git add src/04_funciones.ts
git commit -m "Agregar ejemplos de funciones"

git add src/05_interfaces_type.ts
git commit -m "Agregar ejemplos de interfaces y type"

git add src/06_enums_literales.ts
git commit -m "Agregar ejemplos de enums y tipos literales"

git add GLOSARIO.md
git commit -m "Agregar glosario de TypeScript"

git add package.json tsconfig.json .gitignore
git commit -m "Agregar configuracion del proyecto"
```

Cuando esté terminado, volver a `main` y realizar el merge:

```bash
git switch main
git merge develop
```

Para subir las ramas a GitHub, primero crear un repositorio vacío en GitHub y luego ejecutar:

```bash
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
git push -u origin develop
```

Reemplazar `URL_DE_TU_REPOSITORIO` por la dirección real del repositorio.
