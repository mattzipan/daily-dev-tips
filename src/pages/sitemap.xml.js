import { Feed } from 'feed';
import { getAllPosts } from '../lib/posts.js';

export async function get() {
  const feed = new Feed({
    title: 'daily-dev-tips.com',
    description: 'Daily development related tips',
    id: 'https://daily-dev-tips.com/',
    link: 'https://daily-dev-tips.com/sitemap.xml',
    language: 'en',
    image: 'https://daily-dev-tips.com/assets/placeholder.png',
    favicon: 'https://daily-dev-tips.com/favicon.ico',
    author: {
      name: 'Chris Bongers',
      email: 'info@daily-dev-tips.com',
    },
    feedLinks: {
      rss: 'https://daily-dev-tips.com/sitemap.xml',
      atom: 'https://daily-dev-tips.com/sitemap.xml',
    },
  });

  const allPosts = (await getAllPosts())
    .filter((a) => new Date(a.date) <= new Date())
    .sort((a, b) => b.date.localeCompare(a.date));

  allPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      content: post.metaDesc,
      link: `https://daily-dev-tips.com${post.url}`,
      id: `https://daily-dev-tips.com${post.url}`,
      date: new Date(post.modifiedDate || post.date),
    });
  });

  return { body: feed.atom1() };
}
