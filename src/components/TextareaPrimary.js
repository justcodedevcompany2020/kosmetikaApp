import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function TextareaPrimary(props) {
  const [borderColor, setBorderColor] = useState("rgba(31, 32, 36, 0.15)");

  function handleFocused() {
    setBorderColor("#E0C18F");
    props.onFocus ? props.onFocus() : "";
  }

  function handleBlur() {
    setBorderColor("rgba(31, 32, 36, 0.15)");
  }

  return (
    <TextInput
      autoFocus={props.autoFocus}
      maxLength={props.maxLength}
      keyboardType={props.keyboardType}
      cursorColor={"#E0C18F"}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      onPress={props.onPress}
      onFocus={handleFocused}
      onBlur={handleBlur}
      ref={props.innerRef}
      style={[
        styles.input,
        {
          backgroundColor: props.backgroundColor,
          textAlign: props.textAlign,
          borderColor,
        },
      ]}
    ></TextInput>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 56,
    borderColor: "rgba(31, 32, 36, 0.15)",
    borderWidth: 1,
    width: "100%",
    borderRadius: 15,
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "ShabnamLight",
  },
});
