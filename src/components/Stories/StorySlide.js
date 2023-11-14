import { useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";

export default function StorySlide(props) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  let widthInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  startAnimation();

  useEffect(() => {
    if (props.active) {
      setAnimation(new Animated.Value(0));
      startAnimation();
    }
  }, [activeImageIndex, props.active]);

  function nextSlide() {
    if (activeImageIndex + 1 < props.images.length) {
      setActiveImageIndex(activeImageIndex + 1);
    } else {
      props.onNextScreen();
    }
  }

  function prevSlide() {
    if (activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    } else {
      props.onPrevScreen();
    }
  }

  return (
    <View>
      <View style={styles.preloaderWrap}>
        <Image source={require("../../../assets/images/loader.gif")}></Image>
      </View>
      <Image
        source={{
          uri: props.images[activeImageIndex],
        }}
        style={styles.image}
      ></Image>
      <View style={styles.storyAuthor}>
        <Text style={styles.storyAuthorText}>متجرنا</Text>
        <View style={styles.storyAuthorAvatar}>
          <Image
            source={require("../../../assets/images/storyAuthor.png")}
            style={styles.storyAuthorImage}
          ></Image>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "transparent"]}
        style={styles.shadow}
      ></LinearGradient>
      <View style={styles.storyLines}>
        {props.images.map((image, index) => (
          <View key={index} style={styles.storyLine}>
            {index < activeImageIndex && (
              <View style={{ ...styles.storyLineActive, width: `100%` }}></View>
            )}
            {index == activeImageIndex && (
              <Animated.View
                style={{ ...styles.storyLineActive, width: widthInterpolate }}
              ></Animated.View>
            )}
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          prevSlide();
        }}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.next}
        onPress={() => {
          nextSlide();
        }}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  preloaderWrap: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  storyAuthorAvatar: {
    width: 52,
    height: 52,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 26,
  },
  storyAuthor: {
    position: "absolute",
    left: 15,
    top: 42,
    zIndex: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    transform: [{ scaleX: -1 }],
  },
  storyAuthorText: {
    fontFamily: "Shabnam",
    color: "white",
    fontSize: 17,
    marginRight: 8,
  },
  storyAuthorImage: {
    width: 44,
    height: 44,
    marginBottom: 1,
    marginRight: 1,
  },
  storyLines: {
    position: "absolute",
    top: 20,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: 2,
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: "row",
    zIndex: 23,
    gap: 5,
  },
  storyLine: {
    height: 3,
    width: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
    flex: 1,
    marginLeft: 5,
  },
  storyLineActive: {
    height: 3,
    width: "0%",
    backgroundColor: "white",
    borderRadius: 2,
    flex: 1,
  },
  back: {
    position: "absolute",
    width: 100,
    height: "100%",
    bottom: 0,
    left: 0,
    opacity: 0,
  },
  next: {
    position: "absolute",
    opacity: 0,
    width: 100,
    height: "100%",
    bottom: 0,
    right: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 195,
    zIndex: 22,
  },
});
