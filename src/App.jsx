import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./_router/PublicRouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
