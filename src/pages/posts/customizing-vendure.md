---
layout: ../../layouts/Post.astro
title: 'Customizing vendure'
metaTitle: 'Customizing vendure'
metaDesc: 'A glance at how we can customize Vendure to fit our needs'
ogImage: /images/18-12-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/360d76f4-21ed-4cca-f66f-e4c0a2be6e00
date: 2022-12-18T03:00:00.000Z
tags:
  - vendure
---

Even though Vendure is a pretty significant project out of the box, in some cases, we might want to go in and modify some elements to work to our specific use case.

In this article, I'll take a high-level look at some elements we can customize within Vendure.

The cool part is that it mainly works via changing the one `vendure-config.ts` file.

## Customizing models

The first thing one might want to do is add custom fields to any of the existing Entities.
I'm surprised by how easy this process is and how slick everything works.

Open your `vendure-config.ts` file and add or modify the `customFields` section.
In my case, I'll add a custom field to the product entity. You can give it any name you'd like.

```js
export const config: VendureConfig = {
  customFields: {
    Product: [{ name: 'myCustomField', type: 'string' }],
  },
};
```

Since this will introduce a database change, we'll need to generate a new migration.
Don't worry. Vendure will take care of all the heavy lifting.

```bash
npm run migration:generate customField
```

And now, we can run our server, and everything will work.
If we visit a product, we should see the custom field.

![Custom field in Vendure](https://cdn.hashnode.com/res/hashnode/image/upload/v1671257802939/mmxKD_mmd.png)

## Customizing the order process

Besides customizing the fields, you might want to add additional steps in the order process.

For instance, you might want to validate some aspects of the order or the customer.
This could be customer should be a valid tax-related customer, or an order above a certain weight can't be shipped.

So let's take the first example as the [Vendure docs](https://www.vendure.io/docs/developer-guide/customizing-the-order-process/) describe this best.

Currently, we would have the following state:

```plaintext
AddingItems > ArrangingPayment
```

We want it to be:

```plaintext
AddingItems > ValidateCustomer > ArrangingPayment
```

The first thing we need to do is define a new state. This is a physical text and doesn't do anything yet.

Let's create a new file to separate things: `validate-customer.ts`.

```js
import { CustomOrderProcess } from '@vendure/core';

export const validateCustomer: CustomOrderProcess<'ValidateCustomer'> = {
  transitions: {
    AddingItems: {
      to: ['ValidateCustomer'],
      merge strategy: 'replace',
    },
    ValidateCustomer: {
      to: ['ArrangingPayment', 'AddingItems'],
    },
  },
};
```

As you can see, this tells what transitions are valid to make.
We can then open our `vendure-config.ts` and load our new process.

```js
export const config: VendureConfig = {
  orderOptions: {
    process: [validateCustomer],
  },
};
```

Now let's make sure this intercepts something. Go back to the `validate-customer.ts` file and add the following function.

```js
export const validateCustomer: CustomOrderProcess<'ValidateCustomer'> = {
  // Transitions go here

  // The logic for enforcing our validation goes here
  async onTransitionStart(fromState, toState, data) {
    if (fromState === 'ValidateCustomer' && toState === 'ArrangingPayment') {
      const isValid = await validateTheActualCustomer(data.order.customer);
      if (!isValid) {
        // Returning a string is interpreted as an error message.
        // The state transition will fail.
        return `The customer is not valid`;
      }
    }
  },
};
```

This is simply a mockup, and you should create the actual validation function to evaluate the customer on specific fields.
If we return a string, it's handled as an error state, and the transition won't happen.

## Generic modifiers

The above two are very common modifiers, but Vendure comes packed with more.

For instance, I needed to modify the stock level output in one of my shops.
By default, it only shows things as "low stock" and never the actual number.
On my webshop, it was needed to show the exact stock at hand.

To achieve that, we can open the `vendure-config.ts` and create a new function.

```js
export class MyStockDisplayStrategy implements StockDisplayStrategy {
  getStockLevel(
    ctx: RequestContext,
    productVariant: ProductVariant,
    saleableStockLevel: number
  ): string {
    return saleableStockLevel.toString();
  }
}
```

This is a function to extend the default stock display strategy. In my case, I return the physical stock level as a string.
To ensure Vendure uses this value, we can modify the config to load that.

```js
export const config: VendureConfig = {
  catalogOptions: {
    stockDisplayStrategy: new MyStockDisplayStrategy(),
  },
};
```

And now, the stock levels on the site will show the exact amount you have left in stock.

This is just one example, Vendure comes packed with small little hooks that we can use to customize our webshop and system.
I love that they made it easy and hassle-free to adjust the system to your needs.

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
