import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import Swiper from "react-native-swiper";
import ProductArrow from "../icons/ProductArrow";
import ButtonPrimary from "../components/ButtonPrimary";
import BackIcon from "../icons/BackIcon";
import HertIconProduct from "../icons/HeartIconProduct";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { fetchProduct, baseUrl } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { AddDelateFavorite, GetSinglProduct } from "../store/action/action";
import ProductHeart from "../icons/ProductHeart";


export default function ProductScreen(props) {
  const navigation = useNavigation();
  const [product, setProduct] = useState({});
  const [shownDescription, setShownDescription] = useState(false);
  const [shownSpecs, setShownSpecs] = useState(false);
  const [shownComposition, setShownComposition] = useState(false);

  const [favorite, setFavorite] = useState()


  const productId = props.route.params.productId;
  const getSinglProduct = useSelector((st) => st.getSinglProduct)
  const { token } = useSelector((st) => st.static)
  const dispatch = useDispatch()
  useEffect(() => {
    if (getSinglProduct.data) {
      setProduct(getSinglProduct.data)
      setFavorite(getSinglProduct.data?.favorit_auth?.length > 0)
    }

  }, [getSinglProduct]);

  useEffect(() => {
    dispatch(GetSinglProduct({ product_id: productId }, token))
  }, [productId])


  const addFavorite = () => {
    setFavorite(!favorite)
    dispatch(AddDelateFavorite({ product_id: productId }, token))
  }


  if (getSinglProduct.loading) {
    return <View style={styles.loading}>
      <ActivityIndicator color={'black'} />
    </View >
  }
  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="catalog"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <View style={[styles.container, { paddingBottom: 0 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Catalog")}
              style={styles.back}
            >
              <BackIcon></BackIcon>

            </TouchableOpacity>

            <TouchableOpacity style={styles.heart}>
              <ProductHeart
                onPress={() => addFavorite()}
                style={styles.productHeart}
                opacity={favorite ? 1 : 0.8}
                fill={
                  favorite ? "#1F2024" : "transparent"
                }
              ></ProductHeart>
            </TouchableOpacity>
            {!!product.photos && (
              <Swiper
                style={{ height: 280 }}
                showsPagination={true}
                dot={
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 24,
                      backgroundColor: "rgba(224, 193, 143, 0.25)",
                      marginHorizontal: 6,
                    }}
                  ></View>
                }
                activeDot={
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: "#E0C18F",
                      borderRadius: 24,
                      marginHorizontal: 6,
                    }}
                  ></View>
                }
              >
                {product.photos.map((image, index) => {
                  return <View style={styles.slide} key={index}>
                    <Image
                      width={200}
                      height={218}
                      style={styles.slideImg}
                      source={{ uri: baseUrl + image.photo }}
                    ></Image>
                  </View>
                })}
              </Swiper>
            )}
          </View>
        </View>
        <View style={styles.content}>
          <View
            style={[styles.container, { paddingTop: 0, paddingBottom: 120 }]}
          >
            <Text style={styles.title}>{product.name}</Text>
            <View style={styles.prices}>
              <Text style={styles.price}>{product.price - product.price * (product.discount / 100)} د.ع</Text>
              {!!product.discount && (
                <Text style={styles.priceOld}>
                  {product.price} د.ع
                </Text>
              )}
            </View>
            <Text style={styles.smallText}>المادة: {product.articul}</Text>
            <Text style={styles.smallText}>الحجم: {product.volume} مل</Text>
            <View style={styles.block}>
              <TouchableOpacity
                style={styles.blockHeader}
                onPress={() => setShownDescription(!shownDescription)}
              >
                <Text style={styles.blockTitle}>الوصف</Text>
                {!!shownDescription && <ProductArrow></ProductArrow>}
                {!!!shownDescription && (
                  <ProductArrow style={styles.rotate}></ProductArrow>
                )}
              </TouchableOpacity>
              {!!shownDescription && (
                <Text style={styles.blockText}>{product.description}</Text>
              )}
            </View>
            <View style={styles.block}>
              <TouchableOpacity
                style={styles.blockHeader}
                onPress={() => setShownSpecs(!shownSpecs)}
              >
                <Text style={styles.blockTitle}>المواصفات</Text>
                {!!shownSpecs && <ProductArrow></ProductArrow>}
                {!!!shownSpecs && (
                  <ProductArrow style={styles.rotate}></ProductArrow>
                )}
              </TouchableOpacity>
              {!!shownSpecs && (
                <Text style={styles.blockText}>{product.specs}</Text>
              )}
            </View>
            <View style={styles.block}>
              <TouchableOpacity
                style={styles.blockHeader}
                onPress={() => setShownComposition(!shownComposition)}
              >
                <Text style={styles.blockTitle}>التكوين</Text>
                {!!shownComposition && <ProductArrow></ProductArrow>}
                {!!!shownComposition && (
                  <ProductArrow style={styles.rotate}></ProductArrow>
                )}
              </TouchableOpacity>
              {!!shownComposition && (
                <Text style={styles.blockText}>{product.composition}</Text>
              )}
            </View>
            <View style={styles.btn}>
              <ButtonPrimary style={styles.btnInner}>
                {/* <View> */}
                <Text>أضف الى الجديد</Text>
                <Text>
                  {"\u00A0"}
                  {"\u00A0"}·{"\u00A0"}
                  {"\u00A0"}
                </Text>
                <Text>
                  {product.price - product.price * (product.discount / 100)} د.ع
                </Text>
                {/* </View> */}
              </ButtonPrimary>
            </View>
          </View>
        </View>
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    left: 15,
    bottom: 15,
    zIndex: 2,
  },
  back: {
    position: "absolute",
    right: 15,
    top: 20,
    zIndex: 2,
  },
  btn: {
    width: "100%",
    marginTop: 30,
  },
  btnInner: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
  blockText: {
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "ShabnamLight",
  },
  blockTitle: {
    color: "#1F2024",
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    marginRight: 14,
  },
  block: {
    width: "100%",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(31, 32, 36, 0.15)",
  },
  blockHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "white",
  },
  smallText: {
    width: "100%",
    fontFamily: "ShabnamLight",
    color: "rgba(31, 32, 36, 0.5)",
    textAlign: "right",
  },
  price: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    fontWeight: 700,
    color: "#1F2024",
    marginRight: 12,
  },
  priceOld: {
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    color: "rgba(31, 32, 36, 0.35)",
    textDecorationLine: "line-through",
  },
  prices: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    marginBottom: 12,
  },
  title: {
    fontFamily: "ShabnamBold",
    fontSize: 23,
    lineHeight: 27,
    marginTop: 25,
    marginBottom: 6,
    textAlign: "right",
    width: "100%",
  },
  slideImg: {
    width: 260,
    height: 218,
  },
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    minHeight: "100%",
    backgroundColor: "#F7F7F7",
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
    width: "100%",
  },
  rotate: {
    transform: [{ rotate: "180deg" }],
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
