import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { appRoutes } from "./routes/AppRoutes/routes";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {appRoutes.map(({ path, element }) => {
            return <Route path={path} element={element} />;
          })}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
