import './Cta.css';

const Cta = () => {
  return (
    <section className="cta">
      <h2 className="cta-title">
        Get early access today
      </h2>
      <p className="cta-description">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
        questions, our support team would be happy to help you.
      </p>
      <div className="input-container">
        <input type="text" placeholder="email@example.com" />
        <input type="submit" value="Get Started For Free" />
      </div>
    </section>
  );
}

export default Cta;