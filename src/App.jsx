// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogListing from "./pages/BlogListing";
import CreatePost from "./pages/CreatePost";
import CreateCommunity from "./pages/CreateCommunity";
import EventsListing from "./pages/EventsListing";
import SavedItems from "./pages/SavedItems";
import History from "./pages/History";
import BlogPost from "./pages/BlogPost";
import Communities from "./pages/Communities";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogListing />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/create-community" element={<CreateCommunity />} />
        <Route path="/events" element={<EventsListing />} />
        <Route path="/saved" element={<SavedItems />} />
        <Route path="/history" element={<History />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/communities" element={<Communities />} />
      </Routes>
    </Router>
  );
}

export default App;