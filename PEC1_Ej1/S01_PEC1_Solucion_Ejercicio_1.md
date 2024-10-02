# 1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno.

## a. ¿Cuál es la ventaja del uso de etiquetas semánticas?

El uso de etiquetas semánticas en HTML tiene varias ventajas importantes:

### Ventajas:
1. **Mejora de la accesibilidad**:
   Las etiquetas semánticas (como `<header>`, `<article>`, `<section>`, y `<footer>`) proporcionan una estructura clara al contenido. Esto facilita a las tecnologías de asistencia, como los lectores de pantalla, comprender mejor la jerarquía y organización del sitio.

2. **Mejor SEO**:
   Los motores de búsqueda utilizan las etiquetas semánticas para entender mejor el contenido de la página. Por ejemplo, `<nav>` indica un bloque de enlaces de navegación, lo que ayuda a mejorar el posicionamiento en buscadores.

3. **Mantenimiento y legibilidad del código**:
   El uso de etiquetas semánticas hace que el código sea más fácil de leer y mantener. Utilizar elementos específicos como `<main>` o `<nav>` mejora la claridad en comparación con el uso de `<div>` genéricos.

## b. Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.

### APIs HTML5:

1. **Canvas API**:
   Permite dibujar gráficos en 2D y 3D directamente en el navegador usando JavaScript. Es útil para crear juegos, gráficos interactivos o renderizado de imágenes dinámicas. La etiqueta `<canvas>` se usa para definir el área donde se "dibujará2.

2. **AJAX (Asynchronous JavaScript and XML)**:
   AJAX permite la comunicación con el servidor de forma asíncrona, permitiendo actualizar partes específicas de la página sin necesidad de recargar todo el contenido. Es genial para cargar datos dinámicos eficientemente.
   
3. **Web Storage API**: 
    Proporciona un mecanismo para almacenar datos localmente en el navegador a través de localStorage y sessionStorage, sin utilizar cookies. Esto mejora el rendimiento y la capacidad de almacenamiento.

## c. Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla). 

Media Queries: CSS3 introduce las media queries, que permiten aplicar diferentes estilos CSS en función de las características del dispositivo, como el tamaño de pantalla, la orientación o la resolución. Esto es fundamental para el diseño web responsivo, adaptando el diseño a distintos dispositivos, desde teléfonos móviles hasta monitores grandes.

## d. Cita al menos 4 de las características principales de TypeScript (importante  superset de JavaScript que trataremos en el siguiente capítulo). 

1. **Tipado estático**: TypeScript agrega un sistema de tipos opcional a JavaScript, lo que permite definir los tipos de variables, parámetros y retornos de funciones, lo que ayuda a detectar errores en tiempo de compilación en lugar de en tiempo de ejecución.

2. **Interfaces y tipos personalizados**: Permite la creación de interfaces y tipos personalizados para definir las estructuras de datos de forma más precisa, lo que mejora la mantenibilidad del código y previene errores relacionados con la estructura de los objetos.

3. **Soporte para las últimas características de JavaScript**: TypeScript incluye soporte para las últimas características de ECMAScript (como async/await, clases, módulos, etc.), pero con retrocompatibilidad, permitiendo que el código se compile en JavaScript que puede ejecutarse en cualquier navegador.

4. **Manejo avanzado de tipos**: TypeScript soporta características como tipos de unión, intersección de tipos y generics, lo que permite escribir código más flexible y reutilizable sin perder el control sobre los tipos.


# 2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas

## a. Cita al menos 2 de estos preprocesadores.

1. **Sass (Syntactically Awesome Stylesheets)**: Es uno de los preprocesadores CSS más populares que permite el uso de variables, anidación, mixins, y funciones para hacer el código más modular y fácil de mantener.

2. **Less**: Otro preprocesador CSS que ofrece características similares a Sass, como variables, funciones y mixins. Es especialmente popular en proyectos que usan Bootstrap, ya que las primeras versiones del framework estaban basadas en Less.

