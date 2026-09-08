import { useEffect, useState } from "react";
import { getPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>My WordPress Blog</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />

          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />

          <hr />
        </article>
      ))}
    </div>
  );
}

export default App;