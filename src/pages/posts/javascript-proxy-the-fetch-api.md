---
layout: ../../layouts/Post.astro
title: 'JavaScript Proxy the Fetch API'
metaTitle: 'JS Proxy with Fetch API [2024]'
metaDesc: "JavaScript Proxy Object tutorial: Learn to use proxy for Fetch API in JS apps for enhanced functionality."
ogImage: /images/11-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/f86f933c-9854-4eea-ccd3-33f46bbebe00
date: 2022-07-11T03:00:00.000Z
modifiedDate: 2024-02-02T03:00:00.000Z
tags:
  - javascript
---

If you go on and google search for **JavaScript Proxy**, you'll see many articles explaining the core concepts.

But there is one powerful thing almost nobody tells you about:

You can use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">Proxy object</a> to overwrite existing APIs!

It can extend any object, array, or function, so it is logical. 

So let me explain the solution by a real-world example in which I used the Proxy object.

## How to extend the JavaScript Fetch API with a Proxy

You have heard of the [Fetch API](https://daily-dev-tips.com/posts/fetch-api-in-vanilla-javascript/) - a native wrapper to efficiently perform requests to URLs.

Let's say our app has a file that handles all API calls, and they all use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">Fetch API</a>.

As an example, let's say we have the following class *TodoAPI* to handle API calls for todos:

```js
class TodoAPI {
  getTodos = async () =>
    await fetch('https://jsonplaceholder.typicode.com/todos');
  getTodo = async (id: number) =>
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}
```

Now to use it, we can use the following code.

```js
const API = new TodoAPI();

(async () => {
  await API.getTodos()
    .then((data) => data.json())
    .then((res) => console.log(res));
  console.log('Fetching single TODO');
  await API.getTodo(3)
    .then((data) => data.json())
    .then((res) => console.log(res));
})();
```

Nothing crazy yet. We can call our API middleware which uses the **fetch request**.

This code works perfectly on our website, but when introducing it to a Chrome extension, we quickly notice we can't directly use the JS fetch API due to **CORS** issues with the browser. The browser blocks the requests as we inject the JS code on different websites.

We should still accept all the Fetch API request data but rather send it via a background **service worker**.

So, another idea is to create a new function that mimics the Fetch API - which could work.

But what happens when the Fetch API changes props?

A better way to tackle the problem is is to leverage the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">Proxy object</a> in JavaScript!

Yes, we can **proxy the Fetch API**.

In a super simple example, the code would look like this:

```js
(async () => {
  const fetchHandler = {
    apply(target, thisArg, args) {
      console.log(args);
    },
  };

  const proxiedFetch = new Proxy(fetch, fetchHandler);

  await proxiedFetch('https://jsonplaceholder.typicode.com/todos/3')
    .then((data) => data.json())
    .then((res) => console.log(res));
})();
```

Let's see what's going on here:
- We create a **proxy handler** that accesses the apply trap.
- Then instead of performing the API request, we log the arguments.
- We then **proxy the fetch function** and apply our handlers.
- Finally, we can use the code as proxied standard Fetch API!

The cool part about this, is that all the Fetch arguments stay the same, so there is no need to change any existing implementation formats.

Now, let's move this into our function so we can switch between regular **fetch API** and **proxied fetch**!

### JavaScript Fetch API Proxy

We first have to introduce a **constructor** in our class that will define which method of fetching we should use.

```js
constructor(fetchMethod = (...args) => fetch(...args)) {
	this.fetchMethod = fetchMethod;
}
```

The function will set the fetch method with all its arguments. By default, we set it to be `fetch`.

Then we can modify our existing calls to use the preferred fetch method.

```js
getTodos = async () =>
  await this.fetchMethod('https://jsonplaceholder.typicode.com/todos');
```

As you can see, not much has changed. We moved `fetch.` to `this.fetchMethod.` and all our props and callbacks stay the same.

However, the example still uses the regular old fetch API.

Let's set a new version to use a **custom proxy fetch**.

```js
const proxyFetch = {
  apply(_, __, args) {
    console.log(args);
    return { message: 'proxy done' };
  },
};
const proxiedFetch = new Proxy(fetch, proxyFetch);

const API = new TodoAPI(proxiedFetch);

(async () => {
  await API.getTodos().then((res) => console.log(res));
  console.log('Fetching single TODO');
  await API.getTodo(3).then((res) => console.log(res));
})();
```

We create a new proxied fetch, that in our case logs all requests to the console and then returns 'proxy done'.

Then we pass proxied fetch version to our class so that it will use it.

### Demo
Feel free to try it in this CodePen. 

You can switch between passing the proxied fetch or leaving it empty and use the regular fetch API.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="ExEarjV" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExEarjV">
  JavaScript Proxy the Fetch API</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Fetch with a service worker in the background

I described a background service worker for the Chrome extension example. 

Here we mock the fetch request to send all requests it receives via the browser runtime messages.

The code looks like this:

```js
const proxyFetch = {
  apply(_, __, args) {
    browser.runtime.sendMessage({
      type: 'FETCH_REQUEST',
      url: args[0],
      args: args[1],
    });
    return null;
  },
};

export const proxiedFetch = new Proxy(fetch, proxyFetch);
```

As you can see, it's a similar concept as we saw in the beginning of the article.

We proxy the existing fetch API method but overwrite what it executes.

In this example, we then send a message to the browser runtime.

## Conclusion

With the **JavaScript Proxy object**, we can proxy existing APIs like the Fetch API.

This is super powerful because we don't have to mock the entire function but proxy it to do what we need.

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
