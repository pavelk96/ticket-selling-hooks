import "./app.sass"
import HeaderMenu from "../header-menu/header-menu";
import MovieDetailsById from "../movie-details-by-id/movie-details-by-id";
import SearchListPage from "../pages/search-list-page";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authUser } from "../../actions";
import AuthRegistrationPage from "../pages/auth-registration-page";




function App() {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isAuth)
    useEffect(() => {
        dispatch({type:authUser})
    })

    const contentIsAuth =
         (
            <Switch>
                <Route exact path="/search" component={SearchListPage}/>
                <Route path="/film/:id"
                       render={({match}) => {
                           const {id} = match.params
                           return <MovieDetailsById id={id}/>;
                       }}/>
                <Route>
                    <h1>404 page</h1>
                </Route>
            </Switch>
        );

  return (
      <div className="body">
        <div className="header">
            <HeaderMenu/>
        </div>
      <div className="content">
          <div className="container">
              <Route exact path="/login" component={AuthRegistrationPage}/>
              {isAuth ? contentIsAuth :
                  <>
                  <Redirect to="/login"/>
              </>}
          </div>
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
