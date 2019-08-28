# SERVICIO ARKIX EN NODEJS

_El servicio corresponde al proyecto de ingreso de la empresa arkix el cual consta de un registro de usuario y posterior logeo para poder realizar las tarea de registro de un post con los siguientes atributos Titulo, Contenido, fecha de creacion,imagen y el autor del mismo seguido de una serie de consultas y eliminacion_

## Comenzando 🚀

_Descarga el repositorio para llevar acabo pruebas de forma local de querer realizar pruebas en produccion visitar la siguiente URL._

###Instalación 🔧 y Pre-requisitos 📋

_De realizar las pruebas en su local debera tener en cuenta que es necesario tener instalado mongoDB para la persistencia de los datos una vez instalado asegurece de tener la cadena de conexion ubicada en el archivo config/config.js bien configura y a preferencia como entorno para gestion de APIS usar POSTMAN_

```
mongodb://localhost:27017/newsArkix
```

_Realizar el comando {npm install} para bajar las dependencias correspondientes al proyecto_



## Para realizar las pruebas de forma local ⚙️

_Debera hacer uso de las siguientes URL recuerde que el puerto es configurable {archivo config/config.js} y de ser modificado las URL  tambien deben cambiar de hacer la pruebas en produccion por favor visitar la siguiente URL:_


```
Metodo POST registro de usuarios: http://localhost:3500/usuario 

Metodo POST login para usuarios: http://localhost:3500/login

Metodo POST registro de Post: http://localhost:3500/postNews

Metodo GET consulta de Post: http://localhost:3500/postNewsUsuario

Metodo DELETE eliminacion del Post: http://localhost:3500/postNews/:id

Metodo GET  filtrar post por contenido  http://localhost:3500/postNewsFilter/:argumento

```


## Expresiones de Gratitud 🎁

* Estare atento a sus comentarios 📢
* Muchas gracias por su tiempo y espero les agrade mi trabajo 🤓.



---
⌨️ con ❤️ por [Harold montejo](https://github.com/HOMH9797) 😊
