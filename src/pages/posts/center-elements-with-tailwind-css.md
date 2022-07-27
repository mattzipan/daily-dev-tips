---
layout: ../../layouts/Post.astro
title: 'Center elements with Tailwind CSS'
metaTitle: 'Tailwind Center div element vertically & horizontally'
metaDesc: 'Using Tailwind CSS to center a div element vertical & horizontal with flexbox or CSS grid allignment.'
ogImage: /images/25-06-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/7debb9c6-2996-44d6-fe31-25ccc58c1200
date: 2021-06-25T03:00:00.000Z
top: true
tags:
  - css
  - tailwind
---

Nowadays, I choose **Tailwind CSS** as my goto CSS framework.
And today, I'll show you how to **center elements** with Tailwind CSS quickly.

We'll be looking at two methods of centering a div with Tailwind.
There isn't a clear wrong or right choice between these two methods. Generally, css grid should be used for the high-level layout and flexbox CSS for details.
For our demo, we'll use the same CSS structure so you can see the difference in both examples better.

## 1. Tailwind center div with grid center

We'll start by using _grid center_ to make a div element horizontally and vertically centered on a page.

```html
<div class="grid h-screen place-items-center">Centered using Tailwind Grid</div>
```

Can you believe this code is all we need?
Let's explore what's going on.

- `grid`: Gives the element a display: grid css property
- `place-items-center`: Gives it the center value on the place-items property
- `h-screen`: Sets the 100vh (screen-height) as the height

This code will perfectly center the element horizontally and vertically on the page.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="xxqeQRJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Grid center using Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/xxqeQRJ">
  Grid center content using Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> Looking for a [CSS Grid centered](https://daily-dev-tips.com/posts/css-grid-most-easy-center-vertical-and-horizontal/) version?

## 2. Tailwind center div with flex center

A second option to center in Tailwind is to use flexbox for the HTML element.
The approach is pretty similar, but we have to specify the horizontal and vertical alignment with flexbox.

Let's see how that would look like:

```html
<div class="flex items-center justify-center h-screen">
  Centered using Tailwind Flex
</div>
```

As you can see, the div alignment looks similar to the first example but with an extra variable.

- `flex`: Adds the display: flex CSS property
- `justify-center`: This centers the div horizontally
- `items-center`: This centers the content vertically
- `h-screen`: Sets the 100vh (screen-height) as the height

The final CSS code will look like the following:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="WNpWYpG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flex center using Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNpWYpG">
  Flex center div using Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> Looking for the [CSS Flex center article](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/)?

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
