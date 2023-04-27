import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopAlbums from "./pages/TopAlbums";
import LoadingIcon from "./components/LoadingIcon";
import AlbumComplete from "./pages/AlbumComplete";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1>Top 50 Álbums</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<TopAlbums />} />
          <Route path="/album/:id" element={<AlbumComplete />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
