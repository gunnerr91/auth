import React, { Component } from "react";
import { View } from "react-native";
import Header from "./components/shared/Header";
import firebase from "@firebase/app";
import "@firebase/auth";
// import "@firebase/database";
// import "@firebase/storage";
import LoginForm from "./components/LoginForm";
import Button from "./components/shared/Button";
import CardSection from "./components/shared/CardSection";
import Spinner from "./components/shared/Spinner";
import Card from "./components/shared/Card";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBrM3TYV8B73SeajQG2EMYp8d6XWsPOJ8I",
      authDomain: "auth-3b5f1.firebaseapp.com",
      databaseURL: "https://auth-3b5f1.firebaseio.com",
      projectId: "auth-3b5f1",
      storageBucket: "auth-3b5f1.appspot.com",
      messagingSenderId: "619769557648"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  renderAuthPage() {
    return this.state.loggedIn === null ? (
      <View style={{ paddingTop: 50, flexDirection: "row", flex: 1 }}>
        <Spinner />
      </View>
    ) : this.state.loggedIn ? (
      <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
      </CardSection>
    ) : (
      <LoginForm />
    );
  }

  render() {
    return (
      <View>
        <Header header="Authentication" />
        {this.renderAuthPage()}
      </View>
    );
  }
}

export default App;
