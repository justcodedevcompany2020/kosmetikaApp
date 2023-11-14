import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductCart from "../icons/ProductCart";
import ProductHeart from "../icons/ProductHeart";
import { baseUrl } from "../api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddDelateFavorite, AddToBasketAction, RemoveFromBasketAction } from "../store/action/action";
import AddProductCart from "../icons/AddProductCard";

export default function Product(props) {
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(props.product?.favorit_auth?.length)
  const [basket, setBasket] = useState(props.product?.basket_auth_user?.length)
  const { token } = useSelector((st) => st.static)
  // const cartStore = useCartStore();
  const TruncatedText = (texts) => {
    let text = JSON.stringify(texts)
    const truncatedText = text.length > 5 ? `...${text.substring(0, 5)}` : text;
    return truncatedText
  };
  const dispatch = useDispatch()
  const addFavorite = () => {
    setFavorite(!favorite)
    dispatch(AddDelateFavorite({ product_id: props.product.id }, token))
  }

  const AddRevoeBasket = () => {
    if (basket) {
      dispatch(RemoveFromBasketAction({ product_id: props.product.id }, token))
    }
    else {
      dispatch(AddToBasketAction({ product_id: props.product.id }, token))
    }
    setBasket(!basket)

  }

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CatalogTab", {
          screen: "Product",
          params: {
            productId: props.product.id,
          },
        })
      }
      style={styles.product}
    >
      <ProductHeart
        onPress={() => addFavorite()}
        style={styles.productHeart}
        opacity={favorite ? 1 : 0.8}
        fill={
          favorite ? "#1F2024" : "transparent"
        }
      ></ProductHeart>
      {!!props.product.discount && (
        <View style={styles.discount}>
          <Text style={styles.discountText}>{props.product.discount}%</Text>
        </View>
      )}
      <Image
        style={styles.productImg}
        source={{ uri: baseUrl + props.product.photos[0].photo }}
      ></Image>
      <Text style={styles.productTitle}>{props.product.name}</Text>
      <View style={styles.productBtm}>
        <TouchableOpacity onPress={() => AddRevoeBasket()}>
          {!basket ?
            <ProductCart /> :
            <AddProductCart />
          }
        </TouchableOpacity>
        <View style={styles.productsBtmRight}>
          <Text style={styles.productPrice}>
            {

              TruncatedText(props.product.price -
                props.product.price * (props.product.discount / 100))
            }{" "}
            د.ع
          </Text>
          {!!props.product.discount && (
            <Text style={styles.productPriceOld}>
              {props.product.price} د.ع
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productHeart: {
    position: "absolute",
    top: 15,
    left: 15,
  },
  discountText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Circle",
  },
  discount: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#E0C18F",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  productImg: {
    width: 80,
    height: 120,
  },
  productPriceOld: {
    fontFamily: "Shabnam",
    color: "#1F2024",
    fontSize: 15,
    color: "rgba(31, 32, 36, 0.35)",
    textDecorationLine: "line-through",
  },
  productPrice: {
    fontFamily: "Shabnam",
    color: "#1F2024",
    fontSize: 15,
  },
  productsBtmRight: {
    display: "flex",
  },
  productBtm: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  product: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "rgba(236, 237, 239, 0.7)",
    display: "flex",
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  productTitle: {
    fontFamily: "Circle",
    textAlign: "right",
    fontSize: 13,
    lineHeight: 16,
    color: "rgba(31, 32, 36, 0.8)",
    width: "100%",
    marginTop: 10,
    marginBottom: 0,
  },
});
