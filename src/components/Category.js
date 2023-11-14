import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import Product from "./Product";
import { fetchProductsSelection, baseUrl } from "../api";

export default function Category(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductsSelection(
        "compilation",
        props.compilationId
      );
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    !!products.length && (
      <View>
        <View style={styles.top}>
          <Text style={styles.topLeft}>اظهار الكل</Text>
          <Text style={styles.topRight}>{props.name}</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            paddingLeft: 15,
            paddingRight: 0,
          }}
        >
          {products.map((product) => (
            <View style={styles.product} key={product._id}>
              <Product product={product}></Product>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  product: {
    width: 180,
    height: "auto",
    marginRight: 15,
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  topLeft: {
    color: "rgba(113, 114, 122, 0.5)",
    fontFamily: "Shabnam",
    fontSize: 16,
    lineHeight: 22,
  },
  topRight: {
    fontFamily: "ShabnamBold",
    fontSize: 22,
    lineHeight: 30,
    color: "#2F3036",
  },
});
