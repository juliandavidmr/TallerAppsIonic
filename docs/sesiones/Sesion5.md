# **Sesión 5**

> Desarrollar una aplicación de album de fotografías.

## **Desarrollo**


### **Instalando servidor**

Antes de ejecutar la aplicación, es necesario **instalar
un servicio REST**. Para esto, se deben realizar los
siguientes pasos: 

- Instalar la herramienta [json-server](https://github.com/typicode/json-server) para 
crear rapidamente servicios.

```bash
$ npm install -g json-server
```

- Descargar repositorio. Contiene el código necesario para
que `json-server` trabaje correctamente:

```bash
$ git clone https://github.com/juliandavidmr/API-Album.git
```

- Correr servicio:
```
$ cd API-Album
$ json-server --watch db.json
```
Despues de esto, `json-server` va a tomar el archivo `db.json` _(Ubicado en **API-Album**)_ para crear todo el servicio completo, de esta forma los metodos POST, GET, PUT, DELETE, y demás, estarán disponibles para su uso.

> Nota: Una vez creado el servidor, se debe dejar el proceso en ejecución, es decir, la terminal debe quedar abierta, si no desea depender de la terminal, puede probar [PM2](http://pm2.keymetrics.io)

Los tres pasos anteriores sirven tanto para equipos locales como para servidores. Es necesario obtener la **IP** del servidor o PC para asignarla posteriormente en [el provider de la aplicacion __*Aquí*__](https://github.com/juliandavidmr/TallerAppsIonic/blob/96727b31b1037e722228ef04096b264d0588f1f4/src/providers/fotos-api.ts#L14). Por otro lado, si optó por correr el servicio en un su equipo personal, puede hacer uso de la ruta `localhost`.

Obtener IP del PC:
```bash
# MS Windows
$ ipconfig

# GNU Linux
$ ifconfig
```

### **Correr aplicación**

```bash
# Entrar a la carpeta de tu proyecto de Ionic
$ cd TallerIonicApps

# Correr aplicación
$ ionic serve
```

> Nota: Si no dispone del código de la aplicación móvil, [puede encontrarla aquí](https://github.com/juliandavidmr/TallerAppsIonic/tree/96727b31b1037e722228ef04096b264d0588f1f4)