const API_URL = import.meta.env.VITE_WORDPRESS_API_URL;

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  const posts = await response.json();

  console.log(posts);

  return posts;
}