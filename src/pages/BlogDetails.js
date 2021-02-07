import { useParams } from "react-router-dom";
import usePost from '../services/usePost';
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const { id } = useParams();
  const { posts, isLoading, error } = usePost();

  return (
    <div className="blogDetails">
      <Header />
      <div className="blogDetailsContainer">
        <h1> Blog Details  - {id}</h1>
        {error && <div> {error}</div>}
        {isLoading && <div> Loading...</div>}
      </div>
      <Footer />
    </div>

  );
}

export default BlogDetails;