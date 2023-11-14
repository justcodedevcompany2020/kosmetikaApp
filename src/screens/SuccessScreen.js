import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../components/ButtonPrimary";
import SuccessIcon from "../icons/SuccessIcon";
import WelcomeClose from "../icons/WelcomeClose";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ClearOrderStatus } from "../store/action/action";

export default function SuccessScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ClearOrderStatus())
  }, [])
  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="cart"></NavigationBottom>
      </View>
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <WelcomeClose></WelcomeClose>
          </TouchableOpacity>
        </View>
        <View style={styles.emptyOrdersContainer}>
          <View style={styles.main}>
            <SuccessIcon></SuccessIcon>
            <Text style={styles.emptyOrdersTitle}>شكرا لطلبك!</Text>
            <Text style={styles.emptyOrdersSubtitle}>
              سيتصل بك مديرنا قريبًا لتأكيد الطلب
            </Text>
            <View style={styles.box}>
              <Text style={styles.orderNumber}>0097746</Text>
              <Text style={styles.boxText}>رقم الأمر</Text>
            </View>
          </View>
          <ButtonPrimary
            onPress={() => navigation.navigate("Home")}
            style={styles.emptyOrdersBtn}
          >
            اذهب إلى الكتالوج
          </ButtonPrimary>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxText: {
    fontFamily: "ShabnamLight",
    color: "#71727A",
    textAlign: "center",
    fontSize: 16,
  },
  orderNumber: {
    fontFamily: "CircleExtraBold",
    fontSize: 24,
    lineHeight: 29,
    marginBottom: 2,
  },
  box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(31, 32, 36, 0.2)",
    borderRadius: 15,
  },
  main: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyOrdersBtn: {
    width: "100%",
  },
  emptyOrdersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  emptyOrdersSubtitle: {
    color: "#71727A",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "ShabnamLight",
    textAlign: "center",
    maxWidth: 155,
    marginBottom: 18,
  },
  emptyOrdersTitle: {
    fontSize: 24,
    lineHeight: 33,
    fontFamily: "ShabnamBold",
    color: "#1F2024",
    marginTop: 20,
    marginBottom: 6,
  },
  btmBtn: {
    width: "100%",
    marginTop: 18,
  },
  btmText: {
    fontFamily: "Shabnam",
    fontSize: 18,
    lineHeight: 25,
    color: "#1F2024",
  },
  btmTextWrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  products: {
    width: "100%",
  },
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  scroll: {
    minHeight: "100%",
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
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
    paddingBottom: 190,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
