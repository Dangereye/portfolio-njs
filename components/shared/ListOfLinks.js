import Link from "next/link";
function ListOfLinks({ component, CloseMenu, title, list }) {
  return (
    <div className="list">
      <h3 className="list__title">{title}</h3>
      <ul className="list__items">
        {list.map((item) => (
          <li className="list__item" key={`${component}-${item.text}`}>
            <Link href={item.link}>
              <a className="list__link" onClick={CloseMenu}>
                {item.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfLinks;
