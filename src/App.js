import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import Nav from "./components/Navbar";
import Home from "./page/Home";

export default function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}
