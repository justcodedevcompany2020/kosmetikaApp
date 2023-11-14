import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import BackIcon from "../icons/BackIcon";
import NavigationBottom from "../components/NavigationBottom";
import EmptyOrders from "../icons/EmptyOrders";
import { useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";

export default function OrderScreen(props) {
  const [orders, setOrders] = useState([1, 1, 1, 1, 1, 1]);

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="profile"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text
              onPress={() => {
                setOrders([]);
              }}
              style={styles.title}
            >
              طلباتي
            </Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          {orders.length > 0 ? (
            <View style={styles.orders}>
              {orders.map((item, index) => (
                <TouchableOpacity
                  style={styles.order}
                  key={index}
                  onPress={() => props.navigation.navigate("Order")}
                >
                  <View style={styles.orderTop}>
                    <Text style={styles.orderTopText}>جديد</Text>
                    <Text style={styles.orderTopText}>رقم الطلب 00493</Text>
                  </View>
                  <View style={styles.orderBtm}>
                    <Text style={styles.orderBtmText}>12.12.2022</Text>
                    <View style={styles.ordersBtmRight}>
                      <Text style={styles.orderBtmText}>5 منتجات</Text>
                      <Text style={[styles.orderBtmText, { marginLeft: 20 }]}>
                        2 738 د.ع
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.emptyOrdersContainer}>
              <EmptyOrders></EmptyOrders>
              <Text style={styles.emptyOrdersTitle}>
                ليس لديك أي طلبات حتى الآن
              </Text>
              <Text style={styles.emptyOrdersSubtitle}>
                اذهب إلى الدليل وأضف أضف إلى سلة التسوق العناصر المفضلة لديك
              </Text>
              <ButtonPrimary style={styles.emptyOrdersBtn}>
                اذهب إلى الكتالوج
              </ButtonPrimary>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    maxWidth: 288,
    marginBottom: 50,
  },
  emptyOrdersTitle: {
    fontSize: 24,
    lineHeight: 33,
    fontFamily: "ShabnamBold",
    color: "#1F2024",
    marginTop: 16,
    marginBottom: 12,
  },
  orderBtmText: {
    fontSize: 16,
    lineHeight: 20,
    color: "#8F9098",
    fontFamily: "Shabnam",
  },
  orderTopText: {
    fontFamily: "Shabnam",
    fontSize: 16,
    lineHeight: 20,
    color: "#1F2024",
  },
  orderBtm: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  ordersBtmRight: {
    display: "flex",
    flexDirection: "row",
  },
  orderTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  orders: {
    width: "100%",
  },
  order: {
    marginBottom: 15,
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 25,
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
    paddingBottom: 106,
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
    marginBottom: 40,
  },
});
