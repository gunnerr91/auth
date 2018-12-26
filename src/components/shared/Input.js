import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureText}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeHandler}
        style={styles.input}
        autoCorrect={props.autoCorrect}
      />
    </View>
  );
};

const styles = {
  input: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 50,
    textAlignVertical: "center"
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export default Input;
