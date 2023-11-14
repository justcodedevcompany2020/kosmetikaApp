import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  ActivityIndicator,
} from "react-native";
import ProfileItem from "../components/ProfileItem";
import ProfileMail from "../icons/ProfileMail";
import ProfileWa from "../icons/ProfileWa";
import ProfileTg from "../icons/ProfileTg";
import NavigationBottom from "../components/NavigationBottom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAuthUser, LogoutAction, UpdateUserAvatar } from "../store/action/action";
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen(props) {
  const [logoutShown, setLogoutShown] = useState(false);
  const getUser = useSelector((st) => st.getUser)
  const { token } = useSelector((st) => st.static)
  const dispatch = useDispatch()
  const updatePhoto = useSelector((st) => st.updatePhoto)

  const changeImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(UpdateUserAvatar(result.assets[0].uri, token))
    }
  };
  useEffect(() => {
    if (token) {
      dispatch(GetAuthUser(token))
    }
  }, [token])

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', async () => {
      if (token) {
        dispatch(GetAuthUser(token))
      }
    });
    return unsubscribe;
  }, [props.navigation]);

  return (
    <View>
      <View
        style={[
          styles.logoutOverlay,
          { display: logoutShown ? "flex" : "none" },
        ]}
      ></View>
      <View
        style={[
          styles.logoutWindow,
          { display: logoutShown ? "flex" : "none" },
        ]}
      >
        <Text style={styles.logoutTitle}>خروج</Text>
        <Text style={styles.logoutSubtitle}>
          هل أنت متأكد من انك تريد الخروج؟ لاستخدام التطبيق ، ستحتاج إلى إعادة
          التفويض باستخدام رقم هاتفك
        </Text>
        <View style={styles.logoutBtns}>
          <TouchableOpacity onPress={() => {
            dispatch(LogoutAction(token))
            props.navigation.navigate('Register')
          }} style={styles.logoutBtnBrown}>
            <Text style={styles.logoutTextBrown}>يلغي</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logutBtnTransp}
            onPress={() => setLogoutShown(false)}
          >
            <Text style={styles.logoutTextTransp}>يلغي</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.navBtm}>
        <NavigationBottom active="profile"></NavigationBottom>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>حساب تعريفي</Text>
          {!updatePhoto.loading ?

            <TouchableOpacity onPress={() => changeImg()}>
              <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={{ uri: `https://basrabackend.justcode.am/uploads/${getUser.data.user?.avatar}` }} />
            </TouchableOpacity> :
            <ActivityIndicator style={{ width: 100, height: 100 }} color={'red'} />
          }
          <Text style={styles.phoneNumber}>{getUser.data.user?.phone}</Text>
          <Text style={styles.fio}>مريم عبد</Text>
          <View style={styles.profileItems}>
            <ProfileItem
              onPress={() => props.navigation.navigate("Personal")}
              style={styles.profileItem}
            >
              بيانات شخصية
            </ProfileItem>
            <ProfileItem
              onPress={() => props.navigation.navigate("Orders")}
              style={styles.profileItem}
            >
              طلباتي
            </ProfileItem>
            <ProfileItem
              onPress={() => props.navigation.navigate("Info")}
              style={styles.profileItemLast}
            >
              معلومة
            </ProfileItem>
          </View>
          <View style={styles.profileLinks}>
            <TouchableOpacity
              style={styles.profileLink}
              onPress={() => Linking.openURL("https://google.com")}
            >
              <ProfileMail></ProfileMail>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileLink}
              onPress={() => Linking.openURL("https://ya.ru")}
            >
              <ProfileWa></ProfileWa>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.profileLink, styles.profileLinkLast]}
              onPress={() => Linking.openURL("https://mail.ru")}
            >
              <ProfileTg></ProfileTg>
            </TouchableOpacity>
          </View>
          <Text style={styles.contact}>لتتصل بنا</Text>
          <Text style={styles.contactPhone}>+964 780 746 0690</Text>
          <TouchableOpacity
            style={styles.logout}
            onPress={() => setLogoutShown(true)}
          >
            <Text style={styles.logoutText}>خروج</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logoutBtns: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  logoutTitle: {
    fontSize: 22,
    lineHeight: 30,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 10,
  },
  logoutBtnBrown: {
    width: 130,
    height: 40,
    backgroundColor: "#E0C18F",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logutBtnTransp: {
    width: 130,
    height: 40,
    backgroundColor: "white",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#8F9098",
    borderWidth: 1,
  },
  logoutTextTransp: {
    fontSize: 18,
    lineHeight: 25,
    fontFamily: "ShabnamBold",
    color: "#8F9098",
  },
  logoutTextBrown: {
    fontSize: 18,
    lineHeight: 25,
    color: "white",
    fontFamily: "ShabnamBold",
  },
  logoutSubtitle: {
    fontSize: 16,
    color: "#71727A",
    fontFamily: "ShabnamLight",
    textAlign: "center",
    lineHeight: 20,
    flexGrow: 1,
  },
  logoutWindow: {
    width: 300,
    height: 204,
    position: "absolute",
    left: "50%",
    backgroundColor: "white",
    zIndex: 11,
    borderRadius: 16,
    top: "50%",
    transform: [{ translateX: -150 }, { translateY: -102 }],
    padding: 16,
    display: "flex",
  },
  logoutOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(31, 32, 36, 0.8)",
    zIndex: 10,
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
    paddingBottom: 122,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    lineHeight: 34,
    color: "#1F2024",
    textAlign: "center",
    fontFamily: "ShabnamBold",
    marginBottom: 16,
  },
  avatar: {
    marginBottom: 10,
  },
  phoneNumber: {
    fontFamily: "CircleExtraBold",
    fontSize: 18,
    lineHeight: 27,
    textAlign: "center",
    color: "#1F2024",
    marginBottom: 2,
  },
  fio: {
    fontSize: 16,
    lineHeight: 16,
    color: "#71727A",
    textAlign: "center",
    fontFamily: "ShabnamLight",
    marginBottom: 26,
  },
  profileItem: {
    marginBottom: 10,
  },
  profileItemLast: {
    marginBottom: 0,
  },
  profileItems: {
    width: "100%",
    display: "flex",
    marginBottom: 25,
  },
  profileLinks: {
    display: "flex",
    flexDirection: "row",
  },
  profileLink: {
    marginRight: 15,
  },
  profileLinkLast: {
    marginRight: 0,
  },
  contact: {
    fontFamily: "ShabnamLight",
    fontSize: 16,
    lineHeight: 16,
    color: "#71727A",
    marginTop: 20,
    marginBottom: 10,
  },
  contactPhone: {
    fontFamily: "CircleExtraBold",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1F2024",
    marginBottom: 20,
  },
  logout: {
    width: "100%",
    backgroundColor: "#F2F2F4",
    borderRadius: 15,
    height: 56,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    color: "#1F2024",
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "ShabnamBold",
  },
});
