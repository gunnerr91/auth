import React, { Component } from "react";
import { View } from "react-native";
import Header from "./components/shared/Header";
import firebase from "@firebase/app";
// import "@firebase/auth";
// import "@firebase/database";
// import "@firebase/storage";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBrM3TYV8B73SeajQG2EMYp8d6XWsPOJ8I",
      authDomain: "auth-3b5f1.firebaseapp.com",
      databaseURL: "https://auth-3b5f1.firebaseio.com",
      projectId: "auth-3b5f1",
      storageBucket: "auth-3b5f1.appspot.com",
      messagingSenderId: "619769557648"
    });
  }

  render() {
    return (
      <View>
        <Header header="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
