import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import TopRated from "./Pages/TopRated/TopRated";
import UpComing from "./Pages/UpComing/UpComing";
import SingleMovie from "./Pages/SingleMovie/SingleMovie";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/top-rated" component={TopRated} />
            <Route path="/up-coming" component={UpComing} />
            <Route path="/movies/:id" component={SingleMovie} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
