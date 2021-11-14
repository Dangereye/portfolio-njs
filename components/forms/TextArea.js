function TextArea({ name, style, value, onChange, placeholder, required }) {
  return (
    <div className={`form__group ${style}`}>
      <label htmlFor={name}>{name}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
}
TextArea.defaultProps = {
  name: "undefined",
  value: "undefined",
  onChange: () => {
    return;
  },
  placeholder: "undefined",
  required: false,
};

export default TextArea;
