---
layout: ../../layouts/Post.astro
title: 'Use a Google Font in Tailwind CSS'
metaTitle: 'How to use Google Fonts in Tailwind CSS [2024]'
metaDesc: 'Tutorial to teach you how to add a Google font to Tailwind with live demo. Add a custom font family through the googleapis CDN.'
image: /images/28-02-2021.jpg
date: 2021-02-28T03:00:00.000Z
modifiedDate: 2024-01-29T03:00:00.000Z
tags:
  - css
  - tailwind
---

Many publishers leverage **Google Fonts** to introduce excellent and custom fonts to a website.

...And fonts can make or break you're website!

So, let's take a look at **how we can add Google Fonts to Tailwind** with the [plain HTML Tailwind starter](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/)
we made yesterday.

> If you're looking to use a Google font in any project, check out [how to use Google Fonts](https://daily-dev-tips.com/posts/how-to-use-google-fonts/)

With **Tailwind**, the process is similar, but we'll need some features of the Tailwind CSS config.

The result with **custom font** will look like this:

![Custom Google Font in Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1614061248074/YW0J-X1g2.png)

## How to add Google Fonts to Tailwind

1. head to [Google Fonts](https://fonts.google.com/) and find a **font family** you want to use.

Open the font and click the "Select this style" button for each style you like:

![Select Google Font style](https://cdn.hashnode.com/res/hashnode/image/upload/v1614060531226/KCKUtaP8N.png)

With the font selected, you'll get a sidebar on the right showing the `<link>` tag to add to the HEAD of our website.
Copy all the link tags. Note the href-attribute referencing the *fonts.googleapis.com* CDN.

2. Go back to your project and open the `index.html` file - then add the Google font import tags above the styles.css link-tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- other stuff -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
</html>
```

> Note: The second link specifies our custom font.

## Use Google font in Tailwind

Now let's [customize our Tailwind theme with Google fonts](https://tailwindcss.com/docs/font-family#customizing-your-theme).

Open the `tailwind.config.js` file and extend it with the `fontFamily` option.

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
};
```

If your font, like this example, uses spaces, it's best to use the double escape `'"` - it will make sure the font is picked up correctly.

Now we can use the Google font as a CSS class named `font-press-start` in Tailwind.

For example, we can add the font family to our headline on the homepage like this:

```html
<h1 class="text-6xl font-press-start">Welcome</h1>
```

The Tailwind code will render the following:

![Google font added in Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1614061094307/2RwZtsAH_.png)

You can find the complete code in this [GitHub repo](https://github.com/rebelchris/HTML-Tailwind-Starter/tree/google-fonts).

Go ahead, have a look and try adding other popular font families from Google, such as [Poppins](https://fonts.google.com/specimen/Poppins)

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
