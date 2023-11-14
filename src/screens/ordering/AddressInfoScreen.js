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
import { useState } from "react";
import { useEffect } from "react";

export default function AddressInfoScreen(props) {
  const navigation = useNavigation();
  const [data, setData] = useState(props.route?.params?.data)
  const [error, setError] = useState({ address: "", home: "" })
  useEffect(() => {
    let item = { ...data }
    item.address = ''
    item.home_office = ''
    item.description = ''
    setData(item)
  }, [])


  const HandelChange = (e, name) => {
    let item = { ...data }
    item[name] = e
    setData(item)
  }
  console.log(data)

  const handelClick = () => {
    let send = true
    let item = { ...error }
    if (!data.address) {
      item.address = 'error'
      send = false
    }
    else {
      item.address = ''
      send = true
    }
    if (!data.home_office) {
      item.home = 'error'
      send = false
    }
    else {
      item.home = ''
      send = true
    }
    if (send) {
      navigation.navigate("Payment", { data })
    }
    setError(item)
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
              <Text style={[styles.stepText, styles.stepTextActive]}>
                توصيل
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.step}>
              <Text style={styles.stepText}>متلقي</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitlePrimary}>العنوان</Text>
          <View style={styles.input}>
            <InputPrimary
              placeholder="بيت الشارع"
              backgroundColor="#F2F2F4"
              textAlign="right"
              onChangeText={(e) => HandelChange(e, 'address')}
              borderColor={error.address && 'red'}
            ></InputPrimary>
          </View>
          <View style={styles.input}>
            <InputPrimary
              backgroundColor="#F2F2F4"
              placeholder="شقة / مكتب"
              textAlign="right"
              onChangeText={(e) => HandelChange(e, 'home_office')}
              borderColor={error.home && 'red'}

            ></InputPrimary>
          </View>
          <View style={[styles.input, { marginBottom: 0 }]}>
            <InputPrimary
              backgroundColor="#F2F2F4"
              multiline={true}
              placeholder="التعليق على البريد السريع ، على سبي
              المثال المدخل والأرض والاتصال الداخلي"
              textAlign="right"
              height={116}
              align="top"
              paddingTop={18}
              onChangeText={(e) => HandelChange(e, 'description')}

            ></InputPrimary>
          </View>
          <View style={styles.btn}>
            <ButtonPrimary onPress={() => handelClick()}>
              اختر وسيلة الدفع
            </ButtonPrimary>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 40,
    width: "100%",
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  step: {
    width: "33%",
    display: "flex",
    alignItems: "center",
  },
  subtitlePrimary: {
    fontFamily: theme.fontBold,
    fontSize: 22,
    lineHeight: 30,
    color: theme.colorDark,
    marginBottom: 20,
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
    width: "66%",
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
