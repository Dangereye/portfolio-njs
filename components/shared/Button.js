function Button({ type, style, name, func, icon }) {
  return (
    <button type={type} className={`btn ${style}`} onClick={func}>
      {name}
      {icon && icon}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  style: "btn--primary btn--large",
  name: "name",
  func: () => {
    return;
  },
};

export default Button;
