import React, { Component } from "react";
import { TextInput } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";

class LoginForm extends Component {
  state = { email: "", password: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Email address"
            label="Email"
            value={this.state.email}
            onChangeHandler={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureText={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeHandler={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
