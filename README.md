# Metodologías Ágiles 2022 - Grupo 1
## Teconologías
Este trabajo es un proyecto ReactJS que emplea NodeJS como intermediario para conectase a una base de datos MySQL. Cada servicio se encuentra dockerizado para un sencillo *start up* en cualquier entorno, sin que tenga instalado Node, MySQL o alguna otra dependencia.

## Negocio / idea planteada para desarrollar
Hay que elegir idea y definirla.

## Estructura del proyecto
El proyecto posee la siguiente estructura de directorios:
```
.
|____.gitignore
|____docker-compose.yml
|____README.md
|____client
| |____public
| | |____public files
| |____src
| | |____react aplication files
| |____.dockerignore
| |____Dockerfile
| |____package.json
| |____webpack.config.js
| |____yarn.lock
|____db
| |____Database init file
|____server
| |____.dockerignore
| |____Dockerfile
| |____index.js
| |____package-lock.json
| |____package.json
```

El directorio *client* es la parte React, generalmente se trabajará en *client/src*.

El directorio *db* contiene un script .sql para la inicialización de las tablas en la base de datos MySQL

El directorio *server* contiene la configuración del servidor NodeJS que hace de intermediario entre React y la base de datos.


## Entorno con Docker
Antes que nada, tener en cuenta que hay que estar parado en la raíz del proyecto para que los comandos de *docker-compose* que se verán a continuación funcionen.

### Contenedores/imágenes
Cada servicio del proyecto se encuentra dockerizado para una sencilla portabilidad. Los contenedores que se generan a partir de este proyecto son los siguientes:
 - react_mysql-container :
   <br />El servicio de base de datos. Utiliza la imagen por defecto [mysql:5.7](https://hub.docker.com/_/mysql). Se expone en el puerto 3306.
   
 - react_phpadmin_container :
   <br />Un servicio de interfaz web para operar con la base de datos. No es necesario pero sirve para revisiones rápidas. Utiliza la imagen por defecto [phpmyadmin/phpmyadmin](https://hub.docker.com/_/phpmyadmin). Se expone en el puerto 8080.
   
 - react_node_server_container:
   <br />El servidor NodeJS para la conexión entre React y MySQL. Se construye a partir del Dockerfile en *server/Dockerfile*. Se expone en el puerto 8000.
   
 - react_client_container:
   <br />La aplicación React en sí, es quien levanta la aplicación. Se construye a partir del Dockerfile en *client/Dockerfile*. Se expone en el puerto 3000.

### Iniciar aplicación
Se utiliza *docker-compose* para la orquestación de todos los contenedores. Para iniciar la aplicación, simplemente hay que clonar el código, ubicarse en la raíz y ejecutar el comando:
 - *docker-compose up -d*

Docker se encargará de levantar los 4 contenedores. Al finalizar, se podrá accer a la aplicaicón en http://localhost:3000/ y al panel de PHPMyAdmin en http://localhost:8080/

### Detener aplicación
Para detener los servicios, ejectuar:
 - *docker-compose down*

Lo cual detendrá y destruirá los contenedores.


### Verificar logs
Los logs que van arrojando los distintos servicios dockerizados pueden consultarse ejecutando:
 - *docker-compose down*


# Documentación fuente para el armado del entorno dockerizado
https://www.bogotobogo.com/DevOps/Docker/Docker-React-Node-MySQL-App.php
