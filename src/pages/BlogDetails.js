import { useHistory, useParams } from "react-router-dom";
import db from '../services/firebaseConfig';
import usePost from '../services/usePost';
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const { posts, isLoading, error } = usePost();
  const history = useHistory();
  const deletePost = () => {
    db.collection("posts").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      history.push('/Blog');
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  return (
    <div className="blogDetails">
      <Header />
      <div className="blogDetailsContainer">
        {error && <div> {error}</div>}
        {isLoading && <div> Loading...</div>}
        {posts && posts.filter(post => post.id === id).map(post => (
          <article className="blog-d-card" key={post.id}>
            <h2 className="blog-d-title">{post.title}</h2>
            <p className="blog-d-body">{post.body}</p>
            <div className="blog-d-author">
              <strong>Author: </strong>
              <em>{post.author}</em></div>
            <button onClick={deletePost} className="delete-post">
              Delete post
            </button>
          </article>
        ))}
        <div className="separator"></div>
      </div>
      <Footer />
    </div>

  );
}

export default BlogDetails;