import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Logo from "./components/Logo";
import logo from "./assets/logo.png";
import Router from "./route";

const Container = styled.div`
  background-color: #f7f7f7;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
      </Header>
      <Router />
    </Container>
  );
};

export default App;
