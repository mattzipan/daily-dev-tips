---
layout: ../../layouts/Post.astro
title: 'Hide Scrollbars with pure CSS'
metaTitle: 'How to hide Scrollbars with CSS [2024]'
metaDesc: 'Master CSS styling to hide or disable scrollbars in HTML. Perfect for Google Chrome & Firefox, using pseudo-elements for seamless scrolling.'
image: /images/22-02-2021.jpg
date: 2021-02-22T03:00:00.000Z
modifiedDate: 2024-02-12T03:00:00.000Z
tags:
  - css
---

Today we will learn **how to hide scrollbars** with CSS!

As much as I love browser-native behavior, there are **use-cases when to **make scrollbars invisible** 👻, such as:

- custom styling
- embedded content
- custom navigation menu
- carousel & modal

Working on a Mac browser, you hardly see how ugly **sidebars** are.

Switching to Windows **browsers** however will often show pretty ugly scrollbars for side menus.

Let's look at an example:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hide-scrollbars_zwtujb.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/hide-scrollbars_eanjay.mp4" type="video/mp4" />
</video>

As you can see, the right-hand scrollbar for the content is fine, that's normal behavior.

The **browser scrollbar** for the fixed side-menu is misplaced however and not nice to see.

On Mac, the **UX** is not disturbing since the bar disappears.

For Windows users it will always be visible though - which is not doing our design a favor.

## How to hide a Scrollbar Removing the sidebar

We can luckily **remove the scrollbar** with some `CSS` magic✨ and not lose its functionality.

> Note: please use this wisely since it's a default way to show the user a scrollable area.

In our case, we will add a `no-scroll` class on the element we want to **disable the scrollbar** for:

```css
.no-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.no-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
```
Let's look at what we're doing here.

As you can see, we have specific targets for IE and Firefox browsers.

- `-ms-overflow-style: none;` targets Internet Explorer and Edge browsers and makes content still scrollable when there is an **overflow** - but without scrollbar.
- `scrollbar-width: none;` targets Firefox and sets the scrollbar width to none, making it **invisible**, while keeping the scrolling functionality.
- `::-webkit-scrollbar { display: none; }` is a **pseudo selector** for webkit browsers, setting the sidebar to `display: none`.

**Collectively** the CSS styles ensure that the scrollbar is hidden across major browsers, including older versions of Internet Explorer and Edge, as well as modern browsers like Firefox, Chrome, Safari, and Opera.

Using these styles to disable the scrollbar will ultimately allow for a better UX by providing a cleaner look.🧹

You can view the CSS codes in this **Codepen**:

## Demo
<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="ExNmXGB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS hide scrollbars">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExNmXGB">
  CSS hide scrollbars</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
