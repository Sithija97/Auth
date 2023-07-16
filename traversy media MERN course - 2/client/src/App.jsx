import React from "react";
import Header from "./components/header";
import Home from "./screens/home";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Container className="my-2">
        <Outlet />
      </Container>
    </>
  );
};

export default App;
