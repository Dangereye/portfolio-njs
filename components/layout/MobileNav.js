import ListOfLinks from "../shared/ListOfLinks";

function MobileNav({ isNavOpen, setIsNavOpen }) {
  const CloseMenu = () => {
    setIsNavOpen(false);
  };
  return (
    <div className={`mobile-nav ${isNavOpen ? "active" : ""}`}>
      <ListOfLinks
        title="Navigation"
        component="mobile-nav"
        list={[
          { text: "Portfolio", link: "/#portfolio" },
          { text: "Skills", link: "/#skills" },
          { text: "Photoshop", link: "/#photoshop" },
          { text: "About", link: "/#about" },
        ]}
        onClick={CloseMenu}
      />

      <div className="list">
        <h3 className="list__title">Downloads</h3>
        <ul className="list__items">
          <li className="list__item">
            <a
              href="/cv.txt"
              className="list__link"
              onClick={CloseMenu}
              download
            >
              Curriculum Vitae
            </a>
          </li>
        </ul>
      </div>

      <ListOfLinks
        title="Contact"
        component="mobile-nav"
        list={[{ text: "Send Email", link: "/#contact" }]}
        onClick={CloseMenu}
      />
    </div>
  );
}

export default MobileNav;
