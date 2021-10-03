function TextArea({ name, required = false }) {
  return (
    <div className="form__group">
      <label htmlFor={name}>{name}</label>
      <textarea name={name} rows="10" required={required}></textarea>
    </div>
  );
}

export default TextArea;
