import React, { Component } from "react";
import { View } from "react-native";
import Card from "./shared/Card";
import CardSection from "./shared/CardSection";
import Button from "./shared/Button";

class LoginForm extends Component {
  render() {
    return (
      <View>
        <Card>
          <CardSection />
          <CardSection />
          <CardSection>
            <Button>Login</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

export default LoginForm;
