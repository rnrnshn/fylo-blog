import stayProductive from '../../../assets/images/illustration-stay-productive.png';
import './Post.css';
import { FaArrowRight } from 'react-icons/fa'

const Post = () => {
  return (
    <div className="post">
      <div className="post-item">
        <img className="post-image" src={stayProductive} alt="Stay Productive" />
        <div className="post-text">
          <h3 className="post-title">
            Stay productive, wherever you are.
          </h3>
          <p className="post-description">
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.
            Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.
          </p>
          <a href="/" className="read-more">
            <span className="read-text">See how Fylo works </span>
            <span className="read-icon"> <FaArrowRight className="arrow"/> </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;