## b. Cita al menos 4 ventajas que ofrecen estos preprocesadores.

1. **Variables**:
   Permiten almacenar valores reutilizables, como colores o tamaños, lo que facilita la modificación del estilo en todo el proyecto desde un solo lugar.


2. **Anidación**: 
   Los preprocesadores permiten anidar selectores dentro de otros, reflejando la estructura del HTML y haciendo que el código CSS sea más legible y estructurado.

3. **Mixins**:
   Permiten reutilizar fragmentos de código CSS en diferentes partes del proyecto, lo que facilita la mantenimiento y la adaptabilidad del código.

4. **Compatibilidad con navegadores antiguos**:
   Los preprocesadores CSS ofrecen compatibilidad con navegadores antiguos, lo que permite que el código se ejecute en navegadores más antiguos y proporcione una experiencia de usuario más agradable.


## c. Explica brevemente en qué consisten los sourcemaps. 

Aunque el navegador esté interpretando el CSS compilado, con los sourcemaps puedes identificar y corregir problemas en el código fuente del preprocesador.

## d. Explica qué es un transpilador. 

Un transpilador es una herramienta que convierte código fuente escrito en un lenguaje de programación a otro lenguaje de nivel similar. En el caso de los preprocesadores CSS, un transpilador convierte el código Sass o Less en CSS normal.

En el ámbito de JavaScript, transpiladores como Babel convierten código moderno a una versión más antigua de JavaScript para garantizar la compatibilidad con navegadores más antiguos.


# 3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos). 

## a. Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos. 
### Sistemas de control de versiones:
1. **Git**: Es el sistema de control de versiones distribuido más popular y ampliamente utilizado en el desarrollo de software. Permite realizar un seguimiento de los cambios en el código, coordinar el trabajo entre varios desarrolladores y gestionar el historial del proyecto.

2. **Subversion (SVN)**: Es otro sistema de control de versiones centralizado. A diferencia de Git, donde cada desarrollador tiene una copia completa del repositorio, en SVN todos los cambios se gestionan en un servidor central.

### Herramientas de gestión de módulos:
1. **npm (Node Package Manager)**: Es el gestor de paquetes por defecto para Node.js. Permite instalar, compartir y gestionar dependencias del proyecto. Utiliza un archivo llamado `package.json` para listar las dependencias del proyecto.

2. **Yarn**: Es otro gestor de paquetes que es compatible con npm. Fue desarrollado por Facebook con el objetivo de mejorar la velocidad y fiabilidad en la instalación de dependencias. También utiliza el archivo `package.json`.

## b. Cita y explica al menos 3 comandos de Git.

1. **git init**:
   Este comando inicializa un nuevo repositorio de Git en el directorio actual. Crea una carpeta `.git` donde se almacenan todos los datos necesarios para el control de versiones.
2. **git add**:
   Este comando agrega los cambios en el directorio actual al área de preparación del repositorio. Los cambios se pueden agregar individualmente o en conjunto con la opción `-A`.
3. **git commit**:
   Crea un nuevo commit en el repositorio, que representa los cambios que se han realizado en el directorio actual. El commit se asocia con un mensaje que describe brevemente los cambios realizados.

## c. Cita y explica brevemente las características más definitorias de WebPack.

1. **Bundling**: Empaqueta múltiples archivos (JavaScript, CSS, imágenes, etc.) en uno o varios archivos optimizados para su carga.

2. **Loaders**: Permiten que Webpack procese diferentes tipos de archivos (CSS, imágenes, Sass) y los convierta en módulos válidos.

3. **Plugins**: Extienden las capacidades de Webpack realizando tareas avanzadas como la optimización y minificación de código.

4. **Code Splitting**: Divide el código en fragmentos para cargar solo lo necesario, mejorando el rendimiento de la aplicación.
