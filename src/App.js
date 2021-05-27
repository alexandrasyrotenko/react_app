import React from "react";
import { Header, Sidebar, Main } from './components';
import NewPage from './components/NewPage.js';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import './index.scss';
  
  const MainContainer = () => (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </div>
  );
  
  const NewContainer = () => (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Sidebar />
        <NewPage />
      </div>
    </div>
  );


export const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <MainContainer/> </Route>

          <Route path="/mypage">
        <MainContainer/>
          
        </Route>

          <Route  path="/dots" component={NewPage}>
            <NewContainer/>
          </Route>

          <Route  path="/board" component={NewPage}>
            <NewContainer/>
          </Route>


          <Route  path="/projects" component={NewPage}>
            <NewContainer/>
          </Route>
          
          <Route  path="/settings" component={NewPage}>
            <NewContainer/>
          </Route>

          <Route  path="/logout" component={NewPage}>
            <NewContainer/>
          </Route>




      </Switch>
    </Router>
  );
};
