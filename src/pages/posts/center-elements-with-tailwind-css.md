---
layout: ../../layouts/Post.astro
title: 'How to center a Div element with Tailwind CSS'
metaTitle: 'Tailwind CSS: Center Div vertically & horizontally [2024]'
metaDesc: 'Learn how to center a div in the middle of the screen vertically & horizontally. See CSS Flexbox or CSS Grid examples for Tailwind alignment in the Codepen demo.'
ogImage: /images/25-06-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/7debb9c6-2996-44d6-fe31-25ccc58c1200
date: 2021-06-25T03:00:00.000Z
top: true
tags:
  - css
  - tailwind
---

Nowadays, I choose **Tailwind CSS** as my goto CSS framework.
And today, I'll show you **how to center div elements** with Tailwind CSS quickly.

We'll learn **how to center a div in the middle of the screen** using two methods:
1. center a div element with Tailywind using **Flexbox CSS**
2. use **CSS Grid** to center an element

There isn't a clear wrong or right choice between these two methods. Generally, CSS grid should be used for the high-level layout and Flexbox CSS for lower-level HTML elements, such as details.

In the [**Codepen demo**](./#demo-tailwind-grid-center) below, we'll use the same CSS structure, so you can see the difference between the [**Tailwind Grid center**](./#demo-tailwind-grid-center) and [**Tailwind Flexbox center**](./#example-tailwind-flex-center).

## 1. Tailwind center div with CSS Grid

We'll start by using _grid center_ to make a div element horizontally and vertically centered on a page.

```html
<div class="grid h-screen place-items-center">Centered using Tailwind Grid</div>
```

Can you believe these Tailwind classes is all we need to center vertically and horizontally?

Let's explore the **classes**.

- `grid`: Gives the element a **display: grid** css property
- `place-items-center`: Gives it the **center** value on the **place-items** property, centering 
- `h-screen`: Sets the 100vh (screen-height) as the height

### Demo Tailwind grid center
This CSS code will perfectly center the div element horizontally and vertically on the page:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="xxqeQRJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Grid center using Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/xxqeQRJ">
  Grid center content using Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> Looking for a [CSS Grid centered](https://daily-dev-tips.com/posts/css-grid-most-easy-center-vertical-and-horizontal/) version?

## 2. Tailwind center div with CSS Flexbox

A second option to center in Tailwind is to use CSS Flexbox for the HTML element.
The method is pretty similar, but we have to specify the horizontal and vertical alignment with Flexbox.

Let's see how centering looks with Flexbox:

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

### Example Tailwind flex center

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="WNpWYpG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flex center using Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNpWYpG">
  Flex center div using Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> Looking for the [CSS Flex center article](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/)?

### Thank you for reading the tutorial, let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
