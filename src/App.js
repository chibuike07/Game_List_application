import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ClientContextProvider from "./contextfile/ClientContext";
import Welcome from "./views/Welcome";

const App = () => {
  return (
    <div>
      <Router>
        <ClientContextProvider>
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/game-list" component={Welcome} exact />
          </Switch>
        </ClientContextProvider>
      </Router>
    </div>
  );
};

export default App;
