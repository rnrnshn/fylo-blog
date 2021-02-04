import { useState } from 'react';
import profileOne from '../../assets/images/profile-1.jpg';
import profileTwo from '../../assets/images/profile-2.jpg';
import profileThree from '../../assets/images/profile-3.jpg';
import './Testimonial.css';

const Testimonials = () => {
  const [quotes, setQuote] = useState([
    {
      id: 1,
      name: 'Satish Patel',
      position: 'Founder and CEO',
      place: 'Huddle',
      citation: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well- oiled collaboration machine.',
      image: profileOne
    },
    {
      id: 2,
      name: 'Mario Bros',
      position: 'Desginer',
      place: 'Konami',
      citation: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      image: profileTwo
    },
    {
      id: 3,
      name: 'Merry Jane',
      position: 'Developer',
      place: 'Facebook',
      citation: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
      image: profileThree
    }

  ])

  return (
    <section className="quote">
      {quotes.map((quote) => (
        <aside className="quote-card" key={quote.id}>
          <p className="quote-citation">{quote.citation}</p>
          <div className="quote-info">
            <img className="quote-img" src={quote.image} alt={quote.title} />
            <div className="quote-text">
              <h4 className="quote-name">{quote.name}</h4>
              <p className="quote-job-info">
                {quote.name}, {quote.place}
              </p>
            </div>
          </div>
        </aside>
      ))}
    </section>
  );
}

export default Testimonials;