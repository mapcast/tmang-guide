import './css/bootstrap.css';
import './css/main.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, Roadmap1, Roadmap2, Roadmap4, Roadmap5, Roadmap6, Roadmap3, Roadmap7, Roadmap8, Roadmap9, Roadmap10 } from './pages/roadmap';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path ="/" component={MainPage}/>
          <Route exact path ="/tmang-guide/roadmap/1" component={Roadmap1}/>
          <Route exact path ="/tmang-guide/roadmap/2" component={Roadmap2}/>
          <Route exact path ="/tmang-guide/roadmap/3" component={Roadmap3}/>
          <Route exact path ="/tmang-guide/roadmap/4" component={Roadmap4}/>
          <Route exact path ="/tmang-guide/roadmap/5" component={Roadmap5}/>
          <Route exact path ="/tmang-guide/roadmap/6" component={Roadmap6}/>
          <Route exact path ="/tmang-guide/roadmap/7" component={Roadmap7}/>
          <Route exact path ="/tmang-guide/roadmap/8" component={Roadmap8}/>
          <Route exact path ="/tmang-guide/roadmap/9" component={Roadmap9}/>
          <Route exact path ="/tmang-guide/roadmap/10" component={Roadmap10}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
