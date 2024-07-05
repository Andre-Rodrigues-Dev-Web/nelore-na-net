import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Views/Home";
import Erro from "./Views/Erro";
import Post from "./Views/Post";
import MercadoNelore from "./Views/MercadoNelore";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/mercado-nelore" element={<MercadoNelore />} />
        <Route path="/post/:slug" element={<Post />} />
        <Route path="*" element={<Erro />} />
      </Route>
    </Routes>
  );
};

export default App;
