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
                <Route exact path="/tags">
                    <Tags/>
                </Route>
                <Route exact path="/record">
                    <Record/>
                </Route>
                <Route exact path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/record"/>
                <Route exact path="*">
                    <NoMatch/>
                </Route>
            </Switch>

        </Router>
    );
}


export default App;