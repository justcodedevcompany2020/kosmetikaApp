import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import InputPrimary from "../components/InputPrimary";
import { useUserStore } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { ConfrimCode } from "../store/action/action";

export default function SmsScreen(props) {
  const userStore = useUserStore();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const inputs = [firstInput, secondInput, thirdInput, fourthInput];
  const [code, setCode] = useState([]);

  const confirmCode = useSelector((st) => st.confirmCode)
  function handleChange(index, e) {
    let item = [...code]
    item[index - 1] = e
    setCode(item)
    inputs[index].current.focus();
  }

  const dispatch = useDispatch()

  async function handleSubmit() {
    let textCode = ''
    code.map((elm, i) => {
      textCode = textCode + elm
    })
    dispatch(ConfrimCode({ phone: props?.route?.params?.phone, code: textCode }))
  }

  useEffect(() => {
    if (confirmCode.status) {
      props.navigation.navigate("ProfileTab");
    }

  }, [confirmCode])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>ادخل الرمز</Text>
          <Text style={styles.subtitle}>
            تم إرسال رمز مكون من أربعة أرقام إلى الرقم {userStore.phone}
          </Text>
          <View style={styles.inputGroup}>
            <View style={styles.input}>
              <InputPrimary
                innerRef={firstInput}
                onChangeText={(text) => {
                  handleChange(1, text);
                }}
                // autoFocus={true}
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
            <View style={styles.input}>
              <InputPrimary
                innerRef={secondInput}
                onChangeText={(text) => {
                  handleChange(2, text);
                }}
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
            <View style={styles.input}>
              <InputPrimary
                innerRef={thirdInput}
                onChangeText={(text) => {
                  handleChange(3, text);
                }}
                keyboardType="phone-pad"
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
            <View style={[styles.input, styles.inputLast]}>
              <InputPrimary
                innerRef={fourthInput}
                keyboardType="phone-pad"
                onChangeText={(text) => {
                  let item = [...code]
                  item[3] = text
                  setCode(item)
                  // handleChange(4, text);
                }}
                textAlign="center"
                maxLength={1}
              ></InputPrimary>
            </View>
          </View>
          <Text style={styles.wrongCode}>{confirmCode.error}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>ارسل الرمز مجددا</Text>
          <View style={styles.bottomBtn}>
            <ButtonPrimary loading={confirmCode.loading} onPress={handleSubmit}>يكمل</ButtonPrimary>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingBottom: 40,
  },
  registerText: {
    fontSize: 20,
  },
  main: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    textAlign: "center",
    fontFamily: "ShabnamBold",
    marginBottom: 12,
    color: "#1F2024",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 20,
    color: "#71727A",
    fontFamily: "ShabnamLight",
    maxWidth: 220,
    textAlign: "center",
    marginBottom: 20,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    width: 56,
    marginRight: 8,
  },
  inputLast: {
    marginRight: 0,
  },
  bottomText: {
    fontFamily: "ShabnamLight",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: "#1F2024",
    textAlign: "center",
  },
  bottomBtn: {
    width: "100%",
  },
  bottom: {
    width: "100%",
  },
  wrongCode: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'red'
  }
});
