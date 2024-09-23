import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen lg:px-32 2xl:max-w-screen-2xl 2xl:mx-auto relative">
      <nav className="relative sm:absolute top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-0">
        <div className="lg:px-32 2xl:max-w-screen-2xl 2xl:mx-auto">
          <Header />
        </div>
      </nav>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
