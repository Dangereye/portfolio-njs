function Anchor({ name, style, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={`btn ${style}`}>
      {name}
    </a>
  );
}

Anchor.defaultProps = {
  name: "Name",
  style: "btn btn-primary btn-large",
  link: "/",
};

export default Anchor;
