---
layout: ../../layouts/Post.astro
title: 'TypeScript Utility Types: Partial & Required'
metaTitle: 'TypeScript Utility Types: Partial & Required [2024]'
metaDesc: 'Dive into TypeScript utility types with a focus on Partial and Required. See how they manage field requirements to streamline your coding process.'
image: /images/19-02-2022.jpg
date: 2022-02-19T03:00:00.000Z
modifiedDate: 2024-02-10T03:00:00.000Z
tags:
  - javascript
  - typescript
---

TypeScript comes with several **utility types**. These are utilities we can use to do **type transformations**.

So, this tutorial will look at the `Partial` and `Required` types.

To give you a bit of context: You might have written an **interface** or **type** that reflects a user object, but in some cases, you want to use only **specific fields** or change which fields are **required** for the interface.

And that's precisely where **utility types** come in handy. And there's a whole set of utility types in Typescript!

So, I'll be going through the most commonly used ones: **Partial** and **Required**.

## TypeScript Utility Type: Partial

Let's look at the **partial type** and take the following example interface to work with:

```js
interface User {
  firstname: string;
  lastname?: string;
  age: number;
}
```

As you can see, we made two fields required: 
- `firstname` 
- `age`

The `lastname` field is optional because we added the `?`.

So what happens if we have an update where we allow all of the fields to be optional and valid?

This could be if we had a UI where each field would auto-update without knowing the other fields.

I'll call our function for this `updateUserField`, which would accept any user fields and use the `Partial`:

```js
const updateUserField = (id: number, fieldsToUpdate: Partial<User>) => {
  return db.update(id, fieldsToUpdate);
};
```
The partial utility type makes all properties of the interface `User` **optional**.

This allows the `updateUserField` function to accept an object with any combination of user fields for updating.

And we can now also use the **partial utility** to **update each field individually** without needing the other fields to be set:

```js
updateUserField(1, {
  firstname: 'Chris',
});

updateUserField(1, {
  age: 32,
});
```

This is now a **valid Typescript code**. 

If you remove the `Partial` utility again, you will see it throws some TypeScript errors about the **missing fields**:

![TypeScript missing fields error](https://cdn.hashnode.com/res/hashnode/image/upload/v1644471472591/gFt2W94iA.png)

## TypeScript Required utility type

In another scenario, there might be cases where you expect the value to be set.

Let's look at our user example again.

By default, you might have an object where the ID is not required since we don't know it yet, but once the user is created, we could set it to be required.

So, we can use this `User` interface without specifying the ID when creating the user.

```js
interface User {
  id?: number;
  firstname: string;
  lastname: string;
}
```
But when we want to update the user, we want to ensure the ID is set.

So let's use the **required utility** for that:

```js
const updateUser = (user: Required<User>) => {
  db.update(user);
};

updateUser({
  id: 12,
  firstname: 'Chris',
  lastname: 'Bongers',
});
```

Because of the `Required` type, every field in the `User` interface is now required.

A cool thing with **TypeScript utility types** is that you can also mix and match them.

So, in a another tutorial, I'll teach you how to make specific fields required or optional by [combining utility types](https://daily-dev-tips.com/posts/combining-typescript-utility-types/).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
