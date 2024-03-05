---
layout: ../../layouts/Post.astro
title: 'Astro getting related articles based on tags'
metaTitle: 'Astro getting related articles based on tags'
metaDesc: 'How to load related articles in Astro based on tags'
image: /images/17-03-2022.jpg
date: 2022-03-17T03:00:00.000Z
modifiedDate: 2024-03-05T03:00:00.000Z
tags:
  - astro
---

I've introduced related articles at the bottom of each post.

These are based on the closest matching tags, and in this article, I'll explain how you can recreate this in Astro.

![Related articles in Astro](https://cdn.hashnode.com/res/hashnode/image/upload/v1646715319473/veXNeHYBA.png)

## Retrieving the related articles

The first thing we'll do is make a simple use case. We want to showcase the two latest articles.

Create a component called `RelatedArticles.astro` in your component directory.

In the [frontmatter](https://daily-dev-tips.com/posts/what-exactly-is-frontmatter/) section, we'll start by loading all our posts.

It's important to note `fetchContent` won't work here as it will cause an infinite loop.

```js
---
const fetchedPosts = await import.meta.glob("../pages/posts/*.md");
const allPosts = await Promise.all(
	Object.keys(fetchedPosts).map((key) => {
	  const post = fetchedPosts[key];
	  const url = key.replace("../pages/", "/").replace(".md", "/");
	  return post().then((p) => {
	    return { ...p.frontmatter, url };
	  });
	});
);
---
```

Then we want to make sure we are never showing the current article, and sort them on the date.

```js
// Retrieve the props from the component
const { tags, currentPathname } = Astro.props;

const mappedTags = allPosts
  .filter(({ url }) => url !== currentPathname)
  .filter((a) => new Date(a.date) <= new Date())
  .sort((a, b) => new Date(b.date) - new Date(a.date));
```

And then, we can return two of them in our HTML section.

```html
<div class="container md:mx-auto">
  <div class="mx-0 md:-mx-4 grid grid-cols-1 md:grid-cols-2">
    <article article="{mappedTags[0]}" />
    <article article="{mappedTags[1]}" />
  </div>
</div>
```

Note: I'm using an existing `Article` component I've made, yours could look different, or you can [copy my one](https://github.com/rebelchris/ddt-v2/blob/master/src/components/Article.astro).

We can now add the related articles to our post template.

```js
<RelatedArticles tags={content.tags} currentPathname={canonicalURL.pathname} />
```

We are passing the tags of the current post and the current pathname of the page the user is on.

## Ranking the related articles

We have our script ready, so it shows the last two articles, but they might not be mainly related to each other.

I've come up with some rules, and this should be the order:

- all tags match
- some tags match
- one tag matches
- no tags match

All of these will already be based on the date so that we will match the latest article.

My tags are frontmatter sections in my markdown that can look like this:

```js
---
layout: ../../layouts/Post.astro
...
tags:
  - developer
  - javascript
  - css
---
```

Of course, if an article has all these tags, it's a perfect match, and we should show that first.

At this point, I realized this was quite a thing to set up, and I've had a working example, but it was looking a bit nasty.
So I decided to ask my friend [Alex](https://twitter.com/lexLohr) for some advice.

He came up with a crazy solution, which turned out to work perfectly!

The first thing we want to do is match all the tags of each article.
Since we already have the filter and sort setup, we can add a reduction to it.

```js
const mappedTags = allPosts
  .filter(({ url }) => url !== currentPathname)
  .filter((a) => new Date(a.date) <= new Date())
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .reduce(
    (filtered, article) => {
      // TODO
    },
    { all: [], some: [], one: [], none: [] }
  );
```

You might have spotted what's going on, the [`reduce`](https://daily-dev-tips.com/posts/javascript-reduce-method/), as you know, has an accumulator and current value.
As the default, we set the value to an object with the types we want to count.

The first thing we want to do is count how many tags of the reduced article match the tags on the page.

Remember, we have access to the posts tags through this function we implemented:

```js
const { tags, currentPathname } = Astro.props;
```

```js
const mappedTags = allPosts
  .filter(({ url }) => url !== currentPathname)
  .filter((a) => new Date(a.date) <= new Date())
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .reduce(
    (filtered, article) => {
      // nice use of type coercion: true => 1, false => 0, so we can add a boolean to number here
      const foundTagsCount = tags.reduce(
        (count, tag) => count + article.tags.includes(tag),
        0
      );
    },
    { all: [], some: [], one: [], none: [] }
  );
```

I'll be honest, I found this just a little piece of magic from Alex, we use another reduce, but here we sum the number of tags that match.

By the end, `foundTagsCount` is the number of tags that match the original article.

Then we need to define which category the amount fits, so this can be one of the following: `all`, `some`, `one`, or `none`.

```js
const amount =
  tags.length === foundTagsCount
    ? 'all'
    : foundTagsCount > 1
    ? 'some'
    : foundTagsCount
    ? 'one'
    : 'none';
```

So if we match all the tags, we push it to `all`. If the count is not matching all, but more than one, we push it to `some`, and so on.

Then we need to push it to the accumulator value of our primary reduce function.

```js
filtered[amount].push(article);
return filtered;
```

We got a neat array that matched all articles in each category.

And we can spread them out into one big array and take the first x amount you want to show.

```js
const { all, some, one, none } = mappedTags;
const output = [...all, ...some, ...one, ...none];
```

The `output` variable will be in the order of spreading to use the first two in my case.

```html
<div class="container md:mx-auto">
  <div class="mx-0 md:-mx-4 grid grid-cols-1 md:grid-cols-2">
    <article article="{output[0]}" />
    <article article="{output[1]}" />
  </div>
</div>
```

And there you go, quite the challenge, but we made some cool recommendations based on tags.
I might add some more filtering options to this in the future, but it seems close to what I want for now.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
