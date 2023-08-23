import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main></main>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/amyspencerproject"
            target="_blank"
            rel="noreferrer"
          >
            Amy Spencer
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
