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
import SearchInput from "../components/SearchInput";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSearchHistory, creatHistorySearch } from "../store/action/action";
import { useState } from "react";

export default function SearchScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { token } = useSelector((st) => st.static)
  const getSearchHistory = useSelector((st) => st.getSearchHistory)
  const [page, setPage] = useState(1)
  const [searchData, setSearchData] = useState([])
  const [searchValue, setSearchValue] = useState(props.route.params?.searchValue)


  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isEndOfList =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isEndOfList) {
      loadMoreData();
    }
  };


  const loadMoreData = () => {
    if (getSearchHistory.data.data?.next_page_url) {
      setPage(page + 1)
    }
  };

  useEffect(() => {
    dispatch(GetSearchHistory(token, page))
  }, [page])

  useEffect(() => {

    let item = []

    let combinedArray = item
    if (getSearchHistory.data?.data?.data.length) {
      combinedArray = item.concat(getSearchHistory.data?.data?.data);
    }
    setSearchData(combinedArray)
  }, [getSearchHistory])



  return (
    <View>
      <View style={styles.navBtm}>
        <NavigationBottom active="catalog"></NavigationBottom>
      </View>
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}

        style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.top}>
            <BackIcon style={{ opacity: 0 }}></BackIcon>
            <Text style={styles.title}>البحث في الكتالوج</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Catalog")}
            >
              <BackIcon></BackIcon>
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <SearchInput
              value={searchValue}
              onChange={(e) => {

                setSearchValue(e)
              }}
              onSubmitEditing={() => {

                navigation.navigate("Category", {
                  categoryId: props.route.params.categoryId,
                  categoryName: props.route.params.categoryName,
                  search: searchValue
                })
                dispatch(creatHistorySearch({ text: searchValue, }, token))
              }}
            ></SearchInput>
          </View>
          {searchData.map((elm, i) => {
            console.log(searchData, 'searchData')
            return <Text key={i} style={styles.searchItem}>{elm.text}</Text>
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 30,
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
