import Layout from "./components/Layout/Layout";
import Page from "./components/Page/Page";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Page />
      </Layout>
    </div>
  );
}

export default App;
