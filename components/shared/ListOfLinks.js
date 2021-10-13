import Link from "next/link";
function ListOfLinks({ component, onClick, title, list }) {
  return (
    <div className="list">
      <h3 className="list__title">{title}</h3>
      <ul className="list__items">
        {list.map((item) => (
          <li className="list__item" key={`${component}-${item.text}`}>
            <Link href={item.link}>
              <a className="list__link" onClick={onClick}>
                {item.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

ListOfLinks.defaultProps = {
  component: "Component",
  title: "Title",
  list: [
    { text: "A", link: "#" },
    { text: "B", link: "#" },
    { text: "C", link: "#" },
  ],
  onClick: () => {
    return;
  },
};

export default ListOfLinks;
