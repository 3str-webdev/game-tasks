import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
