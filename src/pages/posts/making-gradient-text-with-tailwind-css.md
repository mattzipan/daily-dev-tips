---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS: Gradient Text Color'
metaTitle: 'Tailwind CSS: Gradient Text Color Tutorial [2024]'
metaDesc: 'Learn how to add a linear gradient generator as text color with Tailwind CSS. Try the CodePen example demo.'
image: /images/26-06-2021.jpg
date: 2021-06-26T03:00:00.000Z
modifiedDate: 2024-01-30T03:00:00.000Z
tags:
  - css
  - tailwind
---

CSS gradient text is super cool. 

I love the vibe it gives off, and I made this [pure CSS gradient text](https://daily-dev-tips.com/posts/css-gradient-text-effect/) tutorial before.

Hence, in this tutorial you will learn how to create a **gradient text in Tailwind CSS** 👀.

See the example:

![Tailwind CSS gradient text example](https://cdn.hashnode.com/res/hashnode/image/upload/v1643118038139/2fikdgdXE6.png)

So, let's get started!

## How to create a gradient text color in Tailwind

Let's get started by creating our headline and add the Tailwind CSS classes we need:

```html
<h1
  class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
>
  Tailwind CSS
</h1>
```

Those CSS classes will be all we need to create a cool **gradient text color**. 

But first, let's look at what those Tailwind **CSS properties** actually do.

These styles below just do the general styling - they are not needed for the liniear gradient effect itself: 

- `text-8xl`: Makes the text font-size 6rem - quite big
- `font-extrabold`: Creates a bigger font-weight, so the visual effect pops more

Now, these classes however are the required classes to add the **gradient generator** to the text:

- `text-transparent`: This makes the actual text transparent and shows the background (which has the gradient)
- `bg-clip-text`: This makes the gradient background only show on the text outline
- `bg-gradient-to-{flow}`: This is used to indicate the direction the linear gradient flow: ([All directions](https://tailwindcss.com/docs/background-image))
- `from-{color}`: Set the beginning color for the gradient generator - in our case "purple-400"
- `to-{color}`: This sets the gradient end color - in our case "pink-600"

In the CodePen below, you can change the Tailwind CSS classes in the HTML and play around with the styling:

## Demo
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="NWpmEJg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Making gradient text with Tailwind CSS">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/NWpmEJg">
  Making gradient text with Tailwind CSS</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
