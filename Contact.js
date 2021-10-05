import { useState } from "react";
import FormInput from "./components/forms/FormInput";
import TextArea from "./components/forms/TextArea";
import Button from "./components/shared/Button";

function Contact() {
  const data = {
    company: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(data);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__subtitle">Let's talk</div>
        <h2 className="section__title">Contact Me</h2>
        <div className="section__block">
          <form className="form" onSubmit={handleSubmit}>
            <FormInput
              name="company"
              value={formData.company}
              onChange={handleUpdate}
              placeholder="Your company name"
            />
            <FormInput
              name="name"
              value={formData.name}
              onChange={handleUpdate}
              placeholder="Your name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleUpdate}
              placeholder="name@provider.com"
              required
            />
            <FormInput
              name="subject"
              value={formData.subject}
              onChange={handleUpdate}
              placeholder="Subject title"
              required
            />
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleUpdate}
              placeholder="Your message"
              required
            />
            <Button type="submit" name="submit" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
