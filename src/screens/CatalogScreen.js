import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import NavigationBottom from "../components/NavigationBottom";
import SearchButton from "../components/SearchButton";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { baseUrl } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../store/action/action";

export default function CatalogScreen(props) {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)
  const getProducets = useSelector((st) => st.getProducets)
  useEffect(() => {
    dispatch(GetProducts({}, token))
  }, []);

  useEffect(() => {
    if (getProducets.data?.length) {
      setCategories(getProducets.data)
    }
  }, [getProducets])

  const navigation = useNavigation();
  if (getProducets.loading) {
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
        <View style={styles.container}>
          <View style={styles.search}>
            <SearchButton
              onPress={() => navigation.navigate("Search")}
            ></SearchButton>
          </View>
          <Text style={styles.catalogTitle}>فهرس</Text>
          <View style={styles.catalogItems}>
            {categories.map((item, index) => {
              return <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("Category", {
                    categoryId: item.id,
                    categoryName: item.name,
                  })
                }
                style={[
                  styles.catlaogItem,
                  { marginRight: index % 2 == 1 ? 0 : 10 },
                ]}
              >
                <ImageBackground
                  style={styles.catalogItemBg}
                  resizeMode="cover"
                  source={{ uri: `https://basrabackend.justcode.am/uploads/${item.photo}` }}
                ></ImageBackground>
                <Text style={styles.catalogItemText}>{item.name}</Text>
                <LinearGradient
                  colors={["transparent", "#F2F2F4"]}
                  locations={[0, 0.95]}
                  style={styles.catalogItemGradient}
                ></LinearGradient>
              </TouchableOpacity>
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  catalogItemGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 5,
  },
  catalogItemBg: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  catalogItems: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  catalogItemText: {
    fontSize: 16,
    color: "#1F2024",
    fontFamily: "ShabnamBold",
    marginBottom: 15,
    textAlign: "center",
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 10,
  },
  catlaogItem: {
    width: 150,
    height: 160,
    borderRadius: 15,
    marginBottom: 10,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  catalogTitle: {
    color: "#1F2024",
    fontSize: 22,
    lineHeight: 26,
    fontFamily: "ShabnamBold",
    marginBottom: 20,
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
  search: {
    width: "100%",
    marginBottom: 20,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
