import React, { Component } from "react";
import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";
import { TextInput, Text } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";
import Input from "./shared/Input";
import Spinner from "./shared/Spinner";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress() {
    const { email, password, loading } = this.state;

    this.setState({ error: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: "Authentication Failed", loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
  }

  renderButton() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    );
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
        <CardSection>{this.renderButton()}</CardSection>
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
