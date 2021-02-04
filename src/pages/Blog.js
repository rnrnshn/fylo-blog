import Footer from '../components/Footer';
import Header from '../components/Header';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <Header />
      <div className="blog-container">
        <h1 className="blog-list-title" > Blog Lists </h1>

        <article className="blog-card">
          <h3 className="blog-title">
            Lorem ipsum dolor sit amet.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus placeat qui, sunt reiciendis commodi quisquam error corrupti ratione soluta fugiat?
          </p>
          <div className="blog-author"><strong>Author: </strong> <em>Olimpio</em></div>
          <a className="read-more" href="/read-more">Read more</a>
        </article>
      </div>
      <Footer />
    </section>
  );
}

export default Blog;