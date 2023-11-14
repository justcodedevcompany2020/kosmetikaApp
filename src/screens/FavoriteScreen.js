import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import BackIcon from "../icons/BackIcon";
import SearchIconCategory from "../icons/SearchIconCategory";
import { useNavigation } from "@react-navigation/native";
import Product from "../components/Product";
import EmptyOrders from "../icons/EmptyOrders";
import ButtonPrimary from "../components/ButtonPrimary";
import { useFavoriteStore } from "../store/favoriteStore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllFavorites } from "../store/action/action";
import { useState } from "react";

export default function FavoriteScreen(props) {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([])
  const getFavorites = useSelector((st) => st.getFavorites)
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)
  const [page, setPage] = useState(1)


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      if (page == 1) {
        setFavorites([])
        dispatch(GetAllFavorites(token, 1))
      }
    });
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (page != 1) {
      dispatch(GetAllFavorites(token, page))
    }
  }, [page])

  useEffect(() => {
    if (getFavorites.data?.data) {
      let item = [...favorites]
      let combinedArray = item.concat(getFavorites.data.data);
      setFavorites(combinedArray)
    }
  }, [getFavorites])


  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndOfList =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isEndOfList) {
      loadMoreData();
    }
  };


  const loadMoreData = () => {
    if (getFavorites?.data?.next_page_url) {
      setPage(page + 1)
    }
  };

  if (getFavorites.loading) {
    return <View style={styles.loading}>
      <ActivityIndicator color={'black'} />
    </View >
  }
  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="favorite"></NavigationBottom>
      </View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={handleScroll}
        style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <SearchIconCategory></SearchIconCategory>
            </TouchableOpacity>
            <View>
              <Text style={styles.categoryTitle}>العناية ببشرة الوجه</Text>
            </View>
            <TouchableOpacity style={{ opacity: 0 }}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          {favorites.length > 0 ? (
            <View style={styles.products}>
              {favorites?.map((product, index) => {
                let fvProduct = product.product
                fvProduct.favorit_auth = [1]
                return <View
                  style={[
                    styles.product,
                    { marginRight: index % 2 == 1 ? 0 : 10 },
                  ]}
                  key={index}
                >
                  <Product favorite={true} product={product.product}></Product>
                </View>
              })}
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
  products: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  product: {
    maxWidth: 160,
    marginBottom: 10,
  },
  categorySubtitle: {
    color: "rgba(31, 32, 36, 0.5)",
    fontSize: 15,
    lineHeight: 19,
    fontFamily: "Shabnam",
  },
  categoryTitle: {
    fontSize: 22,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
    textAlign: "center",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginBottom: 50,
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
    paddingTop: 15,
    paddingBottom: 106,
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
