function EmailInput() {
  return (
    <div className="form__group">
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        placeholder="name@provider.com"
        required
      />
    </div>
  );
}

export default EmailInput;
