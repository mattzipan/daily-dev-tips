---
layout: ../../layouts/Post.astro
title: 'Next JS Sidebar Navigation with Tailwind CSS'
metaTitle: 'Make a Next.js Sidebar Navigation with Tailwind [2024]'
metaDesc: 'Responsive Next.js sidenav template: A tutorial with Tailwind CSS for a sleek sidebar navigation component. View the example code.'
image: /images/31-01-2022.jpg
date: 2022-01-31T03:00:00.000Z
modifiedDate: 2024-02-01T03:00:00.000Z
tags:
  - nextjs
  - react
  - tailwind
---

In this tutorial we will create a **sidebar navigation** for our **Next JS** website layout. We will use **Tailwind CSS** for all the styling.

The main goal is to show you how to make a **reusable component** for a site layout. The sidenav component will enable the user to navigate between pages of the web application.

## Demo of what we will build
<!-- ![Creating a sidebar layout in Next.js with Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1642834367343/n1ByKldm0.gif) -->
<video class="w-full" autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642834394/next-sidebar_kotys7.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642834394/next-sidebar_lskuwp.mp4" type="video/mp4" />
</video>

Feel free to review the source files and the demo <a href="https://stackblitz.com/~/github.com/dailydevtips/next-sidebar" target="_blank" >here on Stackblitz</a>.

## How to create a sidebar navigation in Next JS with Tailwind
First, let's set up  the Next.js project.
### Next.js sidebar project setup
> Note: At the time of writing, I'm using Next JS v.12

  Open your favorite terminal, and start a new Next.js project with this line of code:

```bash
npx create-next-app next-sidebar
```

Then, we'll navigate into the  project folder via terminal, and add Tailwind CSS.

### Install Tailwind CSS in Next JS project
We'll be adding the latest version of **Tailwind**.

If you want to use Tailwind version 2, check out this article on [installing Tailwind in Next.js](https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/).


```bash
# Install all the dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Initialise tailwind
npx tailwindcss init -p
```

Then add the following files to the `content` option.

```js
content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

And then the last step is to add the Tailwind stylesheets to our `styles/global.scss` file.

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

That's it. We are all set to start making the web application.

### Create Pages for the Navigation

For this tutorial, we'll be building three pages:

- Homepage
- About
- Contact

Let's first do the homepage.

You can remove everything inside the `index.js` file and replace it with the following code:

```js
export default function Home() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Home</h1>
      <span className='text-7xl'>🏡</span>
    </div>
  );
}
```

Then add a new file called `about.js` inside the `pages` directory and add the following code:

```js
export default function About() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>About</h1>
      <span className='text-7xl'>💬</span>
    </div>
  );
}
```

Then, in the same way, add a `contact.js` file:

```js
export default function Contact() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Contact</h1>
      <span className='text-7xl'>📞</span>
    </div>
  );
}
```

Now, we have all our pages created in the Next JS project and are ready to code **sidebar navigation**.


### Add sidebar navigation in Next.js

We'll be using a [Next.js layout](https://daily-dev-tips.com/posts/creating-a-reusable-layout-in-nextjs/).

This layout template file will be our main wrapping element. Each page will be rendered as a child element.

So, first, create a `components` directory in your project, and inside add a `layout.js` file.

The global structure for this file looks like this:

```js
export default function Layout({ children }) {
  return (
    // Todo
  );
}
```

Now add the layout component in your `_app.js` file so it will run on the website:

```js
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

Now let's define our navigation elements. We want a **header**, **aside** and a **main** section.

```html
<div className="min-h-screen flex flex-col">
  <header
    className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase"
  >
    Next.js sidebar menu
  </header>
  <div className="flex flex-col md:flex-row flex-1">
    <aside className="bg-fuchsia-100 w-full md:w-60"></aside>
    <main className="flex-1">{children}</main>
  </div>
</div>
```

With those HTML elements we created necessary structure for the **sidenav**.

Now, all we need to add is the actual **navigation menu** inside the aside tag.

For this, let's introduce an array of the pages we want to navigate to:

```js
const menuItems = [
  {
    href: '/',
    title: 'Homepage',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];
```

Inside our aside element, we can loop over these elements and add the href link to each page.

```html
<aside className='bg-fuchsia-100 w-full md:w-60'>
  <nav>
    <ul>
      {menuItems.map(({ href, title }) => (
        <li className='m-2' key={title}>
          <Link href={href}>
            <a
              className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer`}
            >
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</aside>
```

> Note: Don't forget to import `import Link from 'next/link';`

Finally, we want to add an *active page*. An active page should look slightly different, so the viewer sees on which page they are.

To create the active page, let's import the router and define a router variable.

```js
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  // Our code
}
```

Then inside our a href classes, we can add a dynamic check to see if the current route is the active page.

```html
${router.asPath === href && 'bg-fuchsia-600 text-white'}
```

And that's it. We created a dynamic sidebar navigation in Next.js!

Checkout the code we wrote and [view the navigation live here](https://stackblitz.com/~/github.com/dailydevtips/next-sidebar)

The sidenav is responsive and we could quickly style it with Tailwind.
You can use this layout as a starter template for your next project.

Find the complete code here on [GitHub](https://github.com/dailydevtips/next-sidebar).

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
