import Footer from '../components/Footer';
import Header from '../components/Header';
import './New.css';
// import db from '../services/firebaseConfig';

const New = () => {
  // db.collection('posts').add({
  //   title: "How to write a good commit message",
  //   body: `A commit message is a short description of the changes you've made to a file added before committing the changes.
  //   Good commit messages are important not only for others who you may be collaborating on the project but also for you, to keep track of all your commits and knowing exactly what changes where maybe during that particular commit.   
  //   Even if you're working on a personal project, I'd recommend that you start getting in the habit of writing good commit messages.  
  //   This is the format that I use most of the time (this may change depending on your preference or organization your working for):`,
  //   author: "Leo"
  // })

  //   .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch((error) => {
  //     console.error("Error adding document: ", error);
  //   });


  return (
    <div className="create-new">
      <Header />
      <div className="new">
        <form className="create-post-container">
          <label className="create-post-title">Add title</label>
          <input
            type="text"
            className="create-post-title-input"
            placeholder="Add title..."
          />
          <label className="create-post-title">Add post</label>
          <textarea
            type="text"
            className="create-post-title-input"
            placeholder="Write article..."
          />
          <label className="create-post-title">Add author</label>
          <input
            type="text"
            className="create-post-author-input"
            placeholder="Add author..."
          />
          <button className="create-post-submit">Add post</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default New;