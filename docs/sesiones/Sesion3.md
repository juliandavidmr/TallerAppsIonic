# Sesión 3

1. **Ionic CLI**
    - Crear proyecto: `ionic start MyApp --v2`.
    - Correr servidor de desarrollo: `ionic serve`.
3. **UI (Interfaz de Usuario)**
    - UI para listado:
      - `ngFor`
    - UI para Cards.
2. **Repaso Typescript.**


## Desarrollo

### **Listar:** Mostrar listado de elementos

Objeto tipo vector de cadenas con tres elementos. La variable `listado` se
crea dentro del componente de la pagina, p.ej: `about.ts`. [Ver más]().
```typescript
listado = ['Sesión 1', 'Sesión 2', 'Sesión 3']
```

El siguiente segmento de código se agrega dentro de las etiquetas `<ion-content>`. [Ver más]().
```html
<ion-list>
  <button ion-item *ngFor="let item of listado">
    {{ item }}
  </button>  
</ion-list>
```

Resultado

<img src="../recursos/giflistar1.gif"/>