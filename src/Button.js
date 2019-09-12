import React from "react"
import { Button, Icon, Container, Header, } from "semantic-ui-react";
import Choices from "./Choices";

const ChoiceButton = (props) => {
  
  // debugger
  return(
    <Button>
      <Button.Content >{props.name}</Button.Content>
      {/* <Button.Content visible> */}
        {/* <Icon name='hand {props.option.name} outline' /> */}
      {/* </Button.Content> */}
    </Button>
  )
}

export default ChoiceButton;