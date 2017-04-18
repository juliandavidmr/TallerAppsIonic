# Taller Apps Ionic

1. Para crear un proyecto de Ionic, necesitas instalar la
ultima version del CLI de Ionic y Cordova. Antes de esto, necesitas tener instalado la version mas reciente
de **NodeJS**. Descarga el instalador de NodeJS v6 o 
superior y procede con la instalación del Ionic CLI (Command Line Interface):

```bash
$ npm install -g ionic cordova
```

2. Podría necesitar añadir `sudo` en frente de estos
comandos para instalar la herramienta globalmente. Una vez hecho esto, crea tu primera aplicación Ionic:

```bash
$ ionic start TallerApp --v2
```
3. Omitir `–v2` si quieres usar Ionic v1. Para correr la app, entra al directorio que has creado y luego corre el comando `ionic serve` para probar el correcto funcionamiento desde el
navegador.

```bash
$ cd TallerApp
$ ionic serve
```