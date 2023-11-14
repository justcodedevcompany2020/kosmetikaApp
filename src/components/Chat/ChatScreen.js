import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import WelcomeClose from "../../icons/WelcomeClose";
import TgIcon from "../../icons/TgIcon";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../api";
import InputPrimary from "../InputPrimary";
import { useEffect } from "react";
import { GetChatAction } from "../../store/action/action";
import { useState } from "react";


export default function ChatScreen(props) {
  const getUser = useSelector((st) => st.getUser)
  const singlChat = useSelector((st) => st.singlChat)
  const { token } = useSelector((st) => st.static)
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetChatAction({ receiver_id: getUser.data?.user?.id }, token))
  }, [])

  useEffect(() => {
    setData(singlChat.data)
  }, [singlChat])
  return (
    <View style={styles.chat}>
      <View style={styles.chatTop}>
        <TouchableOpacity
          style={styles.chatClose}
          onPress={() => {
            props.onClose();
          }}
        >
          <WelcomeClose></WelcomeClose>
        </TouchableOpacity>
        <Text style={styles.chatTitle}>تحدث مع استشاري</Text>
        <View style={{ width: 32, height: 32 }}></View>
      </View>
      <View style={styles.chatBody}>
        <View style={styles.messageRight}>
          <View style={styles.messageCircleRight}></View>
          <Text style={styles.messageTextRight}>
            مساء الخير سنكون سعداء للمساعدة. ما هو سؤالك؟
          </Text>
        </View>
        <View style={styles.messageLeft}>
          <Text style={styles.messageTextLeft}>
            مرحبًا! هل لديك واقي من الشمس؟
          </Text>
          <View style={styles.messageCircleLeft}></View>
        </View>
      </View>
      <View style={styles.chatAvatar}>
        <Image
          source={{ uri: baseUrl + getUser.data?.user?.avatar }}

          style={styles.chatAvatarImage}
        ></Image>
      </View>
      <View style={styles.chatBottom}>
        <TouchableOpacity >
          <TgIcon></TgIcon>
        </TouchableOpacity>
        <View style={{ width: '70%' }}>
          <InputPrimary
            backgroundColor="#F2F2F4"
            placeholder="تاريخ الولادة"
            textAlign="right"
            // value={userStore.user?.birthday}
            onChangeText={(text) => setBirthday(text)}
          ></InputPrimary>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatAvatarImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  chatBottom: {
    paddingBottom: 20,
    paddingTop: 20,
    borderTopColor: "#C1C1C1",
    borderTopWidth: 1,
    borderStyle: "solid",
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  chatAvatar: {
    paddingBottom: 15,
    paddingLeft: 15,
  },
  messageCircleRight: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0C18F",
    marginRight: 10,
  },
  messageRight: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  messageLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  messageCircleLeft: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1F2024",
    marginRight: 10,
    marginLeft: 10,
  },
  messageTextRight: {
    fontSize: 16,
    color: "rgba(31, 32, 36, 0.5)",
    textAlign: "right",
    fontFamily: "Shabnam",
    maxWidth: 180,
  },
  messageTextLeft: {
    fontSize: 16,
    fontFamily: "Shabnam",
    maxWidth: 180,
  },
  chatBody: {
    paddingLeft: 15,
    paddingRight: 15,
    flexGrow: 1,
  },
  chatTitle: {
    color: "#1F2024",
    fontSize: 22,
    fontFamily: "ShabnamBold",
  },
  chatClose: {
    width: 32,
    height: 32,
  },
  chatTop: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  chat: {
    width: "100%",
    height: "100%",
    zIndex: 20,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingTop: 20,
  },
});
