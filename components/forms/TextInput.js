function TextInput({ name, required = false }) {
  return (
    <div className="form__group">
      <label htmlFor={name}>{name}</label>
      <input type="text" name={name} required={required} />
    </div>
  );
}
export default TextInput;
