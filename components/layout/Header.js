function Header() {
  const ScrollToSection = () => {};
  return (
    <header className="header">
      <div className="container">
        <div className="subheading">Front-end Developer.</div>
        <h1>Craig Puxty</h1>
        <p className="lead">
          Projects created with <span>p</span>assion, producing great{" "}
          <span>u</span>ser e<span>x</span>periences!
        </p>
        <button
          className="btn btn--secondary btn--large"
          onClick={ScrollToSection}
        >
          Recent Projects
        </button>
      </div>
    </header>
  );
}

export default Header;
