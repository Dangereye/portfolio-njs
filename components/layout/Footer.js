import Link from "next/link";
import ListOfLinks from "../shared/ListOfLinks";
import IconAnchor from "../shared/IconAnchor";
import Button from "../shared/Button";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="grid grid--multiple">
              <div>
                <Link href="/">
                  <a className="footer__logo">pux.</a>
                </Link>
                <p className="footer__caption">
                  Projects created with passion, producing great user
                  experiences!
                </p>
                <div className="footer__icons">
                  <IconAnchor src="/img/svg/github-alt.svg" />
                  <IconAnchor src="/img/svg/linkedin-alt.svg" />
                </div>
              </div>
              <ListOfLinks
                component="footer"
                title="Projects"
                list={[
                  { text: "Movies", link: "/" },
                  { text: "The Weather", link: "/" },
                  { text: "Star Wars", link: "/" },
                  { text: "Portfolio", link: "/" },
                ]}
              />
              <ListOfLinks
                component="footer"
                title="Downloads"
                list={[{ text: "Curriculum Vitae", link: "/" }]}
              />
              <ListOfLinks
                component="footer"
                title="Contact"
                list={[{ text: "Send Email", link: "/#contact" }]}
              />
            </div>
            <div className="footer__back-to-top">
              <Button name="Back To Top" />
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">
          <div className="copyright__text">&copy; Craig Puxty, 2021.</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
