import Header from '../components/Header';
import Main from '../components/Main';
import Testimonials from '../components/Testimonial';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Main />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;