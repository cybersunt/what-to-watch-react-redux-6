import React from 'react';
import MainPage from "../pages/main/main";
import NotFound from "../pages/not-found/not-found";
import MyList from "../pages/my-list/my-list";
import Player from "../pages/player/player";
import SignIn from "../pages/sign-in/sign-in";
import MoviePage from "../pages/movie-page/movie-page";
import AddReview from "../pages/add-review/add-review";
import {Router, Route, Switch} from "react-router-dom";
import {RoutePath} from "../../constants/routes";
import browserHistory from "../../browser-history";
import PrivateRoute from "../blocks/private-route/private-route";

const App = ({promoMovie}) => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={RoutePath.ROOT} exact render={
          () => <MainPage promoMovie={promoMovie}/>
        }/>
        <Route path={RoutePath.LOGIN} exact component={SignIn}/>
        <PrivateRoute exact path={RoutePath.MY_LIST} render={()=> <MyList/>}/>
        {/* FIXME: провалидировать несуществующией страницы из-за отсутствия id*/}
        <Route path={RoutePath.PLAYER_ID} component={Player}/>
        <Route path={RoutePath.FILM_ID} exact component={MoviePage}/>
        <PrivateRoute path={RoutePath.FILM_REVIEW} render={()=> <AddReview/>}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>

  );
};

App.propTypes = {...MainPage.propTypes};

export default App;
