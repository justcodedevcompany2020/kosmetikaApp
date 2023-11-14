import { useEffect } from "react";
import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputPrimary(props) {
  const [borderColor, setBorderColor] = useState(props.borderColor ? props.borderColor : "rgba(31, 32, 36, 0.15)");
  function handleFocused() {
    setBorderColor("#E0C18F");
    props.onFocus ? props.onFocus() : "";
  }

  useEffect(() => {
    if (props.borderColor) {
      setBorderColor(props.borderColor)
    }
  }, [props.borderColor, props.value])

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
      onChangeText={(text) => props.onChangeText(text)}
      onPress={props.onPress}
      onFocus={handleFocused}
      onBlur={handleBlur}
      editable={props.editable ? false : props.editable}
      ref={props.innerRef}
      value={props.value}
      multiline={props.multiline}
      textAlignVertical={props.align}
      style={
        [
          styles.input,
          {
            backgroundColor: props.backgroundColor,
            textAlign: props.textAlign,
            borderColor,
            height: props.height ? props.height : 56,
            paddingTop: props.paddingTop,
          },
        ]}
    ></TextInput >
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
