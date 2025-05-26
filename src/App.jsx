import { BrowserRouter, Route, Routes } from "react-router";
import SegurancaDaInformacao from "./pages/SegurancaDainformacao";
import PageHome from "./components/PageHome";

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />}/>
          <Route path="/segurancadainformacao" element={<SegurancaDaInformacao />}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;