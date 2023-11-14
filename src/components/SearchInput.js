import { StyleSheet, TextInput, View, Text } from "react-native";
import SearchIcon from "../icons/SearchIcon";

export default function SearchInput(props) {
  return (
    <View>
      <TextInput
        placeholder="ابحث عن المنتجات في الكتالوج"
        cursorColor={"#E0C18F"}
        style={styles.input}
        returnKeyType="search"
        onSubmitEditing={props.onSubmitEditing}
        autoFocus={true}
        onChangeText={(e) => props.onChange(e)}
        value={props.value}
      ></TextInput>
      <SearchIcon style={styles.icon}></SearchIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 17,
    top: 15,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "rgba(31, 32, 36, 0.15)",
    borderRadius: 15,
    borderWidth: 1,
    textAlign: "right",
    paddingRight: 47,
    paddingLeft: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    fontFamily: "ShabnamLight",
  },
  text: {
    color: "rgba(31, 32, 36, 0.35)",
    fontSize: 16,
    fontFamily: "ShabnamLight",
  },
});
