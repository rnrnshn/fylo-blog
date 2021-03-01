import { useState } from 'react';
import imageA from '../../assets/images/icon-access-anywhere.svg';
import imageB from '../../assets/images/icon-security.svg';
import imageC from '../../assets/images/icon-collaboration.svg';
import imageD from '../../assets/images/icon-any-file.svg';
import './Main.css';
import Post from './Post'

const Main = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      title: 'Access your files, anywhere',
      image: imageA,
      text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
    },
    {
      id: 2,
      title: 'Security you can trust',
      image: imageB,
      text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
    },
    {
      id: 3,
      title: 'Real-time collaboration',
      image: imageC,
      text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
    },
    {
      id: 4,
      title: 'Store any type of file',
      image: imageD,
      text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
    }
  ]);

  return (
    <main className="main-container">
      <div className="card-container">
        {card.map((card) => (
          <aside className="main-card" key={card.id}>
            <img className="card-image" src={card.image} alt={card.title} />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.text}</p>
          </aside>
        ))}
      </div>

      <Post />
    </main>
  );
}

export default Main;