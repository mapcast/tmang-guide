import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.css';
import './css/main.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, Roadmap1, Roadmap2, Roadmap4, Roadmap5, Roadmap6, Roadmap3, Roadmap7, Roadmap8, Roadmap9, Roadmap10 } from './pages/roadmap';

ReactDOM.render(
  <BrowserRouter basename="/tmang-guide">
        <Switch>
          <Route exact path ="/" component={MainPage}/>
          <Route exact path ="/roadmap1" component={Roadmap1}/>
          <Route exact path ="/roadmap2" component={Roadmap2}/>
          <Route exact path ="/roadmap3" component={Roadmap3}/>
          <Route exact path ="/roadmap4" component={Roadmap4}/>
          <Route exact path ="/roadmap5" component={Roadmap5}/>
          <Route exact path ="/roadmap6" component={Roadmap6}/>
          <Route exact path ="/roadmap7" component={Roadmap7}/>
          <Route exact path ="/roadmap8" component={Roadmap8}/>
          <Route exact path ="/roadmap9" component={Roadmap9}/>
          <Route exact path ="/roadmap10" component={Roadmap10}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();