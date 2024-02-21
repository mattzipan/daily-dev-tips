---
layout: ../../layouts/Post.astro
title: 'Vendure - Setting up facets'
metaTitle: 'Vendure - Setting up facets'
metaDesc: 'How to setup and manage facets in Vendure'
ogImage: /images/17-12-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/2abaf62d-70d3-42ea-91ab-66ca8555e500
date: 2022-12-17T03:00:00.000Z
tags:
  - vendure
---

As mentioned in my very [first article about Vendure](https://daily-dev-tips.com/posts/vendure-headless-commerce-part1/), one of the most important things for me was the concept of facets.

In my use case, I needed custom elements for each product that the end users could filter.

For example, the beer shop I'm working on needs to have quite a lot of global fields:

- Brewery
- Type of brew
- Alcohol percentage
- And so on

Luckily for us, Vendure supported this out of the box, and in this article, I'll show you how to set it up.

> Note: This involves more graphical interaction over development.

## Manually creating facets

You can spool up your Vendure server and visit the admin UI at [http://localhost:3000/admin/](http://localhost:3000/admin/).

Move to Facets in the left sidebar menu; if you opt for the demo products, you'll see some already created facets.

![Facets in Vendure](https://cdn.hashnode.com/res/hashnode/image/upload/v1671168095489/HULP_exVU.png)

In the top right, you'll have the option to create new facets containing a name and optional code.
Once you've chosen a name, you'll be able to add facet values. These are all the unique values for that facet.

I've created a Test facet with `foo` and `bar` values in the example below.

![New facet](https://cdn.hashnode.com/res/hashnode/image/upload/v1671168263067/AgAK26snY.png)

This is all great and well, but it doesn't do much. So we must move to one of our products to leverage these facets.

When you open a product, you should see on the right side there is a button to add facets.
The important part to note here is that it searches based on the values, not the name.

I'm trying to add the `Foo` value in this case.

![New facet to product](https://cdn.hashnode.com/res/hashnode/image/upload/v1671168402723/-GXXiDyi8.png)

## Importing facets

As mentioned in the [Vendure import article](https://daily-dev-tips.com/posts/vendure-importing-data/), we can use an import to manage many products.

It's good to note that this also supports the import of facets!

How it works is that you define `variantFacets` as a column, and inside, you can column deliminate all the values like so:

<pre>
test:Foo|test:Bar
</pre>

This would add both the `Foo` and the `Bar` value.
The `test` part is the code of the facet that we created.

This is super helpful in creating an excellent structured database with all my products organized with custom facets.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
