---
layout: ../../layouts/Post.astro
title: 'Git create an empty branch without history'
metaTitle: 'Git create empty Branch without History [2024]'
metaDesc: 'Tutorial to create an orphan branch without history, making your GitHub repository ready for new beginnings.'
image: /images/14-11-2021.jpg
date: 2021-11-14T03:00:00.000Z
modifiedDate: 2024-02-10T03:00:00.000Z
tags:
  - git
---

Sometimes you need a separate **empty branch** in your **git repository**.

In my case, because I'm going to switch frameworks. So it's easier to start with an empty repo and work my way up from there.

This repo should have no files in it, and no **git history**:

![empty git branch](https://cdn.hashnode.com/res/hashnode/image/upload/v1635918638195/f-CU0lTxu.png)

Let's get started!

## Introducing Orphan Branches

For this purpose, we can use an **orphan branch**.
A Git orphan branch is a **new branch** that starts **without any commit history**, effectively making it an independent line of development separate from the rest of the repository.

Typically you use an orphaned git branch to create new unrelated files in the repo, for example when you code something up from scratch again.

## How to create an empty branch without history

Let's go through the process of creating an empty orphan branch.

We'll use our existing git test project, which you can find [here on GitHub](https://github.com/rebelchris/git-test).

![Git branch with files and history](https://cdn.hashnode.com/res/hashnode/image/upload/v1635918397239/BVfj0dfXI.png)

As you can see in the image, it has some files and a commit history here.

From our terminal, navigate to the root folder of the repository.

Run this command to create an empty orphan branch:

```bash
git checkout --orphan version-2
```

Now we need to remove files that might have been staged in this process. 

Next, run the following git command:

```bash
git rm -rf .
```
The command is used to recursively (-r) and forcefully (-f) remove every file and directory in the current directory (.)

Then we have two options: 
- We could add a new readme file
- push an empty commit as first commit

You probably already know the steps to add a readme file, so let's do the **empty commit**.

```bash
git commit --allow-empty -m "Starting a new version"
```
This git command creates a new commit. The `--allow-empty` doesn't require any changes to be committed.

Next, we do an empty push to the new branch.

```bash
git push origin version-2
```

![empty git branch](https://cdn.hashnode.com/res/hashnode/image/upload/v1635918638195/f-CU0lTxu.png)

As you can see, the branch is empty and has no git history!

This is a perfect way to get started on a new framework or to recode of your application.

On **Github** you can view the [orphan branch](https://github.com/rebelchris/git-test/tree/version-2).

### Thank you for reading, and let's connect!

Thank you for reading my blog. Feel free to subscribe to my email newsletter and connect on [Facebook](https://www.facebook.com/DailyDevTipsBlog) or [Twitter](https://twitter.com/DailyDevTips1)
