import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext.js";
import Dashboard from "./views/Dashboard";
import ProtectedRouter from "./components/routing/ProtectedRouter";
import About from "./views/About";
import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route
              exact
              path="/login"
              render={(props) => <Auth {...props} authRoute="login" />}
            ></Route>
            <Route
              exact
              path="/register"
              render={(props) => <Auth {...props} authRoute="register" />}
            ></Route>
            <ProtectedRouter
              exact
              path="/dashboard"
              component={Dashboard}
            ></ProtectedRouter>
            <ProtectedRouter
              exact
              path="/about"
              component={About}
            ></ProtectedRouter>
          </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
