import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Redirect, Route } from "react-router";
import NavBarMenu from "../layout/NavBarMenu";

const ProtectedRouter = ({ component: Component, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  if (authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" valiant="info" />
      </div>
    );
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <div>
          <NavBarMenu/>
            <Component {...rest} {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
};

export default ProtectedRouter;
