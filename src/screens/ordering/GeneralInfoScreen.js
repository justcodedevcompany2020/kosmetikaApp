import theme from "../../theme";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BackIcon from "../../icons/BackIcon";
import { useNavigation } from "@react-navigation/native";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BuyerInfo, DeliveryType, GetCityes, GetPaymentType } from "../../store/action/action";
import { useState } from "react";

export default function GeneralInfoScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCityes())
    dispatch(DeliveryType())
    dispatch(GetPaymentType())
  }, [dispatch])
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    date: ''
  })

  const [error, setEorrr] = useState({
    name: '',
    surname: "",
    email: '',
    date: ''
  })

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    return (false)
  }

  const HandelChange = (e, name) => {
    let item = { ...data }
    item[name] = e
    setData(item)
  }

  const HandelPress = () => {
    let send = true
    let item = { ...error }
    if (data.name == '') {
      item.name = 'error'
      send = false
    }
    else {
      item.name = ''
      send = true
    }

    if (data.surname == '') {
      item.surname = 'error'
      send = false
    }
    else {
      item.surname = ''
      send = true
    }

    if (!ValidateEmail(data.email)) {
      item.email = 'error'
      send = false
    }
    else {
      item.email = ''
      send = true
    }
    if (send) {
      navigation.navigate("LocationInfo", { data })
    }
    setEorrr(item)
  }

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text style={styles.title}>يأمر</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.progressLine}>
            <View style={styles.progressLineActive}></View>
          </View>
          <View style={styles.steps}>
            <TouchableOpacity style={styles.step}>
              <Text style={styles.stepText}>قسط</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step}>
              <Text style={styles.stepText}>توصيل</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step}>
              <Text style={[styles.stepText, styles.stepTextActive]}>
                متلقي
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitlePrimary}>بيانات المستلم</Text>
          <View style={styles.inputPrimary}>
            <InputPrimary
              backgroundColor="#F2F2F4"
              placeholder="اسم"
              textAlign="right"
              borderColor={error.name != '' && 'red'}
              onChangeText={(e) => HandelChange(e, 'name')}
            ></InputPrimary>
          </View>
          <View style={styles.inputPrimary}>
            <InputPrimary
              backgroundColor="#F2F2F4"
              placeholder="اسم العائلة"
              textAlign="right"
              borderColor={error.surname != '' && 'red'}
              onChangeText={(e) => HandelChange(e, 'surname')}
            ></InputPrimary>
          </View>
          <View style={styles.inputPrimary}>
            <InputPrimary
              backgroundColor="#F2F2F4"
              placeholder="بريد إلكتروني"
              textAlign="right"
              borderColor={error.email != '' && 'red'}
              onChangeText={(e) => HandelChange(e, 'email')}
              value={data.email}
            ></InputPrimary>
          </View>
          <View style={styles.inputPrimary}>
            <InputPrimary
              backgroundColor="#F2F2F4"
              placeholder="هاتف"
              textAlign="right"
              onChangeText={(e) => HandelChange(e, 'date')}

            ></InputPrimary>
          </View>
          <View style={styles.buttonBtm}>
            <ButtonPrimary onPress={() => HandelPress()}>
              اختر طريقة الشحن
            </ButtonPrimary>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBtm: {
    width: "100%",
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
  inputPrimary: {
    width: "100%",
    marginBottom: 15,
  },
  subtitlePrimary: {
    fontFamily: theme.fontBold,
    fontSize: 22,
    lineHeight: 30,
    color: theme.colorDark,
    marginBottom: 20,
  },
  step: {
    width: "33%",
    display: "flex",
    alignItems: "center",
  },
  steps: {
    marginTop: 26,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 36,
  },
  stepTextActive: {
    fontFamily: theme.fontBold,
    color: theme.colorDark,
  },
  stepText: {
    fontFamily: theme.fontLight,
    color: "#8F9098",
    fontSize: 16,
    lineHeight: 22,
  },
  progressLine: {
    width: "100%",
    height: 4,
    backgroundColor: "rgba(31, 32, 36, 0.15)",
    borderRadius: 100,
    display: "flex",
    alignItems: "flex-end",
  },
  progressLineActive: {
    backgroundColor: "#E0C18F",
    height: 4,
    borderRadius: 100,
    width: "33%",
  },
  top: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
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
    paddingBottom: 40,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
