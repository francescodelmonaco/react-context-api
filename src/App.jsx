// importo react router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importo le pagine
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { PostsList } from "./pages/PostsList";
import { SinglePost } from "./pages/SinglePost";

// importo i layout
import { DefaultLayout } from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route Component={HomePage} path="/" />
          <Route Component={AboutUs} path="/about-us" />
          <Route Component={PostsList} path="/posts-list" />
          <Route Component={SinglePost} path="/posts-list/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
