import {
  Switch,
  Route
} from "react-router-dom";
import Detail from "../views/Detail";
import Edit from "../views/Edit";
import Home from "../views/Home";
import Search from "../views/Search";

export default function Router() {
    return(
            <Switch>
                <Route path="/edit/:id">
                    <Edit />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Route path="/search/:querySearch">
                    <Search />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route exact path="*">
                    <p>Error</p>
                </Route>
            </Switch>
    )
}
