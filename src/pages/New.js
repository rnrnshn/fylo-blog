import db from '../services/firebaseConfig';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './New.css';

const New = () => {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { title, article, author };

    db.collection('posts').add({
      title: post.title,
      body: post.article,
      author: post.author
    })
      .then((docRef) => {
        history.push('/Blog');
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }


  return (
    <div className="create-new">
      <Header />
      <div className="new">
        <form onSubmit={handleSubmit} className="create-post-container">
          <label className="create-post-title">Add title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="create-post-title-input"
            placeholder="Add title..."
          />
          <label className="create-post-title">Add post</label>
          <textarea
            type="text"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            className="create-post-title-input"
            placeholder="Write article..."
          />
          <label className="create-post-title">Add author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="create-post-author-input"
            placeholder="Add author..."
          />
          <button className="create-post-submit">Add post</button>
        </form>
        <div className="create-post-preview">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default New;