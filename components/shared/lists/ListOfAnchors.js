function ListOfAnchors({ component, title, list }) {
  return (
    <div className="list">
      <h3 className="list__title">{title}</h3>
      <ul className="list__items">
        {list.map((item) => (
          <li className="list__item" key={`${component}-${item.text}`}>
            <a
              href={item.link}
              className="list__link"
              target="_blank"
              rel="noreferrer"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

ListOfAnchors.defaultProps = {
  component: "Component",
  title: "Title",
  list: [
    { text: "A", link: "/" },
    { text: "B", link: "/" },
    { text: "C", link: "/" },
  ],
};

export default ListOfAnchors;
