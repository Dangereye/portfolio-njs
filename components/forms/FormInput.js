function FormInput({
  type,
  style,
  name,
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div className={`form__group ${style}`}>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

FormInput.defaultProps = {
  type: "text",
  name: "Name",
  value: "",
  onChange: () => {
    return;
  },
  placeholder: "placeholder",
  required: false,
};
export default FormInput;
