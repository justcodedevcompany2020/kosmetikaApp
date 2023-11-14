import { useEffect } from "react";
import { View, StyleSheet, Text, BackHandler, Alert } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import WelcomeClose from "../icons/WelcomeClose";
import WelcomeCoin from "../icons/WelcomeCoin";
import { useDispatch } from "react-redux";
import { ClearConfirmCode } from "../store/action/errorAction";

export default function WelcomeScreen(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(ClearConfirmCode())
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <WelcomeClose />
      </View>
      <View style={styles.main}>
        <WelcomeCoin />
        <Text style={styles.title}>شكرا لتسجيلك</Text>
        <Text style={styles.subtitle}>
          املأ الحقول للحصول على خصم من أجل الترتيب الأول
        </Text>
      </View>
      <View style={styles.bottom}>
        <ButtonPrimary onPress={() => props.navigation.navigate("ProfileTab")}>
          املأ المعلومات
        </ButtonPrimary>
        <Text style={styles.bottomText}>
          املأ المعلومات وحررها يمكنك لاحقًا في حسابك
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBtm: {
    position: "absolute",
    bottom: 30,
    zIndex: 10,
    width: "100%",
    left: 0,
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingBottom: 40,
    paddingTop: 20,
  },
  top: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  main: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    maxWidth: 194,
    fontFamily: "Shabnam",
    color: "#71727A",
  },
  bottom: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  bottomText: {
    fontFamily: "ShabnamLight",
    color: "rgba(113, 114, 122, 0.6)",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    maxWidth: 140,
    marginTop: 20,
  },
});
