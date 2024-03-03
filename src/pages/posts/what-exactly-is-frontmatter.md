---
layout: ../../layouts/Post.astro
title: 'What exactly is Frontmatter?'
metaTitle: 'What exactly is Frontmatter?'
metaDesc: 'What is Frontmatter and how can you use it in Markdown files'
image: /images/16-05-2022.jpg
date: 2022-05-16T03:00:00.000Z
tags:
  - markdown
---

When I'm writing my articles that include Markdown files or data, I often refer to `Frontmatter`.

## What is Frontmatter?

But what is this Frontmatter exactly?

Frontmatter is a way to identify metadata in Markdown files.
Metadata can literally be anything you want it to be, but often it's used for data elements your page needs and you don't want to show directly.

Some examples of common metadata are:

- Title of the post
- Description for SEO purposes
- Tags that belong to a document
- Or the date it was written

These are only some examples, and you can make it as crazy as you want with Frontmatter.

## How to add Frontmatter?

To add Frontmatter to a Markdown document, you have to start by writing a three-dotted block at the top of your file.

```js
---
title: Frontmatter section
---

# Markdown section
```

You can see the three dots as an example in the above example. Everything in there will be seen as metadata.

Below the second three dots is where our default Markdown file will begin.

## Some basic Frontmatter options

It's important to note that Frontmatter is parsed as YAML blocks, so the indentation is important.

For instance, we can set regular variables with a colon setup:

```js
---
title: 'The document title'
---
```

Or we can convert them into an array of objects:

```js
---
tags:
	- JavaScript
	- Markdown
---
```

Alternatively, you can even use the bracket way of defining arrays.

```js
---
tags: ["JavaScript", "Markdown"]
---
```

In extreme cases, you might even want to have multidimensional object arrays.

```js
---
tech:
	- frontend
		stack: Remix
	- backend
		stack: Go
---
```

Besides arrays, you might want to use multi-line text blocks.

The first way to add this is only visually in your code editor. This will not add newlines in the outputted code.

```js
---
description: >
	this is a
	multiline
	string
---
```

Which will output: `this is a multi-line string`.

However, if you want to add new lines, use the pipe method.

```js
---
description: |
	this is a
	multiline
	string
---
```

Which will output:

```
this is a
multi-line
string
```

## Conclusion

Frontmatter is a super intuitive way of making your Markdown files contain some metadata - a cornerstone for SEO. Frontmatter renders MDX properties like tags to enhance your categories & content.

To further enhance your website content, explore <a href="https://storychief.io/blog/seo-tools" target="_blank">SEO tools</a> that provide detailed guidance on what to include and what to avoid in your content.

It can enhance your SEO, Website data and even render proper MDX properties.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
