---
layout: ../../layouts/Post.astro
title: 'Creating a Markdown Blog Powered by Next.js in Under an Hour'
metaTitle: 'How to Next.js Markdown Blog in UNDER 1hr [2024]'
metaDesc: 'How to load markdown pages in Next.js a full-blown tutorial'
image: /images/01-02-2022.jpg
date: 2022-02-01T03:00:00.000Z
modifiedDate: 2024-03-05T03:00:00.000Z
tags:
  - nextjs
---

> [This article is initially posted on the OpenReplay blog](https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour)

I'm pretty sure 99% of the developers out there just love markdown. It's such a fantastic format to write in.

Making everything quick and easy to handle.

For those not familiar with Markdown, it's a flat text format that looks like this:

```md
# Heading

Some text

- list item 1
- list item 2
- list item 3

[My website](https://daily-dev-tips.com)
```

Which would result in the following HTML

```html
<h1><a id="Heading_0"></a>Heading</h1>

<p>Some text</p>

<ul>
  <li>list item 1</li>
  <li>list item 2</li>
  <li>list item 3</li>
</ul>

<a href="https://daily-dev-tips.com">My website</a>
```

Sounds wonderful, right? And yes it is lovely, so how cool would it be if we can make a blog in Next.js that allows us to write markdown formatted posts?

If you are wondering what the end result is for this article, here is a little demo video:

