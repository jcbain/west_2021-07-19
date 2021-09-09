import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import ClassComponent from './components/ClassComponent';
import LifecycleComponent from './components/LifecycleComponent';

function App() {
  return (
    <div className="App">
      <h1>Class-based Components YAY!!</h1>

      <Router>
        <nav>
          <Link to="/lifecycle">Lifecyle Component</Link>
          <br />
          <Link to="/classcomponent">Class Component</Link>
        </nav>

        <Switch>
          <Route path="/lifecycle">
            <LifecycleComponent />
          </Route>
          <Route path="/classcomponent">
            <ClassComponent someProp={"I am just a prop!"}/>
          </Route>
        </Switch>

      </Router>
      {/* <LifecycleComponent /> */}
    </div>
  );
}

export default App;
