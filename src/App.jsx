import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogListing from "./pages/BlogListing";
import CreatePost from "./pages/CreatePost";
import EventsListing from "./pages/EventsListing";
import SavedItems from "./pages/SavedItems";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogListing />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/events" element={<EventsListing />} />
        <Route path="/saved" element={<SavedItems />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;