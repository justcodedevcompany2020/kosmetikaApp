import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import InputPrimary from "../components/InputPrimary";
import BackIcon from "../icons/BackIcon";
import { useState } from "react";
import { useUserStore } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { UpdateData } from "../store/action/action";
import { useEffect } from "react";

export default function PersonalScreen(props) {
  const userStore = useUserStore();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const getUser = useSelector((st) => st.getUser)
  const { token } = useSelector((st) => st.static)
  const updateUser = useSelector((st) => st.updateUser)

  const dispatch = useDispatch()
  const [error, setError] = useState('')



  useEffect(() => {
    setName(getUser.data.user.name)
    setEmail(getUser.data.user.email)
    setSurname(getUser.data.user.surname)
    setBirthday(getUser.data.user.date_of_birth)
  }, [getUser.data.user])


  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
  }


  const update = () => {
    let error = ''
    if (email) {
      if (!ValidateEmail(email)) {
        error = 'email  is not valid'
      }
    }
    if (error === '') {
      dispatch(UpdateData({
        name,
        email,
        birthday,
        surname
      },
        token
      ))
    }
  }




  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <View style={styles.navBtm}>
          {/* <NavigationBottom active="profile"></NavigationBottom> */}
        </View>
        <View style={styles.container}>
          <View style={styles.main}>
            <View style={styles.top}>
              <BackIcon style={{ opacity: 0 }}></BackIcon>
              <Text style={styles.title}>بيانات شخصية</Text>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <BackIcon></BackIcon>
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>رقم الهاتف</Text>
            <Text style={styles.phoneNumber}>{userStore.user.phone}</Text>
            <View style={styles.input}>
              <InputPrimary
                backgroundColor="#F2F2F4"
                placeholder="اسم"
                textAlign="right"
                value={name}
                onChangeText={(text) => setName(text)}
              ></InputPrimary>
            </View>
            <View style={styles.input}>
              <InputPrimary
                backgroundColor="#F2F2F4"
                placeholder="اسم العائلة"
                textAlign="right"
                value={surname}
                onChangeText={(text) => setSurname(text)}
              ></InputPrimary>
            </View>
            <View style={styles.input}>
              <InputPrimary
                backgroundColor="#F2F2F4"
                placeholder="بريد إلكتروني"
                textAlign="right"
                value={email}
                onChangeText={(text) => setEmail(text)}
              ></InputPrimary>
            </View>
            <View style={[styles.input, styles.inputLast]}>
              <InputPrimary
                backgroundColor="#F2F2F4"
                placeholder="تاريخ الولادة"
                textAlign="right"
                value={userStore.user?.birthday}
                onChangeText={(text) => setBirthday(text)}
              ></InputPrimary>
            </View>
          </View>
          <View style={styles.btm}>
            <ButtonPrimary
              loading={updateUser.loading}
              onPress={() => {
                update()
              }}
            >
              يحفظ
            </ButtonPrimary>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  navBtm: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    zIndex: 2,
    paddingHorizontal: 0,
  },
  btm: {
    width: "100%",
  },
  input: {
    marginBottom: 15,
  },
  inputLast: {
    marginBottom: 0,
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
  phoneNumber: {
    fontFamily: "CircleExtraBold",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 27,
    color: "#1F2024",
    marginBottom: 25,
  },
  subtitle: {
    color: "#71727A",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Shabnam",
    marginBottom: 8,
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
  main: {
    width: "100%",
    flexGrow: 1,
  },
});
