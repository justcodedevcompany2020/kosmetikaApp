import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import BackIcon from "../icons/BackIcon";
import { useNavigation } from "@react-navigation/native";
import Product from "../components/Product";
import SearchButton from "../components/SearchButton";

export default function SearchResultScreen(props) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="catalog"></NavigationBottom>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text style={styles.title}>البحث في الكتالوج</Text>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <SearchButton onPress={() => navigation.navigate("Search")}>
              كريم
            </SearchButton>
          </View>
          <Text style={styles.searchSubtitle}>
            المنتجات التي تم العثور عليها: 126
          </Text>
          <View style={styles.products}>
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <View
                style={[
                  styles.product,
                  { marginRight: index % 2 == 1 ? 0 : 10 },
                ]}
                key={index}
              >
                <Product></Product>
              </View>
            ))}
          </View>
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
  searchSubtitle: {
    color: "rgba(31, 32, 36, 0.5)",
    fontFamily: "Shabnam",
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 25,
  },
  searchItem: {
    width: "100%",
    textAlign: "right",
    marginBottom: 20,
    fontFamily: "Shabnam",
    fontSize: 18,
    lineHeight: 22,
    color: "#1F2024",
  },
  searchItemGray: {
    color: "rgba(31, 32, 36, 0.5)",
  },
  search: {
    width: "100%",
    marginBottom: 25,
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
    marginBottom: 15,
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
});
