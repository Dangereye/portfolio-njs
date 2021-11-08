import { useRouter } from "next/router";
import emailjs from "emailjs-com";
import { useState } from "react";
import FormInput from "../forms/FormInput";
import TextArea from "../forms/TextArea";
import Button from "../shared/Button";
import Feedback from "../shared/Feedback";

function Contact() {
  const router = useRouter();

  const data = {
    company: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const status = {
    message: "",
    success: false,
    error: false,
  };

  const [formData, setFormData] = useState(data);
  const [feedback, setFeedback] = useState(status);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.replace(/[^\w\d!"£$%^&*()_-\s#'@,.?]/g, ""),
    });
  };

  const resetFeedback = () => {
    setTimeout(() => {
      setFeedback(status);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        e.target,
        `${process.env.NEXT_PUBLIC_USER_ID}`
      )
      .then(
        (result) => {
          router.push("/#contact");
          setFeedback({ ...feedback, message: "Message sent.", success: true });
          setFormData(data);
          resetFeedback();
        },
        (error) => {
          router.push("/#contact");
          setFeedback({
            ...feedback,
            message: "Oops! Something went wrong. Please try again.",
            error: true,
          });
          resetFeedback();
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__subtitle center">Let&apos;s talk</div>
        <h2 className="section__title center">Contact Me</h2>
        <div className="section__block">
          <form className="form" onSubmit={handleSubmit}>
            <Feedback status={feedback} />

            <FormInput
              name="company"
              value={formData.company}
              onChange={handleUpdate}
              placeholder="Company name"
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
