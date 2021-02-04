import Header from '../components/Header';
import Main from '../components/Main';
import Testimonials from '../components/Testimonial';
import Footer from '../components/Footer';
import Cover from '../components/Cover';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Cover />
      <Main />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;