import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { v4 } from "uuid";
import { routes } from "../../routes";
import "./App.css";
import AppHeader from "../../components/AppHeader";

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        {routes.map((route) => (
          <Route
            exact
            path={route.path}
            render={(props) => (
              <route.component {...props} title={route.title} />
            )}
            key={v4()}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
