---
layout: ../../layouts/Post.astro
title: 'Modales de Ionic: pasando y recibiendo datos'
metaTitle: 'Modales de Ionic: pasando y recibiendo datos'
metaDesc: 'Cómo pasar y recibir datos desde los modales en Ionic'
image: /images/04-03-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - ionic
---

Ayer hicimos un [modal en Ionic](https://daily-dev-tips.com/posts/adding-modals-to-an-ionic-app/), los modales son realmente geniales, pero generalmente queremos pasar o recibir datos de ellos.

Eso es lo que haremos hoy, un modal que pasa, modifica y devuelve datos.

El resultado de hoy se verá algo así:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/io-data_scsedq.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/io-data_ap7ngf.mp4" type="video/mp4" />
</video>

## Pasar datos a un modal en Ionic

Primero, comencemos pasando datos a nuestro modal. Esto es tan simple como llamar a `componentProps` en nuestra función de creación de modalController.

```js
number: number = 3;

const modal = await this.modalController.create({
  component: DetailPage,
  componentProps: {
    number: this.number,
  },
});
```

Luego, en el `DetailPage`, podemos recuperar estos valores definiéndolos dentro de nuestro componente.

```js
export class DetailPage implements OnInit {
  number: number;

  ngOnInit() {
    console.log(this.number);
  }
}
```

Así de fácil es pasar datos a nuestro componente modal.

## Descartar el modal de Ionic y recibir datos

Por supuesto, también queremos poder recibir estos datos de vuelta en nuestro componente principal (`tab1.page.ts`).

Antes de devolver los datos, agreguemos una función que pueda modificar el número por nosotros.

En nuestro `detail.page.html`, añadimos el siguiente marcado:

```html
<ion-item>
  <ion-icon name="remove-circle" (click)="sub()" item-right></ion-icon>
  <ion-input
    type="number"
    min="1"
    class="ion-text-center"
    [value]="number"
    [(ngModel)]="number"
  ></ion-input>
  <ion-icon name="add-circle" (click)="plus()" item-right></ion-icon>
</ion-item>
```

Ahora agreguemos las funciones `plus` y `sub` en el archivo `detail.page.ts`:

```js
plus() {
  this.number++;
}

sub() {
  this.number--;
}
```

Esto modificará nuestro número, pero aún necesitamos pasarlo de vuelta a nuestro `tab1.page` inicial. Para eso, necesitamos alterar la función `dismiss`.

```js
dismiss() {
  this.modalController.dismiss({
    number: this.number,
  });
}
```

Esto enviará el número como la variable `number`.

En nuestro `tab1.page.ts` podemos recibir esto, agregando un callback `onDidDismiss` en la función `presentModal`:

```js
modal.onDidDismiss().then((data) => {
  this.number = data.data.number;
});
```

Esto recibirá los datos y actualizará el número.
Luego, la próxima vez que abramos el modal, el nuevo número se reflejará.

Y ahí lo tienes, pasar y recibir datos en los modales de Ionic.

Puedes encontrar el código de hoy en [GitHub](https://github.com/rebelchris/ionic-app/tree/modal-data).

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
