const API_URL = "/wp-api";

export async function getPosts() {
  const response = await fetch("http://wordpress-react.test/wp-json/wp/v2/posts");

  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status}`);
  }

  return response.json();
}