import Link from "next/link";
function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <Link href="/">
          <a className="logo">PUX.</a>
        </Link>
        <ul className="nav__items">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Portfolio</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Skills</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Photoshop</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">About</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/">
              <a className="nav__btn">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
