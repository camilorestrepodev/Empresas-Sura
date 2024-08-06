import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IdProvider } from "./context/IdContext";
import Home from "./pages/Home";
import Talleres from "./pages/Talleres";
import Asistencia from "./pages/Asistencia";
import Error from "./components/Error";


function App() {
  return (
    <>
      <>
        <IdProvider>
          <HashRouter >
            <Header />
              <Routes>
                <Route path="/" element={<Navigate to="/home"  />} />
                <Route path="/home/*" element={<Home />} />
                <Route path="/talleres/*" element={<Talleres />} />
                <Route path="/asistencia/*" element={<Asistencia />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<Navigate to="/error" />} />
              </Routes>
            <Footer />
          </HashRouter>
        </IdProvider>
      </>
    </>
  );
}

export default App;
