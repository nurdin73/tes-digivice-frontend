import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import DetailMovie from "./Pages/DetailMovie";
import Footer from "./Components/Footer";
import GenreMovie from "./Pages/GenreMovie";
import Movies from "./Pages/Movies";
import Search from "./Pages/Search";

export default function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#000",
          minHeight: "120vh",
          overflow: "hidden"
        }}
      >
        <Header />
        <Switch>
          <Route path="/search/:title">
            <Search />
            <Footer/>
          </Route>
          <Route path="/movie">
            <Movies />
            <Footer/>
          </Route>
          <Route path="/genre/:id/movies">
            <GenreMovie />
            <Footer/>
          </Route>
          <Route path="/detail-movie/:id">
            <DetailMovie />
            <Footer/>
          </Route>
          <Route path="/">
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
