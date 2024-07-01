---
layout: ../../layouts/Post.astro
title: 'Instalando PHP en tu Mac'
metaTitle: 'Instalando PHP en tu Mac - Daily Dev Tips'
metaDesc: "Instalar PHP en un Mac solía ser bastante tedioso, pero con Homebrew es muy fácil"
ogImage: /images/02-02-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/4e298140-eec6-4555-eea8-cdd2de55f700
date: 2024-07-01T00:00:00.000Z
modifiedDate: 2024-07-01T00:00:00.000Z
top: true
tags:
  - php
  - mac
---

¡Ayer compré una Mac nueva y noté que afirma que PHP será eliminado de las futuras versiones de Mac OS por defecto!

Estoy bastante sorprendido de que tomen este camino. Por defecto, viene con PHP 7.3, y necesitaba 7.4 para mi proyecto, ¡así que permíteme guiarte para configurar PHP en tu Mac!

La advertencia de Mac se ve así:

```
ADVERTENCIA: PHP no es recomendable
PHP está incluido en macOS para compatibilidad con software heredado.
Las futuras versiones de macOS no incluirán PHP.
```

Sin embargo, no te asustes. Es bastante fácil instalar PHP e incluso instalar múltiples versiones si lo deseas.

## Instalando Homebrew

Cuando se trata de instalar software en tu Mac, solo necesitamos un gestor de paquetes, y es Homebrew.

Puede instalar cualquier paquete o software que desees e incluso instalar versiones específicas.

Lee más en [Homebrew - Package manager for Mac](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

Guía rápida: Ejecuta el siguiente comando en tu terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Instalando PHP con Homebrew en Mac

Para instalar PHP, podemos ejecutar el siguiente comando:

```bash
brew install php
```

Esto instalará la última versión estable de PHP (En el momento de escribir esto, es PHP 8.0).

Antes de ejecutar cualquier comando de brew, es una buena práctica ejecutar los siguientes comandos primero. Estos verificarán si Homebrew está actualizado y ejecutando las últimas versiones.

```bash
brew update
brew doctor
```


### Instalando PHP 7.4 con Homebrew

En mi caso, quería instalar PHP 7.4 ya que es la versión que nuestro servidor está ejecutando.

Para instalar una versión específica, podemos usar la notación @.

```bash
brew install php@7.4
```

Esto ejecutará el instalador y debería terminar con un aviso de éxito en tu terminal.

Sin embargo, aunque esto instaló PHP, aún no cambió nuestra instancia en ejecución.

Así que si ejecutamos el comando `php -v`, aún podríamos ver una versión diferente como `PHP 7.3.14 (CLI)` o cualquier otra que tengas instalada.

Para solucionar esto, necesitamos vincular la versión correcta de PHP.

## Cambiando versiones de PHP con Homebrew en Mac

Ahora que hemos instalado versiones, podemos cambiar fácilmente entre ellas usando el comando `link`.

En primer lugar, compruebe qué versión de PHP se está ejecutando actualmente:

```bash
php -v

# PHP 8.0.1 (cli) (built: Jan  8 2021 01:27:28) ( NTS )
# Copyright (c) The PHP Group
```

Luego podemos desvincular esa versión usando:

```bash
brew unlink php@8.0
```

El siguiente paso es vincular la versión que queremos:

```bash
brew link php@7.4
```

Te dirá que ejecutes un script para agregar la ruta:

```bash
echo 'export PATH="/opt/homebrew/opt/php@7.4/bin:$PATH"' >> ~/.zshrc
```

Esto asegurará que se cargue la versión correcta de PHP, ahora si ejecutas `php -v` nuevamente debería mostrar:

```bash
# PHP 7.4.14 (cli) (built: Jan  8 2021 01:35:35) ( NTS )
# Copyright (c) The PHP Group
```

Y ahí lo tenemos. Hemos cambiado a la versión de PHP.

## Php -v sigue mostrando la versión incorrecta

Tuve el problema cuando actualicé de 7.4 a 8.0 para mi demostración de que seguía viendo 7.4 al ejecutar `php -v`. Elimina la línea antigua en tu archivo `.zshrc` para solucionar esto manualmente.

```bash
nano ~/.zshrc
```

Elimina la línea que apunta a tu instancia antigua de PHP.

```
export PATH="/opt/homebrew/opt/php@7.4/bin:$PATH"
```

> Nota: Este es un ejemplo de mi versión. Puede diferir de lo que instalaste antes.

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
