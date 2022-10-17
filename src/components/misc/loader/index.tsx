import "./index.scss";

const Loader = (): JSX.Element => {
  return (
    <div data-testid="loader" id="loader">
      <div className="loading">Loading...</div>
    </div>
  );
};

export default Loader;
