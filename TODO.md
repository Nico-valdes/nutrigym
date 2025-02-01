# To do

## General

+ [ ] Subir app al servidor de Innovo.
+ [ ] Conectarse a las API de los otros grupos.
+ [ ] Optimizar.
+ [ ] Actualizar documentación.
+ [ ] Arreglar EditEjercicio.


## Back
+ [x] Separar servicios de controladores.
+ [ ] Arreglar middlewares.
+ [x] Emitir tokens como seguridad en endpoints e inicio de sesión.


## Front

+ General:
	- [X] Corregir titulos de pestañas.
	- [X] Eliminar la página ClientPanel.
	- [ ] Llevar a string a todos los inputs que lo sean y truncar los que sean de tipo entero para evitar problemas en el back.
	- [ ] Agregar un px a todos los componentes para crear/editar cuando se está en dispositivos móviles.
	- [ ] Corregir el error entre los labels y los textarea.

+ Header:
	- [X] Linea 29 en el componente Header (buscar alternativa).
	- [x] Eliminar opcion de Panel de Administrador para cuando el usuario no sea un administrador y se encuentre en dispositivos móviles.
	- [x] Eliminar la opcion de ir al Panel de Cuenta cuando el usuario no es administrador y se encuentra en una PC (solo dejar opción para cerrar sesión).

+ Mi Plan:
	- [ ] Se hacen multiples llamadas a la API para traer el .pdf. (Realiza una llamada cada vez que se verifica la sesion).
	- [ ] Actualizar mail debajo de el aviso para iniciar sesión o registrarse.

+ Cuenta:
	- [ ] Corregir textos (Aparecen textos de productos, asistencia, etc).

+ Dietas:
	- [ ] Hacer responsive al mostrar el menú semanal.

+ Editar Usuario:
	- [x] Corregir el error que hace que no traiga bien el id del .pdf y se muestre preseleccionado en la ventana modal.

+ Editar Plan Alimenticio:
	- [ ] Se intentan crear relaciones entre las rutinas y los ejercicios al renderizar la página.

+ Editar Rutinas:
	- [ ] Se realizan muchas eliminaciones de relaciones.

+ Admin Panel:
	- [x] Corregir error que hace que cuando se esta en dispositivos movil, se renderiza el componente Options al abrir el menu del Header.
	- [x] Hacer responsive cuando se accede con una cuenta que no es de administrador.
	- [ ] Crear un apartado ABM para los planes y que permitan asociarlos a una cuenta en especifico.

+ Sobre Nosotros:
	- [ ] Hacer responsive.

+ Términos y condiciones de uso:
	- [ ] Hacer responsive.

+ Políticas de Privacidad:
	- [ ] Hacer responsive.

+ ModalElements (componente):
	- [ ] Hacer responsive la ventana modal.

+ ElementCard (componente):
	- [ ] Hacer responsive la distribución o tamaño de los botones de editar y eliminar.
	- [X] Centrar títulos en las pestañas de rutinas y planes alimenticios.

## Opcional:

+ General:
	- [ ] Pasar imagenes a formato .webp.
	- [ ] Eliminar el directorio PRUEBA-LOCAL.
	- [ ] Agregar apartado para reestablecer contraseña.
	- [X] Llevar todos los nombres de los directorios a un mismo formato (kebab-case).
	- [ ] Eliminar lineas de "console.log()" que muestren datos traidos de la API o información importante.

+ Header:
	- [ ] Embellecer el logout cuando se esta con una cuenta de cliente.

+ Rutinas:
	- [ ] Traer textos desde el back en lugar de en forma de mock.

+ Dietas:
	- [ ] Traer textos desde el back en lugar de en forma de mock.

+ Admin Panel:
	- [ ] Hacer paginación en la solicitud de elementos para reducir la carga al servidor.
	- [ ] Agregar una forma de emitir un mensaje cuando no se encuntren elementos.
	- [ ] Hacer que se actualicen los elementos con cada modificación del texto que se está ingresando.
	- [ ] Indicar cual fue la palabra buscada al mostrar los elementos.

+ Editar/Crear:
	- [ ] Agregar labels a todos los inputs.