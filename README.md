
# Gestion de pedidos

Gestión de pedidos para un servicio de cafetería

  

## Iniciar proyecto

Para iniciar el proyecto tenemos que tener instalado node y angular-cli, ir a la carpeta gp-cliente y ejecutar los siguientes comandos:

  

	npm i 

	Una vez instalados los paquetes npm, ejecutaremos:
	
	npm run spring
	
	Y en otro terminal iniciaremos el proyecto de Angular:
	
	npm run start


## Proyecto API Rest con Spring Boot
En la carpeta /gestionpedidos podemos encontrar el proyecto de Spring Boot.

Si se quiere consultar la base de datos, una vez arrancado este proyecto podemos acceder a ella mediante la url http://localhost:8080/h2 y haciendo click en el boton 'connect'.

>En caso de que el campo JDBC URL no esté relleno utilizar jdbc:h2:mem:testdb

Para el manejo de los estado se ha aplicado el patron de diseño GoF de estado con algunas modificaciones.
* Se utiliza un Enum para gestionar los distintos estado haciendo uso de polimorfirmo y herencia
* Utilizamos una interfaz como estado base con las operaciones disponibles
* Cada estado específico implementa la interfaz mencionada anteriormente

[Referencia ejemplo del patrón utilizado](https://www.nurkiewicz.com/2009/09/state-pattern-introducing-domain-driven.html)

## Proyecto front-end Angular
En la carpeta /gp-cliente podemos encontrar el proyecto de Angular.

En el se ha utilizado una librería de estilos llamada [Bulma](https://bulma.io/)

Para acceder a los datos iniciales lo haremos con el siguiente usuario:
>email: admin@admin

>password: admin
