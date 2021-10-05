function FormInput({ type, name, value, onChange, placeholder, required }) {
  return (
    <div className="form__group">
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
  name: "undefined",
  value: "undefined",
  onChange: () => {
    return;
  },
  placeholder: "undefined",
  required: false,
};
export default FormInput;
