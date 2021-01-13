import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";

const Wrapper = styled.div` 
 border:1px solid red;
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 
 
`;
const Main = styled.div`
 border: 1px solid green;
 flex-grow: 1;
 overflow: auto;
`;



function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav />
            </Wrapper>
        </Router>
    );
}

function Statistics() {
    return <h2>统计</h2>;
}

function Tags() {
    return <h2>标签</h2>;
}

function Records() {
    return <h2>记账</h2>;
}

function NoMatch() {
    return (
        <div>地址有误</div>
    );

}

export default App;