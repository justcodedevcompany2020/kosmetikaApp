import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Image } from "react-native";
import BackIcon from "../icons/BackIcon";
import NavigationBottom from "../components/NavigationBottom";
import ProductImage from "../../assets/images/product.png";

export default function OrdersScreen(props) {
  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="profile"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text style={styles.title}>الطلب رقم 00493</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.orderStatus}>
            <Text style={styles.orderStatusText}>وردت</Text>
          </View>
          <View style={styles.orderInfo}>
            <View style={styles.orderInfoBlock}>
              <Text style={styles.orderInfoTitle}>متلقي</Text>
              <Text style={styles.orderInfoText}>مريم عبد</Text>
              <Text style={styles.orderInfoText}>+964 751 547 7820</Text>
              <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                Mariam.Abdel@gmail.com
              </Text>
            </View>
            <View style={styles.orderInfoBlock}>
              <Text style={styles.orderInfoTitle}>طريقة التوصيل</Text>
              <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                تسليم البريد السريع
              </Text>
            </View>
            <View style={styles.orderInfoBlock}>
              <Text style={styles.orderInfoTitle}>عنوان التسليم</Text>
              <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                طريق الطيران ، منطقة مناوي باشا ، البصرة
              </Text>
            </View>
            <View style={[styles.orderInfoBlock, styles.orderInfoBlockLast]}>
              <Text style={styles.orderInfoTitle}>قسط</Text>
              <View style={styles.orderInfoRow}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  2
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  العناصر لكل طلب
                </Text>
              </View>
              <View style={styles.orderInfoRow}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  678 د.ع
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  مبلغ الشراء
                </Text>
              </View>
              <View style={styles.orderInfoRow}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  250 د.ع
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  توصيل
                </Text>
              </View>
              <View style={[styles.orderInfoRow, styles.orderInfoRowLast]}>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  928 د.ع
                </Text>
                <Text style={[styles.orderInfoText, styles.orderInfoTextLast]}>
                  مجموع
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.orderListTitle}>بضائع</Text>
          {[1, 1, 1, 1, 1].map((item, index) => (
            <View style={styles.product} key={index}>
              <View style={styles.productLeft}>
                <View style={{ flexGrow: 1 }}>
                  <Text style={styles.productName}>
                    Serie Expert{"\n"}Vitamino Color
                  </Text>
                  <Text style={styles.productSubtitle}>جيل الإستحمام</Text>
                </View>
                <View style={styles.productPrices}>
                  <Text style={styles.productPrice}>378 د.ع</Text>
                  <Text style={styles.productPriceOld}>420 د.ع</Text>
                </View>
              </View>
              <View style={styles.productRight}>
                <Image
                  source={ProductImage}
                  style={styles.productImage}
                  width={50}
                ></Image>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 50,
    height: 130,
  },
  productLeft: {
    marginRight: 25,
    height: "100%",
  },
  productPrices: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  productPriceOld: {
    fontSize: 18,
    lineHeight: 22,
    color: "rgba(31, 32, 36, 0.35)",
    textDecorationLine: "line-through",
    fontFamily: "Shabnam",
  },
  productPrice: {
    fontSize: 18,
    lineHeight: 22,
    color: "#1F2024",
    marginRight: 8,
    fontFamily: "Shabnam",
  },
  productSubtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: "#8F9098",
    fontFamily: "ShabnamLight",
  },
  productName: {
    fontFamily: "Circle",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "right",
    color: "#1F2024",
  },
  product: {
    paddingRight: 40,
    paddingBottom: 18,
    paddingTop: 18,
    paddingLeft: 20,
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    borderRadius: 15,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  orderListTitle: {
    color: "#1F2024",
    fontFamily: "ShabnamBold",
    fontSize: 22,
    lineHeight: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  orderInfoRowLast: {
    marginBottom: 0,
  },
  orderInfoRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  orderInfoBlockLast: {
    marginBottom: 0,
  },
  orderInfoBlock: {
    marginBottom: 26,
  },
  orderInfoTitle: {
    fontFamily: "ShabnamBold",
    fontSize: 18,
    lineHeight: 25,
    color: "#1F2024",
    marginBottom: 7,
  },
  orderInfoText: {
    color: "#71727A",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "ShabnamLight",
    marginBottom: 7,
    textAlign: "right",
  },
  orderInfoTextLast: {
    marginBottom: 0,
  },
  orderInfo: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 28,
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    width: "100%",
    borderRadius: 15,
    marginBottom: 20,
  },
  orderStatusText: {
    color: "white",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "ShabnamBold",
  },
  orderStatus: {
    paddingHorizontal: 22,
    backgroundColor: "#E0C18F",
    borderRadius: 100,
    paddingVertical: 4,
    paddingTop: 6,
    marginBottom: 30,
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
    paddingBottom: 122,
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
    marginBottom: 8,
  },
});
