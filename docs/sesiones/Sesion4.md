# **Sesión 3: Interfaces**

> Recomendado. Leer [documentaciòn aquì](https://github.com/juliandavidmr/TallerAppsIonic/tree/master/docs).

# **Conceptos**

Las interfaces en Javascript **no** tienen ningùn impacto, pero son muy pontentes en Typescript ya que ayudan a declarar variables y definir estructuras.

> Las interfaces en typescript nos permiten crear contratos que otras clases deben firmar para poder utilizarlos, al igual que en otros lenguajes de programación como java o php, en typescript también podemos implementar más de una interfaz en la misma clase. _Tomado de [uno-de-piera.com](https://www.uno-de-piera.com/interfaces-en-typescript)_


# **Desarrollo**

> Crear interfaces y funciones para simulaciòn de envìo de mensajes.


- ### **Interface:** Interface mensaje

```ts
// home.ts

interface IMensaje {
  contenido: string | number
  fecha?: Date
}
```
Donde `|` ayuda a especificar multiples tipos de datos para un solo objeto, en ese caso `contenido` puede ser de tipo `string` o `number`. El simbolo de interrogaciòn `?` convierte una objeto en opcional, es decir, no es obligatorio usarlo. [Ver màs]()

Posteriormente, se crea un objeto que usa la interface creada anteriormente:

```ts
// home.ts

lista: IMensaje[] = []
```

El objeto `lista` es estrictamente una lista de objetos que contiene las reglas establecidas en la interface `IMensaje` (`contenido` y/o `fecha`).

A continuacion, se crea la funciòn `addMensaje` para apilar nuevos elementos tipo `IMensaje` en la `lista`:

```ts
// home.ts

addMensaje() {
    this.lista.push({
        contenido: this.texto,
        fecha: new Date()
    })
}
```

Donde [`texto`]() es una objeto rellenado automaticamente con la directiva `[(ngModel)]` del template. [Ver màs]().

**Template: Captura de texto**

```html
<!-- home.html -->

<ion-input type="text" placeholder="Escriba un mensaje" [(ngModel)]="texto"></ion-input>
```
[Ver màs]()


**Template: Detecciòn de evento click**

```html
<!-- home.html -->
<button ion-button full outline (click)="addMensaje()">Agregar</button>
```
[Ver màs]()


**Template: Mostrar listado de mensajes**

```html
<!-- home.html -->

<ion-list>
  <ion-item *ngFor="let item of lista">
    <h2>{{ item.contenido }}</h2>
    <p>{{ item.fecha }}</p>
  </ion-item>
</ion-list>
```
[Ver màs]()

### Màs información

- [Interfaces en typescript](https://www.uno-de-piera.com/interfaces-en-typescript/)
- []()