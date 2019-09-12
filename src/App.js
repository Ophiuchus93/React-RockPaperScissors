import React from 'react';
import { Button, Icon, Container, Header, } from "semantic-ui-react";
import Choices from "./Choices"

class App extends React.Component {
  

  render() {
    return (
      <Container style={{ marginTop: "25px" }}>
        <Header as="h1" align="center" color="red">
          Rock Paper Scissors
        </Header>
      <hr />
      <br />
        <Choices />
      </Container>

    )
  }
}
export default App;
