import "./ErrorBlock.css";

function ErrorBlock({ error }) {
  return (
    <>
      <div className="error-block" role="alert" aria-live="assertive">
        <p>{error.message}</p>
        <p>{error.details}</p>
      </div>
    </>
  );
}

export default ErrorBlock;
