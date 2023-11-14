import { TouchableOpacity, Text, StyleSheet } from "react-native"
import ProfileArrow from "../icons/ProfileArrow"

export default function ProfileItem(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.profileItem, props.style]}>
      <ProfileArrow></ProfileArrow>
      <Text style={styles.profileItemText}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  profileItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 18,
    backgroundColor: "#F2F2F4",
    borderRadius: 15,
  },
  profileItemText: {
    color: "#1F2024",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Shabnam",
  },
})