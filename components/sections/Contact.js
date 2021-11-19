import { useRouter } from "next/router";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import FormInput from "../forms/FormInput";
import TextArea from "../forms/TextArea";
import Button from "../shared/Button";
import Feedback from "../shared/Feedback";
import useAnimation from "../../hooks/useAnimation";

function Contact() {
  const router = useRouter();
  const animate = useAnimation();

  const data = {
    company: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const status = {
    message: "",
    loading: false,
    success: false,
    error: false,
  };

  const [formData, setFormData] = useState(data);
  const [feedback, setFeedback] = useState(status);
  const [animIsLoaded, setAnimIsLoaded] = useState(false);

  useEffect(() => {
    if (!animIsLoaded) {
      animate("#contact", ".contact-fadeup");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);

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
    setFeedback({ ...feedback, loading: true });
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
          setFeedback({
            ...feedback,
            message: "Message sent.",
            success: true,
            loading: false,
          });
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
        <div className="section__subtitle center contact-fadeup">
          Let&apos;s talk
        </div>
        <h2 className="section__title center contact-fadeup">Contact Me</h2>
        <div className="section__block">
          <form className="form " onSubmit={handleSubmit}>
            <Feedback status={feedback} />

            <FormInput
              name="company"
              value={formData.company}
              onChange={handleUpdate}
              placeholder="Company name"
              style="contact-fadeup"
            />
            <FormInput
              name="name"
              value={formData.name}
              onChange={handleUpdate}
              placeholder="Your name"
              style="contact-fadeup"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleUpdate}
              placeholder="name@provider.com"
              style="contact-fadeup"
              required
            />
            <FormInput
              name="subject"
              value={formData.subject}
              onChange={handleUpdate}
              placeholder="Subject title"
              style="contact-fadeup"
              required
            />
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleUpdate}
              placeholder="Your message"
              style="contact-fadeup"
              required
            />
            <Button
              type="submit"
              name={feedback.loading ? "sending" : "submit"}
              style="btn--primary btn--large contact-fadeup btn--icon"
              icon={feedback.loading && <span className="spinner"></span>}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
