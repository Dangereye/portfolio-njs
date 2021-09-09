import Link from "next/link";
function Navbar({ isNavOpen, setIsNavOpen }) {
  const ToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div
          className={`nav__mobile-menu ${isNavOpen ? "active" : ""}`}
          onClick={ToggleNav}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Link href="/">
          <a className="logo">PUX.</a>
        </Link>
        <ul className="nav__items">
          <li className="nav__item">
            <Link href="/#portfolio">
              <a className="nav__link">Portfolio</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/#skills">
              <a className="nav__link">Skills</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/#photoshop">
              <a className="nav__link">Photoshop</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/#about">
              <a className="nav__link">About</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/#contact">
              <a className="btn btn--primary btn--small">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
