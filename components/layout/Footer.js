import Link from "next/link";
import ListOfLinks from "../shared/lists/ListOfLinks";
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
                <div className="icons-array">
                  <IconAnchor
                    src="/img/svg/github-alt.svg"
                    href="https://github.com/Dangereye"
                  />
                  <IconAnchor src="/img/svg/linkedin-alt.svg" />
                </div>
              </div>
              <ListOfLinks
                component="footer"
                title="Projects"
                list={[
                  { text: "Movies", link: "http://localhost:3000/project/1" },
                  {
                    text: "The Weather",
                    link: "http://localhost:3000/project/2",
                  },
                  {
                    text: "Star Wars",
                    link: "http://localhost:3000/project/3",
                  },
                  {
                    text: "Portfolio",
                    link: "http://localhost:3000/project/4",
                  },
                ]}
              />
              <div className="list">
                <h3 className="list__title">Downloads</h3>
                <ul className="list__items">
                  <li className="list__item">
                    <a href="/cv.txt" className="list__link" download>
                      Curriculum Vitae
                    </a>
                  </li>
                </ul>
              </div>
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
