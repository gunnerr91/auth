import React, { Component } from "react";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { TextInput, Text } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";

class LoginForm extends Component {
  state = { email: "", password: "", error: "" };

  onButtonPress() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(() => {
        this.setState({ error: "Authentication Failed" });
      });
  }

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
        <Text style={styles.errorText}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    color: "red",
    fontSize: 20,
    alignSelf: "center"
  }
};

export default LoginForm;
