import coverImage from '../../../assets/images/illustration-intro.png';
import Button from '../../Button';
import './Cover.css';

const Cover = () => {
  return (
    <section className="header-cover">
      <section className="cover-image">
        <img src={coverImage} alt="" className="illustration-img" />
      </section>
      <section className="cover-text">
        <h1 className="cover-title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="cover-description">
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
        </p>
        <Button className="cover-bnt" />
      </section>
    </section>
  )
}

export default Cover;