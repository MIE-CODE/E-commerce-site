import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/header";
import Checkout from "./Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/checkout" Component={Checkout} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
