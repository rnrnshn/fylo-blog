import { Link } from 'react-router-dom';
import usePost from '../services/usePost';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Blog.css';

const Blog = () => {
  const { posts, isLoading, error } = usePost();

  return (
    <section className="blog">
      <Header />
      <div className="blog-container">
        <h1 className="blog-list-title" > Blog Lists </h1>
        {error && <div> {error}</div>}
        {isLoading && <div> Loading...  </div>}
        {posts && posts.map(post => (
          <article className="blog-card" key={post.id}>
            <h3 className="blog-title">{post.title}</h3>
            <p>{post.body.slice(0, 148)}</p>
            <div className="blog-author">
              <strong>Author: </strong>
              <em>{post.author}</em></div>
            <Link
              className="read-more"
              to={`blogs/${post.id}`
              }>
              Read more
            </Link>
          </article>
        ))}
      </div>
      <Footer />
    </section >
  );
}

export default Blog;