function MobileNav({ isNavOpen }) {
  return (
    <div className={`mobile-nav ${isNavOpen ? "active" : ""}`}>
      <h3>Mobile navigation</h3>
      <ul>
        <li>link</li>
      </ul>
    </div>
  );
}

export default MobileNav;
