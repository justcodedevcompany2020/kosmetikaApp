import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import theme from "../theme";

export default function RadioPrimary(props) {
  console.log(props.error)
  return (
    <TouchableOpacity onPress={props.onPress} style={
      [styles.deliveryMethod, {
        borderColor: props.error ? "red" : 'rgba(31, 32, 36, 0.25)'
      }]
    }>
      <View style={styles.deliveryMethodTop}>
        <Text
          style={[
            styles.deliveryMethodTitle,
            { fontSize: props.titleSize ? props.titleSize : 18 },
          ]}
        >
          {props.title}
        </Text>
        <View style={props.active ? styles.circleActive : styles.circle}>
          <View
            style={props.active ? styles.circleInnerActive : styles.circleInner}
          ></View>
        </View>
      </View>
      <Text style={styles.deliveryMethodText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deliveryMethodText: {
    fontFamily: theme.fontLight,
    fontSize: 14,
    color: "rgba(113, 114, 122, 0.6)",
  },
  deliveryMethodTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  deliveryMethodTitle: {
    fontFamily: theme.fontLight,
    fontSize: 18,
    color: theme.colorDark,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderColor: "rgba(31, 32, 36, 0.25)",
    borderWidth: 1,
    marginLeft: 11,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleActive: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderColor: "#E0C18F",
    borderWidth: 1,
    marginLeft: 11,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0C18F",
  },
  circleInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  circleInnerActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "white",
  },
  deliveryMethod: {
    borderWidth: 1,
    borderColor: "rgba(31, 32, 36, 0.15)",
    borderRadius: 15,
    backgroundColor: "#F2F2F4",
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
});
