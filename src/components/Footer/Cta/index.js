import './Cta.css';
import { useForm } from 'react-hook-form';

const Cta = () => {

  const {register, handleSubmit, errors} = useForm();

  function onSubmit(data) {
    console.log(data)
  }



  return (
    <section className="cta">
      <h2 className="cta-title">
        Get early access today
      </h2>
      <p className="cta-description">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
        questions, our support team would be happy to help you.
      </p>
      <div className="cta-form">
        <form onSubmit={handleSubmit(onSubmit)} className="input-container">
          <input 
            type="email"
            name="email"
            ref={register({
              required: "Please enter your email address",
              pattern: {
                values:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please Enter a valid email address",
              }
            })}
            placeholder="email@example.com" />
          <input type="submit" value="Get Started For Free" />
        </form>
        {errors.email && <div className="error">{errors.email.message}</div>}
      </div>
    </section>
  );
}

export default Cta;