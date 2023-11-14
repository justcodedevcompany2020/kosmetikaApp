import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import BackIcon from "../icons/BackIcon";
import { useNavigation } from "@react-navigation/native";
import ButtonPrimary from "../components/ButtonPrimary";
import ProductCart from "../components/ProductCart";
import { useEffect, useState } from "react";
import EmptyOrders from "../icons/EmptyOrders";
import { useCartStore } from "../store/cartStore";
import { useDispatch, useSelector } from "react-redux";
import { AddToBasketAction, ClearValidOrder, GetBasketAction, MinusFromBassket, RemoveFromBasketAction, ValidORderAction } from '../store/action/action'

export default function CartScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)
  const getBasket = useSelector((st) => st.getBasket)
  const [basket, setBasket] = useState({})
  const validOrder = useSelector((st) => st.validOrder)
  function totalCost() {
    let sum = 0;
    basket?.data.forEach((product) => {
      const productPrice =
        product.product.price - product.product.price * (product.product.discount / 100);
      sum += product.product_count * productPrice;
    });
    return sum;
  }


  const addProductCount = (id) => {
    let item = { ...basket }
    let index = item.data.findIndex((elm) => elm.product.id === id)
    if (item.data[index].product.product_count - 1 >= item.data[index].product_count) {
      item.data[index].product_count = +item.data[index].product_count + 1
    }
    dispatch(AddToBasketAction({ product_id: id }, token))
    setBasket(item)
  }

  const MinusProductCount = (id) => {
    let item = { ...basket }
    let index = item.data.findIndex((elm) => elm.product.id === id)
    item.data[index].product_count = +item.data[index].product_count - 1
    if (!item.data[index].product_count) {
      item.data.splice(index, 1)
      dispatch(RemoveFromBasketAction({ product_id: id }, token))
    }
    else {
      dispatch(MinusFromBassket({ product_id: id }, token))
    }
    setBasket(item)
  }

  const RemoveFromBasket = (id, index) => {
    let item = { ...basket }
    item.data.splice(index, 1)
    dispatch(RemoveFromBasketAction({ product_id: id }, token))
    setBasket(item)
  }


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      dispatch(GetBasketAction(token))
      dispatch(ClearValidOrder())
    });
    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
    if (getBasket.data) {
      setBasket(getBasket.data)
    }
  }, [getBasket])

  const ValidOrder = () => {
    dispatch(ValidORderAction(token))
  }


  useEffect(() => {
    if (validOrder.status) {
      navigation.navigate("GeneralInfo")
    }
  }, [validOrder])

  if (getBasket.loading) {
    return <View style={styles.loading}>
      <ActivityIndicator color={'black'} />
    </View >
  }

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="cart"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text style={styles.title} onPress={() => setProducts([])}>
              سلة
            </Text>
            <TouchableOpacity style={{ opacity: 0 }}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          {basket?.data?.length > 0 ? (
            <View style={{ width: "100%" }}>
              <View style={styles.products}>
                {basket.data.map((product, index) => {
                  return <ProductCart RemoveFromBasket={(e) => RemoveFromBasket(e, index)} MinusProductCount={(e) => MinusProductCount(e)} addProductCount={(e) => addProductCount(e)} count={product.product_count} key={index} product={product.product}></ProductCart>
                })}
              </View>
              <View style={styles.btmTextWrap}>
                <Text style={styles.btmText}>{totalCost()} د.ع</Text>
                <Text
                  style={[styles.btmText, { marginLeft: 12, marginRight: 12 }]}
                >
                  ·
                </Text>
                <Text style={styles.btmText}>سعر الطلب</Text>
              </View>
              <View style={styles.btmBtn}>
                <ButtonPrimary onPress={() => ValidOrder()}
                >
                  الدفع
                </ButtonPrimary>
              </View>
            </View>
          ) : (
            <View style={styles.emptyOrdersContainer}>
              <EmptyOrders></EmptyOrders>
              <Text style={styles.emptyOrdersTitle}>
                عربة التسوق فارغة حاليا
              </Text>
              <Text style={styles.emptyOrdersSubtitle}>
                اذهب إلى الدليل وأضف أضف إلى سلة التسوق العناصر ذات الأهمية
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
    paddingBottom: 120,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
