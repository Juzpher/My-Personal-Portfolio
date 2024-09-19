import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen  md:px-32 2xl:max-w-screen-2xl 2xl:mx-auto relative">
      <nav className="absolute top-0 left-0 right-0 z-50 py-4">
        <div className="md:px-32 2xl:max-w-screen-2xl 2xl:mx-auto">
          <Header />
        </div>
      </nav>
      <main className="h-screen">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
