import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contacts from "./Contacts";
import Nbar from "./Nbar";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Nbar />
      {/* <Home />
      <About />
      <Service />
      <Contacts /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contacts} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
