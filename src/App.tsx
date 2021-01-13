import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Layout from "./components/Layout";


function App() {
    return (
        <Router>


            <Switch>
                <Route exact path="/tags">
                    <Tags/>
                </Route>
                <Route exact path="/record">
                    <Records/>
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

function Statistics() {
    return (
        <Layout>
            <h2>统计</h2>
        </Layout>
    );
}

function Tags() {
    return (
        <Layout>
            <h2>标签</h2>
        </Layout>
    );
}

function Records() {
    return (
        <Layout>
            <h2>记录</h2>
        </Layout>
    );
}

function NoMatch() {
    return (
        <div>地址有误</div>
    );

}

export default App;