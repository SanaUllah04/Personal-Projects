import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component loaded");
  }, []);

  return <h1>Hello</h1>;
}