import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import SearchIcon from "../icons/SearchIcon";

export default function SearchButton(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        cursorColor={"#E0C18F"}
        style={styles.input}
      >
        <Text
          style={[
            styles.text,
            { color: props.children ? "#1F2024" : "rgba(31, 32, 36, 0.35)" },
          ]}
        >
          {props.children ? props.children : "ابحث عن المنتجات في الكتالوج"}
        </Text>
      </TouchableOpacity>
      <SearchIcon onPress={props.onPress} style={styles.icon}></SearchIcon>
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
    backgroundColor: "white",
  },
  text: {
    color: "rgba(31, 32, 36, 0.35)",
    fontSize: 16,
    fontFamily: "ShabnamLight",
  },
});
