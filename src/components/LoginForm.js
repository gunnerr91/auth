import React, { Component } from "react";
import { TextInput } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";

class LoginForm extends Component {
  state = { text: "hello world" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.text}
            onChangeHandler={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
