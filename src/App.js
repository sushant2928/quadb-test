import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shows from "./Pages/Shows/Shows.page";
import ShowDetails from "./Pages/Show Details/ShowDetails.page";
import { ShowsProvider } from "./Context/ShowsContext";
import BookShow from "./Pages/Book Show/BookShow.page";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <ShowsProvider>
            <Route path="/" exact>
              <Shows />
            </Route>
            <Route path="/:id" exact>
              <ShowDetails />
            </Route>
            <Route path="book/:id" exact>
              <BookShow />
            </Route>
          </ShowsProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
