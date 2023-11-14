import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function ButtonPrimary(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonPrimary} disabled={props.disabled}>
      {!props.loading ?
        <Text style={styles.buttonText}>{props.children}</Text> :
        <ActivityIndicator color={'white'} />
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: "#E0C18F",
    color: "white",
    borderRadius: 15,
    height: 56,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "ShabnamBold",
  },
});
