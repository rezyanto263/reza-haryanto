import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PageNotFound from "@/pages/404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
