import React from 'react';
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
import MainPage from "../pages/main/main";
import ValidateId from "../../hocs/validate-id";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={RoutePath.ROOT} exact component={MainPage}/>
        <Route path={RoutePath.LOGIN} exact component={SignIn}/>
        <PrivateRoute exact path={RoutePath.MY_LIST} render={()=> <MyList/>}/>
        <Route path={RoutePath.PLAYER_ID} render={()=> <ValidateId component={Player}/>}/>
        <Route path={RoutePath.FILM_ID} exact render={()=> <ValidateId component={MoviePage}/>}/>
        <PrivateRoute path={RoutePath.FILM_REVIEW} render={()=> <ValidateId component={AddReview}/>}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>

  );
};

App.propTypes = {...MainPage.propTypes};

export default App;
