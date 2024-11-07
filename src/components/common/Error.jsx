function Error({err, handleClick}) {
  return (
    <div className="error-wrap">
      <div className="error-text">{err}</div>
      <button className="button-reload" onClick={() => handleClick()}>
        재시도
      </button>
    </div>
  );
}

export default Error;
