import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function StoryIcon(props) {
  return (
    <TouchableOpacity style={styles.storyWrap} onPress={props.onPress}>
      <View style={styles.story}>
        <Image style={styles.storyImg} source={{ url: props.image }}></Image>
      </View>
      <Text style={styles.storyText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  storyWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginBottom: 15,
  },
  storyText: {
    fontFamily: "Shabnam",
    color: "#1F2024",
    fontSize: 14,
  },
  story: {
    width: 80,
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(31, 32, 36, 0.5)",
    borderRadius: 40,
    marginBottom: 15,
  },
  storyImg: {
    width: 62,
    height: 62,
    // marginRight: 1,
    // marginBottom: 1,
    borderRadius: 63
  },
  stories: {
    flex: 1,
    marginBottom: 20,
    paddingBottom: 0,
  },
});
