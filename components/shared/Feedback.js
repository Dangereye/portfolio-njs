function Feedback({ status }) {
  return (
    <div
      className={
        status.success
          ? "form__feedback success"
          : status.error
          ? "form__feedback error"
          : "form__feedback"
      }
    >
      {status.message}
    </div>
  );
}

export default Feedback;
