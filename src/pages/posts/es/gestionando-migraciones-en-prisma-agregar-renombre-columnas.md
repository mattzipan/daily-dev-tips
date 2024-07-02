---
layout: ../../layouts/Post.astro
title: 'Gestionando migraciones en Prisma (Agregar/Renombrar columnas)'
metaTitle: 'Gestionando migraciones en Prisma (Agregar/Renombrar columnas)'
metaDesc: 'Gestionando migraciones de base de datos en Prisma, eliminando y agregando columnas'
image: /images/15-01-2022.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - prisma
--- 

Las migraciones son una forma muy poderosa de realizar migraciones de esquema de base de datos. Esto te permitirá mantener tu base de datos sincronizada con los cambios que realices en tu esquema mientras conservas los datos existentes.

Ya hemos creado nuestra [primera migración](https://daily-dev-tips.com/posts/set-up-a-local-prisma-instance/), que fue la inicialización de la base de datos.

A partir de aquí, vamos a cambiar el esquema para ver qué sucede.

Si planeas seguir adelante, puedes encontrar el [repositorio en GitHub aquí](https://github.com/rebelchris/local-prisma/tree/part-1).

Abre el archivo `prisma/prisma.schema` y realiza los siguientes cambios en el esquema existente.

```js
// before
model Hobby {
  id      Int     @id @default(autoincrement())
  title   String  @db.VarChar(255)
  user    User    @relation(fields: [userId], references: [id])
  userId  Int
}
// after
model Hobby {
  id      Int     @id @default(autoincrement())
  name    String  @db.VarChar(255)
  rank    Int
  user    User    @relation(fields: [userId], references: [id])
  userId  Int
}
```

Como puedes ver, aquí sucedieron dos cosas:

1. La columna `title` cambió a `name`
2. Añadimos una columna `rank`

Luego podemos crear una nueva migración ejecutando el siguiente comando.

```bash
npx prisma migrate dev --name change_hobby_table
```

Sin embargo, pronto recibiremos un mensaje indicando que esto no es posible.

Esto se debe a que Prisma no maneja los renombres. Tiene sentido, ya que no puede identificar si hemos renombrado una columna o la hemos eliminado y añadido de nuevo.

Podemos ejecutar la migración con la bandera `-create-only` para resolver este caso de uso.

```bash
npx prisma migrate dev --name change_hobby_table --create-only
```

Esto creará un nuevo archivo de migración que puedes encontrar en: `prisma/migrations/{time}_change_hobby_table`.

Si abres este archivo, podrás ver el SQL generado.

```sql
-- AlterTable
ALTER TABLE "Hobby" DROP COLUMN "title",
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "rank" INTEGER;
```

Podemos corregir manualmente este SQL para satisfacer nuestra necesidad actual de renombrar la columna título.

```sql
-- AlterTable
ALTER TABLE "Hobby" RENAME COLUMN "title" TO "name";
ALTER TABLE "Hobby" ADD COLUMN "rank" INTEGER;
```

Podemos ejecutar la migración ejecutando el siguiente comando.

```bash
npx prisma migrate dev
```

Y una vez hecho esto, vamos a verificar nuestra base de datos para ver qué ha sucedido.

![Migración de base de datos en Prisma](https://cdn.hashnode.com/res/hashnode/image/upload/v1641364746131/2OV5VasrB.png)

Perfecto, nuestra columna `title` ahora se llama `name`, pero todavía conserva todos los datos.
Y hemos añadido una nueva columna, `rank`.

> Nota: Prisma tiene un elemento en su hoja de ruta para mejorar esta experiencia. Puedes seguir su progreso aquí: [Mejora de Prisma Migrate](https://www.notion.so/Improvement-to-Prisma-Migrate-for-better-handling-of-field-renames-9e46e2553419437684fbe41fe33369bc)

En cuanto al artículo de hoy, puedes encontrar los [ejemplos de código completos en GitHub](https://github.com/rebelchris/local-prisma/tree/part-2).

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
