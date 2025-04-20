import { useRouteError } from "react-router";

export default function ErrorPage () {
  const error = useRouteError();
    console.log(error);
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "2rem", 
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>Oops!</h1>
      <h2>{error.status} - {"Page " + error.statusText}</h2>
      <p>Sorry, the page you’re looking for doesn’t exist or an error occurred.</p>
    </div>
  );
};

