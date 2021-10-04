import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/movie";
import Error404 from "./pages/error404";

export default function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header>Header....</Header>

        <Content>
          {" "}
          {/*  Contiene toda la informacion de la web */}
          <Switch>
            {/* Lo utilizamos para que decirle que cuando encuentre una página se detengan y cargue esa pagina y no continue buscando. */}
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/new-movies" exact={true}>
              <NewMovies />
            </Route>
            <Route path="/popular" exact={true}>
              <Popular />
            </Route>
            <Route path="/search" exact={true}>
              <Search />
            </Route>
            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>
            <Route path="*" exact={true}>
              {/* En cualquier ruta devuelve el componente error404, es decir, cuando no ha detectado las anteriores */}
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}
