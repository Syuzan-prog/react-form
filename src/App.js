import Header from "./containers/Header/Header";
import Layout from "./components/Layout/Layout";
// import Products from "./containers/Products/Products";
import Footer from "./components/Footer/Footer";
import Auth from "./containers/Auth/Auth";
import "./App.css";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <Layout>
        <Auth />
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
