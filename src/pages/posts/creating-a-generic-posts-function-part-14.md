---
layout: ../../layouts/Post.astro
title: 'Creating a generic posts function - part 14'
metaTitle: 'Creating a generic posts function - part 14'
metaDesc: 'Modifying our posts calls to one generic reusable function'
ogImage: /images/21-10-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/50be4973-edf9-4953-5ca1-a89ffd4e8300
date: 2022-10-21T03:00:00.000Z
modifiedDate: 2024-03-05T03:00:00.000Z
tags:
  - nextjs
---

For this article, I want to add the latest two blog posts to our homepage. However, it quickly made me realize we are reusing the same code repeatedly.

So let's start this article by re-doing some of the code so we can reuse it in existing components.

Before we start, we'll identify the different calls we currently have:

- A function that retrieves all posts
- A function that retrieves a single post by slug

And for the homepage, we want to retrieve all posts sorted by date and render two of them.

## Creating a shared function

Create a new folder called `lib` inside your root directory.
Add a file called `api.js` which will serve as our API.

We can start by adding the call for all posts.
We have this function already in our blog post overview, so modify and copy that one.

```js
import fs from 'fs';
import matter from 'gray-matter';

export function getAllPosts() {
  const files = fs.readdirSync('./posts');
  const posts = files
    .map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        ...frontmatter,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
```

The only thing I added is a sort based on the date.
This way, by sorting the posts based on the date in the [frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/), we always show the newest articles first.

As mentioned, the rest is a copy-paste from what we already had.

Now let's also create the `getPostBySlug` function, which we can copy from our `[slug]` page again.

```js
export function getPostBySlug(slug) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    frontmatter,
    content,
  };
}
```

For the people paying attention, you'll see this function duplicates what we had inside the all-post function.

Let's refactor that one so it uses this now.

```js
export function getAllPosts() {
  const files = fs.readdirSync('./posts');
  const posts = files
    .map((fileName) => {
      const slug = fileName.replace('.md', '');
      const { frontmatter } = getPostBySlug(slug);
      return {
        slug,
        ...frontmatter,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
```

Way cleaner!

## Using the new API calls

Now that our API calls are ready, let's adjust our pages so they use this.

The first one is the `pages/blog/index.js` file.

```js
import { getAllPosts } from '../../lib/api';

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
```

Yep, it's as simple as that!
The benefit, of course, is that if we ever change something in our post call, it's reflected everywhere that uses it.

The next file we need to change is the `pages/blog/[slug].js` file.
This will use both function as they will look like this:

```js
import { getAllPosts, getPostBySlug } from '../../lib/api';

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPostBySlug(slug);
  return {
    props: post,
  };
}
```

And yep, that's all. Our system is now back to working as intended.

## Adding the latest post to the homepage.

Let's come back to the initial idea for this article.
We wanted to add the latest two articles on the homepage, so how can we do this now?

Open up the `pages/index.js` file and add a staticProps function.

```js
import { getAllPosts } from '../lib/api';

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
```

This will ensure we have access to our post data.
Inside the component, we can retrieve this `posts` variable and, in return, pass it to our recent posts component.

```js
export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <IntroHeader />
      <RecentPosts posts={posts} />
      <FeaturedWork />
    </div>
  );
}
```

Let's go to the recent posts component and ensure we know what to do with this data.

```js
import SectionHeader from './sectionHeader';
import Article from './article';

export default function RecentPosts({ posts }) {
  return (
    <section className='bg-blue-100 px-6'>
      <div className='max-w-4xl mx-auto py-12'>
        <SectionHeader title='Recent posts' href='#' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Article post={posts[0]} />
          <Article post={posts[1]} />
        </div>
      </div>
    </section>
  );
}
```

And yep, that's it!

![Homepage latest posts](https://cdn.hashnode.com/res/hashnode/image/upload/v1665468825940/bGrBh3ERn.png)

Our homepage now shows the latest two articles, and we didn't have to recreate existing code for it.

You can also find the completed code for today on [GitHub](https://github.com/rebelchris/next-portfolio/tree/part-14).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
