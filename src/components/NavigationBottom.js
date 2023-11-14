import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CatalogIcon from "../icons/navigation/CatalogIcon";
import ProfileIcon from "../icons/navigation/ProfileIcon";
import CartIcon from "../icons/navigation/CartIcon";
import HomeIcon from "../icons/navigation/HomeIcon";
import FavoriteIcon from "../icons/navigation/FavoriteIcon";

export default function NavigationBottom(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("ProfileTab")}
      >
        <ProfileIcon
          isActive={props.active == "profile"}
          style={{ width: 22 }}
        ></ProfileIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Favorite")}
      >
        <FavoriteIcon
          isActive={props.active == "favorite"}
          style={{ width: 22 }}
        ></FavoriteIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("CatalogTab")}
      >
        <CatalogIcon
          isActive={props.active == "catalog"}
          style={{ width: 22 }}
        ></CatalogIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("CartTab")}
      >
        <CartIcon
          isActive={props.active == "cart"}
          style={{ width: 22 }}
        ></CartIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Home")}
      >
        <HomeIcon
          isActive={props.active == "home"}
          style={{ width: 22 }}
        ></HomeIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: "rgba(31, 32, 36, 0.95)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 6,
  },
  tab: {
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  abs: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
});
