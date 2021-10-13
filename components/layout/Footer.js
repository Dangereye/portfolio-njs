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
              <ListOfLinks />
              <ListOfLinks />
              <ListOfLinks />
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
