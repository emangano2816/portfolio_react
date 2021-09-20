import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../src/Components/pages/Home';
import ShareSpace from './Components/pages/ShareSpace'
import MovieDrinkMatch from "./Components/pages/MovieDrinkMatch";
import EmpDirReact from "./Components/pages/EmpDirReact";
import CodeQuiz from "./Components/pages/CodeQuiz";
import WeatherDashboard from "./Components/pages/WeatherDashboard";
import GoogleBooksSearch from "./Components/pages/GoogleBooksSearch";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/googlebookssearch' component={GoogleBooksSearch} />
            <Route exact path='/sharespace' component={ShareSpace} />
            <Route exact path='/empdirreact' component={EmpDirReact} />
            <Route exact path='/moviedrinkmatch' component={MovieDrinkMatch} />
            <Route exact path='/codequiz' component={CodeQuiz} />
            <Route exact path='/weatherdashboard' component={WeatherDashboard} />
        </Switch>
    </Router>
      

  );
}

export default App;
