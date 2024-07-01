---
layout: ../../layouts/Post.astro
title: 'Angular agregando un token a cada solicitud API'
metaTitle: 'Angular agregando un token a cada solicitud API'
metaDesc: 'Agregar automáticamente un token a cada solicitud API'
image: /images/25-10-2020.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - angular
---

Normalmente, cuando hacemos solicitudes API, necesitamos algún token para validar nuestra solicitud.

En nuestro caso, acabamos de aprender [cómo iniciar sesión como usuario](https://daily-dev-tips.com/posts/angular-authenticating-users-from-an-api/) y aseguramos que [las rutas estén protegidas](https://daily-dev-tips.com/posts/protecting-routes-in-angular/).

Entonces, desde aquí, ¿cómo podemos manipular las llamadas API para incluir siempre el token que almacenamos en nuestro objeto de usuario?

No queremos agregar un encabezado a cada llamada de objeto de esta manera.

```js
const headers = new Headers({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${auth_token}`,
});
return this.http.get(apiUrl, { headers: headers });
```

No me malinterpretes. Esto funcionará, pero se está repitiendo, ¡así que vamos a crear un interceptor que haga esto por nosotros!

## Creando nuestro interceptor

Como de costumbre, abramos la terminal y encontremos nuestra carpeta de proyecto.
Ahora ejecuta el siguiente comando para generar nuestro interceptor de token.

```bash
ng generate service interceptors/TokenInterceptor
```

Esto creará un archivo `token-interceptor.service.ts` en nuestra carpeta de interceptores.

```js
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { token } = this.authService.userValue;
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authService.logout();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
```

Entonces, registramos el authService como un proveedor en nuestro servicio.
Luego implementamos el `HttpInterceptor` del cual extenderemos la función `intercept`.

Esta función intercept tiene un objeto de solicitud y un objeto next.

Lo que hacemos es obtener el token de nuestro objeto de usuario.
Si esto está configurado, clonamos la solicitud que se está haciendo y añadimos un encabezado.

En este caso, añadimos un token `Bearer` con el token actual adjunto (sí, sé que este no es un token oAuth)

Luego devolvemos la solicitud y capturamos si recibimos un 401 (no autorizado) de vuelta.

Si ese es el caso, cerramos la sesión del usuario actual ya que nuestro token ha expirado y lanzamos un error de vuelta.

## Implementando el interceptor

Así que ahora tenemos que asegurarnos de que todas nuestras llamadas estén registradas con este interceptor.

Abre tu `app.module.ts`, y añade lo siguiente en la sección de proveedores.

```js
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
],
```

Esto le dice a Angular que hemos creado nuestro propio `HTTP_INTERCEPTOR` y de qué servicio debe cargarlo.

## Probando nuestro interceptor

Hagamos una demostración rápida para ver si funciona.

Abre el `home.component.ts` y haz que se vea así:

```js
export class HomeComponent implements OnInit{
  currentUser: User;
  constructor(private authenticationService: AuthService, private http: HttpClient
) {
  this.authenticationService.user.subscribe(user => this.currentUser = user);
 }
 ngOnInit() {
   this.getUsers().subscribe(result => {
     console.log(result);
   })
 }
 getUsers() {
  return this.http.get<any>(`${environment.apiUrl}api/users`);
 }
}
```

Solo estamos haciendo una simple llamada API en el componente para comprobar si nuestro interceptor está funcionando.

Ahora, si abres la pestaña de red en tu consola, ¡deberías ver la siguiente solicitud!

![Angular Custom header](https://cdn.hashnode.com/res/hashnode/image/upload/v1603087803536/IvN8wybLr.png)

Ahí lo tienes, ahora hemos añadido nuestro encabezado personalizado, y se añadirá a cada una de nuestras llamadas.

También puedes encontrar este código en [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/feature/token).

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
