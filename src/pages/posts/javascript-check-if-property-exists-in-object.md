---
layout: ../../layouts/Post.astro
title: '3 Ways to Check a if Property exists in a JS Object'
metaTitle: '3 Ways to Check if Property exists in JS Object [2024]'
metaDesc: 'Step-by-step guide on checking for property existence in JS objects, featuring practical examples with console.log and exploring key-value relationships.'
ogImage: /images/05-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e3a59344-1667-4edf-9366-e60fb3ae5900
date: 2022-07-05T03:00:00.000Z
modifiedDate: 2024-02-06T03:00:00.000Z
tags:
  - javascript
---

In **JavaScript**, some day you may need to **check if a property exists in an object**.

Let's learn how to do this with below **example**.

## How to check if property exists in object?

Let's say, we have a JS object for users with an optional property for email. 

If the email **key** has no **value**, we want to show a form for the user to then add the email.

```js
const userOne = {
  name: 'Chris Bongers',
  email: 'info@daily-dev-tips.com',
};

const userTwo = {
  name: 'John Do',
};
```

There are several ways to check if a certain key has a value.

Let's take a look at the three most common methods.

### 1. Use hasOwnProperty to see if an object has a property

By using the `hasOwnProperty` method, we can evaluate if an object has a property.

Let's see how it would work with our example data and `console.log` the result:

```js
console.log(userOne.hasOwnProperty('email'));
// Returns: true

console.log(userTwo.hasOwnProperty('email'));
// Returns: false
```

That is perfect. But there is a catch to using this method: This only works for `Own` properties, not extended object properties.

As you may know, objects come with the `toString` method, and if we try to check if that exists, it will return false (though it does exist)

```js
console.log(userOne.toString());
// Returns: [object Object]

console.log(userOne.hasOwnProperty('toString'));
// Returns false
```
So this brings us to the next method:

### 2. Using "in" operator to check for property existence

Another more explicit way of checking if an object holds a property is using `in`.

This solution can check the **owned and inherited properties**.

```js
console.log('email' in userOne);
// Returns: true

console.log('email' in userTwo);
// Returns: false

console.log('toString' in userOne);
// Returns: true
```

### 3. Using undefined to check for property in obj

The last method is to use an `undefined` check. 

This solution will work for **omitted properties** but can cause you headaches if the property exists but has an undefined value.

```js
console.log(userOne.email !== undefined);
// Returns: true

console.log(userTwo.email !== undefined);
// Returns: false

console.log(userOne.toString !== undefined);
// Returns: true
```

Now let's see what happens in the following example:

```js
const userThree = {
  name: 'Steve Stevenson',
  email: undefined,
};

console.log(userThree.email !== undefined);
// Returns: false
```

The check is acceptable, because the property exists - but be aware of this behaviour.

## Conclusion

When trying to find out if an object holds a particular property, we need to consider how **safe** we want the **check** to be.

I would generally not recommend using the 3rd method, the `undefined` check.

If you only evaluate `Own` properties, the `hasOwnProperty` is the solid solution.

But you might want to be on the safe side and use the `in` check to determine if an object has a property - owned or inherited.

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
