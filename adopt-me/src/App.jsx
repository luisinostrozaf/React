import { createRoot} from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <SearchParams />
  );
}

createRoot(document.getElementById("root")).render(<App />);
