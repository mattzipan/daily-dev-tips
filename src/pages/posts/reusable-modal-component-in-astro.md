---
layout: ../../layouts/Post.astro
title: 'Reusable modal component in Astro'
metaTitle: 'Reusable modal component in Astro'
metaDesc: 'Creating a reusable modal component in Astro'
image: /images/02-11-2021.jpg
date: 2021-11-02T03:00:00.000Z
modifiedDate: 2024-03-05T03:00:00.000Z
tags:
  - astro
---

Today we'll be making a reusable modal component in Astro.

The idea is to have one component that follows HTML semantics and can trigger a modal popup.

The content of this popup can be anything we want, and we want to use this component dynamically.

The result will look like this:

<!-- ![reusable modal component in Astro](https://cdn.hashnode.com/res/hashnode/image/upload/v1634885106744/_lZVDo2eo7.gif) -->
<video autoplay loop muted playsinline>

  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/modal_pjptvz.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/modal_cqikfv.mp4" type="video/mp4" />
</video>

## Creating the component

Make sure you have an Astro project setup before. If you don't have one yet, please check out my [Astro starter project](https://daily-dev-tips.com/posts/a-first-look-at-astra-astronomical-results/).

We want to add a new component called `Modal.astro` inside our `components` folder.

The component should receive two properties: the ID of this modal and a text for the open button.

```jsx
---
const {id, open} = Astro.props;
---
```

These three dots are known as [frontmatter](https://docs.astro.build/en/guides/markdown-content/#frontmatter-layout) and can be used to include javascript in your Astro components.

Then we want to render the button that can open a modal.

```html
<button onclick="{`window.${id}.showModal()`}">{open}</button>
```

What we do here is bind a click listener to this button. In there, we pass the unique ID for this modal.
Then we set the open variable in the button. This is the text on the button.

The window showModal function is a native browser function to invoke dialogs.
Using this way, we get a backdrop option, making it easier to style this modal.

The next thing we want is the actual dialog element.

```html
<dialog id="{id}">
  <slot name="main" />
  <form method="dialog">
    <slot name="close" />
  </form>
</dialog>
```

As you can see, we pass the ID as the unique ID for this dialog element. With this ID, we can open it as we saw in the button above.

Then we pass a slot for the main content. (More on the slots in a bit)
And we add a form with a close slot. This is needed because a native dialog will close when a button inside this dialog form is pressed. (The `method="dialog"` is key here).

The last thing we want to add under our [frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/) is some basic styling.

```html
<style lang="scss">
  dialog {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &::backdrop {
      position: fixed;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background: rgba(255, 0, 0, 0.1);
    }
  }
</style>
```

This will add some basic styling to center our dialog on the page and color the backdrop.

## Using the Astro modal component

Now we want to use this modal component. Let's see how that works.
Open the `pages/index.astro` file and import the component in your frontmatter part.

```jsx
---
// Component Imports
import Modal from '../components/Modal.astro';
---
```

To use it, you can type `HTML` like this:

```jsx
<Modal id='dialog' open='Open modal'>
  <main slot='main'>
    <p>Some extra content you would like here</p>
    <hr />
    <img width='60' height='80' src='/assets/logo.svg' alt='Astro logo' />
  </main>
  <button slot='close'>Close modal</button>
</Modal>
```

Pretty cool!

Let's see what's happening in a bit more detail.
We open a `Modal` component. This takes two parameters: the `ID` and the `open` button text.

Then we insert a main element with the `slot` key. Remember the slots we talked about? This element will be rendered inside the `main` slot.

And then we add the button which reflects the `close` slot!

That's it!
We now have a reusable component that's easy to use!

You can find the complete code on [GitHub](https://github.com/rebelchris/astro-modal).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
