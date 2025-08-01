import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>Something went wrong.</h2>
      <h5>
        Error: {err.status} - {err.statusText}
      </h5>
    </div>
  );
};

export default Error;
