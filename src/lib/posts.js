async function load() {
  const fetchedPosts = import.meta.glob('../pages/posts/*.md', { eager: true });

  const getPost = async (key) => {
    const url = key.replace('../pages/', '/').replace('.md', '/');
    const awaitedPost = await fetchedPosts[key];
    return {...awaitedPost.frontmatter, url, key };
  };

  const mappedPosts = Object.keys(fetchedPosts).map((key) => {
    return getPost(key);
  });

  return await Promise.all(mappedPosts);
}

let _posts;

export async function getAllPosts() {
  _posts = _posts || load();

  return await _posts;
}
