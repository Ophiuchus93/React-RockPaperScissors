import React from "react"
// import { Button, Icon, Container, Header, } from "semantic-ui-react";
import Button from "./Button"

class Choices extends React.Component {
state = {
  choices: [
    { id: 1, name: "rock"},
    { id: 2, name: "paper"},
    { id: 3, name: "scissors"},
    ]
  }

  // userChoice = 

  render() {
    return (
      this.state.choices.map( choice => (
        <Button key={choice.id} {...choice} onClick= />

      ))

    )
  }

}

 export default Choices;