![Creating a markdown powered Next.js blog](https://cdn.hashnode.com/res/hashnode/image/upload/v1642952296332/Ypo9GKZkV.gif)

> Note: At the bottom I linked the GitHub repo, that you can fork 🥳

## Project setup

Alright, if you are new to markdown or Next.js, don't worry this article will guide your completely through setting this project up from start to finish!

Let's start by creating a new blank Next.js start, we'll open up our favourite terminal and run the following command.

```bash
npx create-next-app next-blog
```

This will create a blank next application in the `next-blog` folder.

Once it's done installing you can navigate to the project and run it. (This will show the basic Next.js starter)

```bash
cd next-blog

# Run the project
npm run dev
```

## Adding Tailwind CSS for our styling

Tailwind CSS is a perfect CSS framework to make styling super easy for us, and it works super well in a Next.js project.

The first step we have to do is, install the dependencies that are required for Tailwind.

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Then we can initialise Tailwind by running the following command, it will create all the side files we need.

```bash
npx tailwindcss init -p
```

Now head over to the `tailwind.config.js` file that the command above created for us, and modify the `content:` array to look like this:

```js
content: [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
],
```

The last step to make everything work is to modify the existing `styles/global.scss` file.
Remove everything in this file and only add the following three lines.

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

And that's it we can now leverage the power of Tailwind in our application.

## Creating a reusable Next.js layout

Next.js support different pages out of the box, but we want to have one main layout that wraps around this.

In this layout we will define a header and footer, this means we don't need to add it in all the separate files.

To create a layout in NExt.js first create a `components` folder in your project.

Inside that folder create a `layout.js` file.

The layout is basically a component, which looks like this:

```js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-fuchsia-100 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span className='mx-auto'>Welcome to my blog</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1'>{children}</main>
      <footer className='bg-fuchsia-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2022 DailyDevTips
        </div>
      </footer>
    </div>
  );
}
```

For this article I decided not to extract any further, but you could go ahead and move the header and footer into their own components for better readability.

The main important part to know here is that we accept `children` as a property and render them in the `main` element.

This allows us to render any kind of component inside there.

To use this newly created layout we have to open up our `_app.js` file. This is basically the entry point for your entire application.

By default you will see it renders a `Component` that has specific properties.

We want to wrap that component in our layout.

```js
import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

And that's it any page we create now will be wrapper in our layout component, making it show the header and footer.

Let's try this quickly before moving on.

Modify the `index.js` file and add the following markup for now:

```js
return <div>Hello world 👋</div>;
```

When you run the application again you should see the following:

![Basic Next.js layout](https://cdn.hashnode.com/res/hashnode/image/upload/v1642949673777/IrYsoviKU.png)

You see the header and footer are automatically applied, we didn't need to say the should be used in any kind of way.

## Creating the posts

Since we'll be using markdown for our posts, create a new folder in the root of your project called `posts`.

Inside you can start by creating your post items, each file will also become the URL of the article so keep this in mind.

One example of my articles looks like this: `nextjs-page-options-and-how-they-work.md`

Then inside the file you have two section.

The top part, called [frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/) it's a way to add non-rendered elements to your post.

They are divided by three dashes.
And below that is all your content that you want.

For example:

```md
---
title: 'Next.js page options and how they work'
metaTitle: 'Next.js page options and how they work'
metaDesc: 'How to use pages in Next.js exploring the options'
image: /images/22-09-2021.jpg
date: '2021-09-22'
tags:
  - nextjs
---

# The main content
```

You can add anything you want in the frontmatter, so you don't have to use this example specifically.

We'll only be using the following for this article:

- title
- socialImage

It's up to you to enhance the website with any other cool elements.

> Note: Add the images in the `public/images` directory.

Create a couple of markdown posts (or use the ones from the demo), this makes it easier to test what we are building.

## Loading the markdown posts on the homepage

Now that we have our markdown posts in place, we want actually to retrieve them and show them on the homepage.

On the homepage we want to show the socialImage and the title, and link to the actual post.

Since the image and title are based in the frontmatter section of the markdown file we need to find a way to extract it.

Luckily for us, there is an amazing NPM package that can help us with this, let's install it.

```bash
npm install gray-matter
```

This package makes it possible for us to parse the frontmatter section and the content section from a content string.

Then we want to open up our `index.js` file and start by importing the thing we will need.

```js
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
```

Then we need to leverage the Next.js `getStaticProps` method, which allows us to define variables the page can use on build time.

> Note: Check out this article for more information on the [rendering modes of Next.js](https://daily-dev-tips.com/posts/nextjs-page-options-and-how-they-work/)

The main frame for this function looks like this:

```js
export async function getStaticProps() {
  // Get all our posts
}
```

The first thing we need to work on is retrieving all the posts from our `posts` folder.

For this we can leverage the `fs` (filesystem) module.

```js
const files = fs.readdirSync('posts');
```

Then we want to loop over all those posts to extract the frontmatter part so we can get the title and image.

```js
const posts = files.map((fileName) => {
  const slug = fileName.replace('.md', '');
  const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
  const { data: frontmatter } = matter(readFile);

  return {
    slug,
    frontmatter,
  };
});
```

Quite a lot going on here, so let's look step by step.

First we define the slug (URL) for the page, which is basically the filename without the `.md` part.

Then we read the file by using the `fs` module again.
And once it's loaded we use the `matter` package to read the file, and extract the `data` object, but we destructure it as the variable `frontmatter`.

Basically it means we change the `data` variable to be named `frontmatter`.

The last thing we need to do is return the props that our component will receive.

```js
return {
  props: {
    posts,
  },
};
```

This sends the `posts` variable to our component.

So let's modify our `Home` component to being able to receive this variable.

```js
export default function Home({ posts }) {
```

That's it! Yes, super simple right, we now have access to the posts inside the component.

Let's create a grid and render our posts in there.

```jsx
export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src={`/${frontmatter.socialImage}`}
              />
              <h1 className='p-4'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
```

The CSS part is rendering a grid, where we show one posts on mobile and up to four for big screens.

Then we loop over each of the posts using the `map` method.

Each post will be one big link, including the image of the posts and the title.
And on click it links to `/post/{slug}` which we'll start working on next.

Let's quickly look and admire what we made so far:

![Next.js reading markdown files](https://cdn.hashnode.com/res/hashnode/image/upload/v1642950941434/FYyBuGTAb.png)

## Creating individual markdown posts in Next.js

Now that we have a list of our posts on the homepage, we of course want to show more details and the actual content on each individual page.

For this we can leverage Next.js dynamic routing, which basically allows one file to render all our posts!

To create this file create a `post` directory inside the `pages` directory and inside this folder add a file called `[slug].js`.

The brackets define the file as a dynamic file.

This file will also use the `getStaticProps` to retrieve the data for a single post.

But it needs another function called `getStaticPaths` to create each path (URL).

Let's start by importing the modules we need.

```js
import fs from 'fs';
import matter from 'gray-matter';
```

And from here we can work on the `getStaticPaths` function to make sure all our files get their own URL.

```js
export async function getStaticPaths() {
  // Retrieve all our slugs
}
```

Again, the first thing we need to do is get all our posts.

```js
const files = fs.readdirSync('posts');
```

And you guessed it right, map the filenames to get the slugs.

```js
const paths = files.map((fileName) => ({
  params: {
    slug: fileName.replace('.md', ''),
  },
}));
```

Then the important part here is this function should return all valid paths, so we need to simply return them.

I also included a `fallback: false` which makes sure non existing URL's will fail and show a 404.

```js
return {
  paths,
  fallback: false,
};
```

The static part is much the same as what we did on the homepage, but for this one we also want to retrieve the data from the file, because this contains all our actual content.

```js
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
```

Before we start working on the component for this page, we want to install another NPM package called `markdown-it` this package can be used to convert markdown into HTML.

```bash
npm install markdown-it
```

Then load it on this page:

```js
import md from 'markdown-it';
```

Now we can start working on the actual component, which actually is super simple as it only render the title and the content part.

```jsx
export default function PostPage({ frontmatter, content }) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
```

As you can see we need to use `dangerouslySetInnerHTML` as we are setting HTML.
Don't be scared by the name of this, as it's only HTML we allow to be in there.

Almost there!

Let's quickly try it out and see what we got.
Run your app and open a page.

![Markdown in Next.js post](https://cdn.hashnode.com/res/hashnode/image/upload/v1642951639611/T7HAjgSHa.png)

Cool, all our data is there, but it doesn't look great yet.

Luckily we decided to use Tailwind CSS, and they have an amazing plugin: [Typography plugin](https://daily-dev-tips.com/posts/make-your-life-easy-with-the-tailwind-typography-plugin/)

Let's install this plugin and see what happens.

```bash
npm install -D @tailwindcss/typography
```

Open up the `tailwind.config.js` file and add it under the plugins section.

```js
plugins: [require('@tailwindcss/typography')],
```

Now reload your app and see what happens.

![Tailwind Typography rendering markdown](https://cdn.hashnode.com/res/hashnode/image/upload/v1642951784022/YLR-0mVCu.png)

## Conclusion

And that's it, we now have a super cool markdown powered Next.js blog!

This is only a super basic starter, but enough to get your blogging career started.

Not bad for an hour worth of work!

Not it's up to you to make this blog even more amazing and share with the world what you created.

Some ideas to make it nicer:

- SEO aspect, add meta titles/description
- Add a tag overview
- Add some coolers to the code blocks

As promised you can download and use this starter template for free.

[Download the Next.js Markdown blog start from GitHub](https://github.com/rebelchris/next-markdown-blog)
