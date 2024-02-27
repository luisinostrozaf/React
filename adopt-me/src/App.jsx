import { createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App/>);
