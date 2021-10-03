import TextInput from "./components/forms/TextInput";
import EmailInput from "./components/forms/EmailInput";
import TextArea from "./components/forms/TextArea";
import Button from "./components/shared/Button";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__subtitle">Let's talk</div>
        <h2 className="section__title">Contact Me</h2>
        <div className="section__block">
          <form className="form">
            <TextInput name="company" />
            <TextInput name="name" required />
            <EmailInput />
            <TextInput name="subject" required />
            <TextArea name="message" required />
            <Button type="submit" name="submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
