import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import BackIcon from "../icons/BackIcon";
import NavigationBottom from "../components/NavigationBottom";
import { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import ProfileItem from "../components/ProfileItem";

export default function InfoScreen(props) {
  const [orders, setOrders] = useState([1, 1, 1, 1, 1, 1]);

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="profile"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text style={styles.title}>طلباتي</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <ProfileItem>الشحن والدفع</ProfileItem>
          </View>
          <View style={styles.item}>
            <ProfileItem>الشحن والدفع</ProfileItem>
          </View>
          <View style={styles.item}>
            <ProfileItem>الشحن والدفع</ProfileItem>
          </View>
          <View style={styles.item}>
            <ProfileItem>الشحن والدفع</ProfileItem>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    marginBottom: 15,
  },
  scroll: {
    minHeight: "100%",
  },
  navBtm: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    zIndex: 2,
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 106,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
  },
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
});
