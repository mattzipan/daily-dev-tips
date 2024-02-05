---
layout: ../../layouts/Post.astro
title: 'How to perform non-updating upserts in Prisma'
metaTitle: 'Non-updating Upserts in Prisma [2024]'
metaDesc: "Master Prisma's upsert for databases: Create or update without ID - ideal for API queries and filters."
image: /images/28-10-2021.jpg
date: 2021-10-28T03:00:00.000Z
modifiedDate: 2024-02-05T03:00:00.000Z
tags:
  - prisma
---

In our example yesterday, we were [adding playlist data to our Postgres database](https://daily-dev-tips.com/posts/nextjs-posting-data-to-postgres-through-prisma/).

If we were to add a playlist twice, however, we would notice that the URI is not unique any more and a record with such a URI already exists.
## What is an upsert
Typically we could handle this with an <a href="https://www.prisma.io/docs/orm/prisma-client/queries/crud#update-or-create-records" target="_blank">upsert</a> operation. 

An "upsert" in Prisma is a combination of "update" and "insert". 👀

An upsert allows us to **update** an existing record if it's found, or **insert** a new record if it's not found, based on a **unique identifier**, such as the playlist URI in our example. 

But for this example, I want to do a **non-updating upsert**. 

### Non-updating upsert
The goal is to **create a new record if it does not exist** already, without updating any existing records if they do exist.

Essentially, it's an "insert if not exists" operation without the update part.

For our scenario this means we check if the URI already exists and then we act as if we perform an update.

If there is not record with the URI, we perform the creation.

Important: The caveat here is that we push an empty update object, which will result in the API returning the old existing object without updating it.

## How to upsert in Prisma

You can use the `upsert` command to perform an upsert query in Prisma.

The Prisma **upsert command** takes a where-query. 

**Where-queries** should query a **unique** field in the DB. Here we **upsert without an ID** per se, because the URI is good enough as an identifier.

The **Prisma upsert command** comes with both the update and creates functions, like so:

```js
const playlist = await prisma.playlist.upsert({
  where: {
    uri: uri,
  },
  update: {},
  create: playlistItem,
});
```

And there you go. This gives us a super good solution to **create records if not already existent**.

You can find the complete **Prisma example** based on the Spotify database on [GitHub](https://github.com/rebelchris/next-spotify-login/tree/upsert-data).

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
