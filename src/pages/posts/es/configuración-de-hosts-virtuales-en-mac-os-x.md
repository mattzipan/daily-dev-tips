---
layout: ../../layouts/Post.astro
title: 'Configuración de hosts virtuales en Mac OS X'
metaTitle: 'Configuración de hosts virtuales en Mac OS X'
metaDesc: 'Alojar un sitio web en tu Mac usando Hosts Virtuales'
image: /images/09-06-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - mac
---

¿Recuerdas los días de MAMP/XAMP/WAMP? Bueno, para Mac OS X, ya no necesitamos estas herramientas.

¡En realidad, es posible alojar un sitio web en tu Mac local, y no es tan difícil como piensas!

Hoy, configuraremos un sitio web local en PHP al que podremos acceder a través de nuestro navegador.

## Habilitando hosts virtuales en Mac OS X

El primer paso para que esto funcione es habilitar hosts virtuales en Mac OS X.

Para hacer esto, necesitamos modificar el archivo `httpd.conf`. Ejecuta el siguiente comando en tu terminal.

```bash
sudo nano /etc/apache2/httpd.conf
```

Busca la siguiente línea:

```bash
#Include /private/etc/apache2/extra/httpd-vhosts.conf
```

Y debajo de eso, en una nueva línea agrega lo siguiente:

```bash
Include /private/etc/apache2/vhosts/*.conf
```

Esto le dice a Apache que cargue todos los archivos `.conf` en este directorio.

> Nota: También podrías agregar todos los hosts en el archivo `httpd-vhost`, pero encontré que este es un método más limpio.

Ahora necesitamos crear los archivos de configuración, asegúrate de que el directorio exista o créalo.

```bash
mkdir /etc/apache2/vhosts
```

Ahora podemos crear nuestra primera configuración en esa carpeta.

```bash
sudo nano /etc/apache2/vhosts/daily-dev-tips.conf
```

Coloca la siguiente información dentro:

```apache
<VirtualHost *:80>
    DocumentRoot "/Users/chrisbongers/www/daily-dev-tips"
    ServerName daily-dev-tips.local

    <Directory "/Users/chrisbongers/www/daily-dev-tips">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Debes configurar el DocumentRoot a tu propio directorio en tu máquina local. Para mí, es una carpeta www a nivel de usuario.
Luego, establece el ServerName a la URL en la que quieres servirlo.

Ahora necesitamos reiniciar Apache.

```bash
sudo apachectl restart
```

Sin embargo, si ahora visitamos: `http://daily-dev-tips.local` no veremos nada...

## Mapeando el dominio local

Para hacer que el dominio local funcione, necesitamos mapear el dominio a nuestro servidor local.

Modifica tu archivo host.

```bash
sudo nano /etc/hosts
```

Y agrega una línea como esta:

```
127.0.0.1       daily-dev-tips.local
```

Asegúrate de usar el dominio que configuraste en el archivo vhost.

## Probando nuestro sitio web

Si abres el enlace de tu sitio web, otra aplicación podría apuntar a la página predeterminada, dependiendo de si ya configuraste la carpeta.

Yo no lo hice, así que crea la carpeta en el lugar que proporcionaste en el archivo vhost y crea un simple index.php dentro.

```php
<?php
echo 'Hola mundo desde mi propio servidor Mac OS X';
?>
```

Ahora abre el sitio web nuevamente y ve la belleza de tu servidor.

![Servidor de host virtual en Mac OS X](https://cdn.hashnode.com/res/hashnode/image/upload/v1622892784431/zqB_N0Csw.png)

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
