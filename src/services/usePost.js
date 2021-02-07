import db from './firebaseConfig';
import { useState, useEffect } from 'react';

const usePost = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // 4. Fetch the data from the database
  useEffect(() => {
    const fetchDb = db.collection('posts');

    fetchDb.get()
      .then(response => {
        const fetchedPosts = [];
        response.docs.forEach(post => {
          const fetchedPost = {
            id: post.id,
            ...post.data()
          };
          fetchedPosts.push(fetchedPost);
        });
        setPosts(fetchedPosts);
        setIsLoading(false);
      })
      .catch(error => {
        error = 'Houve um erro'
        setError(error);
      });


  }, []);

  return { posts, isLoading, error }
}

export default usePost;