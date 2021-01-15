import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Record from "./views/Record";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags" exact>
                    <Tags/>
                </Route>
                <Route exact path="/tags/:tag">

                </Route>
                <Route path="/record">
                    <Record/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect from="/" to="/record"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>

        </Router>
    );
}


export default App;