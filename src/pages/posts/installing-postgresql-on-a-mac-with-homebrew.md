---
layout: ../../layouts/Post.astro
title: 'Install PostgreSQL on Mac with Homebrew'
metaTitle: 'How to install PostgreSQL on a Mac [2024 Tutorial]'
metaDesc: 'Quick start Postgres DB on Mac with Homebrew: Install & launch brew PostgreSQL effortlessly.'
image: /images/12-01-2022.jpg
date: 2022-01-12T03:00:00.000Z
modifiedDate: 2024-02-02T03:00:00.000Z
tags:
  - postgres
---

Suppose you had a look at the <a href="https://insights.stackoverflow.com/survey/2021" target="_blank">2021 stack overflow developer survey results</a>.

In that case, you may see that **PostgreSQL**, or *Postgres* for short, is now the second most loved **database**.
<img src="https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e815f630-26ec-4ce2-6568-f1d655cc3600/article" alt="Stack overflow most loved databases 2021" width="750" height="500" />

I personally love Postgres as well. Hence, time to dedicate an article on **how to set up PostgreSQL on a Mac**.

In this tutorial you will learn to **install Postgres** on a Macintosh using **Homebrew**, plus we will explore the database a bit 👀.

If you haven't used Homebrew before, check out my article on [using Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

## How to install Postgres with Homebrew

The first thing we want to do is to **install Postgres DB**.

Before running any install command in Homebrew, it's good to ensure your installation is up to date.

```bash
brew update
```

Now is the time; to install PostgreSQL run this command:

```bash
brew install postgresql
```

Once the installation is finished, you should see this output line amongst some other information:

```bash
This formula has created a default database cluster with:
  initdb --locale=C -E UTF-8 /opt/homebrew/var/postgres
```

That means the Postgres DB is installed and you are set!

## Start & Manage a Postgres database

To **start the database**, run the following command in the terminal:

```bash
brew services start postgresql
```

And to **stop the Postgres database** from running:

```bash
brew services stop postgresql
```

Once the DB is up and running, we want to create a **root user** to log in and interact with the database.

```bash
psql postgres
```

This will log you into the Postgres server.

![Postgres server login](https://cdn.hashnode.com/res/hashnode/image/upload/v1641191010341/Zl0poJBew.png)

From here, you can create a new user with a password.

```bash
CREATE ROLE chris WITH LOGIN PASSWORD 'password';
ALTER ROLE chris CREATEDB;
```

My user's name is `chris`, and my password is super secure as: `password`.

> Note: Use secure passwords, please. This is just a demo setup.

## Connect to PostgreSQL DB

The easiest way to connect to Postgres is via the visual database connection tools.

If you are unsure what client to use: I've written down my [top 5 SQL database clients](https://daily-dev-tips.com/posts/top-5-mysql-clients-for-mac/).

We'll use [TablePlus](https://daily-dev-tips.com/posts/top-5-mysql-clients-for-mac/#heading-1-tableplus) to connect to our newly created PostgreSQL DB.

- Open the app, and create a "new connection".
- For the type, you can choose "PostgreSQL".

<img src="https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/3c6a3e97-3475-4a11-7b1f-7e47e2e1f200/article" alt="TablePlus new PostgreSQL database connection" width="750" height="500" />

As for the connection details, you should use:

- User: The one you just created, in my case `chris`.
- Password: The password you set, in my case, `password`.
- Database: This will be `postgres`.

The rest of the **data** should already be set up correctly.

You can test the connection by clicking the "Test" button at the bottom. It should turn everything green.

<img src="https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/266b2095-90e3-4056-ebf1-990896472e00/article" alt="Postgres connection green" width="750" height="500" />

And that's it. You are now connected to your Postgres database 🚀

### Thank you for reading, and let's connect!

Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
