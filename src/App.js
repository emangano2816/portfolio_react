import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../src/Components/pages/Home';
import ShareSpace from './Components/pages/ShareSpace'
import MovieDrinkMatch from "./Components/pages/MovieDrinkMatch";
import EmpDirReact from "./Components/pages/EmpDirReact";
import CodeQuiz from "./Components/pages/CodeQuiz";
import WeatherDashboard from "./Components/pages/WeatherDashboard";
import WorkdayScheduler from "./Components/pages/WorkdayScheduler";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/sharespace' component={ShareSpace} />
            <Route exact path='/empdirreact' component={EmpDirReact} />
            <Route exact path='/moviedrinkmatch' component={MovieDrinkMatch} />
            <Route exact path='/codequiz' component={CodeQuiz} />
            <Route exact path='/weatherdashboard' component={WeatherDashboard} />
            <Route exact path='/workdayscheduler' component={WorkdayScheduler} />
        </Switch>
    </Router>
      

  );
}

export default App;
