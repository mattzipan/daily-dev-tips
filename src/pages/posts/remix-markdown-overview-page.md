---
layout: ../../layouts/Post.astro
title: 'Remix Markdown overview page'
metaTitle: 'Remix Markdown overview page [2024]'
metaDesc: 'Adding a Markdown overview page to our Remix blog'
image: /images/14-05-2022.jpg
date: 2022-05-14T03:00:00.000Z
modifiedDate: 2024-03-05T03:00:00.000Z
tags:
  - remix
---

Now that we have our [Markdown powered page](https://daily-dev-tips.com/posts/rendering-markdown-in-remix/) to work, let's see how we can add some kind of overview page.

This could be on your homepage to showcase your latest articles or simply a blog overview page.

> Note: While doing research, I could not find an automated way, so this article might get updated once I do.

## Loading Markdown files

Markdown files have to be loaded individually in Remix. I'm not 100% sure if there is an automated way of doing it at the point of writing.

If I do find one, I'll update this article 🙌.

Let's get started!

In our example, we'll create a blog overview page, so let's add the `index.tsx` file inside our `blog` directory.

Now we can start by loading the markdown files we want to show.

```js
import * as firstArticle from './my-first-article.md';
import * as secondArticle from './mdx-sample.mdx';
```

Then we only want to load the metadata (Frontmatter section) of the Markdown files.
So let's create a function that only extracts that information rather than the whole file.

```js
function postFromModule(mod) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    ...mod.attributes.meta,
  };
}
```

This function will return the slug and all [frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/) parts of the file.
The frontmatter section is everything within the three dashes at the top of the file.

Then we can use the Remix loader to actually load these pages.

```js
export async function loader() {
  return json([postFromModule(firstArticle), postFromModule(secondArticle)]);
}
```

Now we can access this data inside our page.

```js
export default function Index() {
  const posts = useLoaderData();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description ? <p>{post.description}</p> : null}
        </li>
      ))}
    </ul>
  );
}
```

And that's it. Remix will loop over the posts we have defined in our import and show the title and description with a link to the actual page.

![Remix Markdown overview](https://cdn.hashnode.com/res/hashnode/image/upload/v1651647501053/xShVkwoNx.png)

Check out this [GitHub repo](https://github.com/rebelchris/remix-starter/tree/markdown-overview) to see the complete code.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
