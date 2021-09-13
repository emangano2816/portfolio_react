import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../src/Components/pages/Home';
import ShareSpace from './Components/pages/ShareSpace'
import MovieDrinkMatch from "./Components/pages/MovieDrinkMatch";
import CodeQuiz from "./Components/pages/CodeQuiz";

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/sharespace' component={ShareSpace} />
        <Route exact path='/moviedrinkmatch' component={MovieDrinkMatch} />
        <Route exact path='/codequiz' component={CodeQuiz} />
      </div>
    </Router>
      

  );
}

export default App;
