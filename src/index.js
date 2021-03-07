import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './css/bootstrap.css';
import './css/main.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, Roadmap1, Roadmap2, Roadmap4, Roadmap5, Roadmap6, Roadmap3, Roadmap7 } from './pages/roadmap';
import { Class1, Class2, Class3, Class4, Class5, Class6} from './pages/class';
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
          <Route exact path ="/class1" component={Class1}/>
          <Route exact path ="/class2" component={Class2}/>
          <Route exact path ="/class3" component={Class3}/>
          <Route exact path ="/class4" component={Class4}/>
          <Route exact path ="/class5" component={Class5}/>
          <Route exact path ="/class6" component={Class6}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();