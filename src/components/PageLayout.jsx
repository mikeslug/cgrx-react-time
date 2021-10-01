import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import logo from "../congruex.svg";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar variant="dark">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <br />
      <br />
      {props.children}
    </>
  );
};
