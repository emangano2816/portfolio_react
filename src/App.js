import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../src/Components/pages/Home';
import ProjectDetail from '../src/Components/pages/ProjectDetail.js';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/projectdetails' component={ProjectDetail} />
      </div>
    </Router>
      

  );
}

export default App;
