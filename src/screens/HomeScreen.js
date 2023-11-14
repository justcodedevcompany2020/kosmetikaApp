import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import NavigationBottom from "../components/NavigationBottom";
import SearchButton from "../components/SearchButton";
import Category from "../components/Category";
import StoryIcon from "../components/Stories/Icon";

import Swiper from "react-native-swiper";

import { useNavigation } from "@react-navigation/native";
import { Video, } from "expo-av";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBaners, GetStoryes } from "../store/action/action";
import StoryScreen from "../components/Stories/StoryScreen";


export default function HomeScreen(props) {
    const navigation = useNavigation();
    const video = useRef(null);
    const [compilations, setCompilations] = useState([]);
    const dispatch = useDispatch()
    const { token } = useSelector((st) => st.static)
    const getStorys = useSelector((st) => st.getStoryes)
    const [storiesVisible, setStoriesVisible] = useState(false);
    const [showStoryes, setShowStoryes] = useState([])
    useEffect(() => {
        dispatch(GetBaners('first', token))
        dispatch(GetBaners('last', token))
        dispatch(GetStoryes(token))
    }, []);

    const ShowStory = (i) => {
        // let item = [...showStoryes]
        setStoriesVisible(true)
        setShowStoryes(getStorys.data.data[i])
    }
    // const getBaner = useSelector((st) => st.getBaner)
    return (
        <View>
            {storiesVisible && (
                <StoryScreen
                    storiesCount={showStoryes.file.length}
                    data={showStoryes}
                    hideStories={() => {
                        setStoriesVisible(false);
                    }}
                ></StoryScreen>
            )}

            <View style={styles.navBtm}>
                <NavigationBottom active="home"></NavigationBottom>
            </View>
            <ScrollView style={styles.scroll}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("CatalogTab", { screen: "Category" })
                    }
                >
                    <Video
                        ref={video}
                        style={styles.video}
                        source={require("../../assets/images/video.mp4")}
                        resizeMode="cover"
                        isMuted={true}
                        isLooping={true}
                    ></Video>
                </TouchableOpacity>
                <View style={styles.container}>
                    <View style={styles.search}>
                        <SearchButton
                            onPress={() =>
                                navigation.navigate("CatalogTab", { screen: "Search" })
                            }
                        ></SearchButton>
                    </View>
                </View>
                <View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={styles.stories}
                        contentContainerStyle={{
                            paddingLeft: 15,
                        }}
                    >
                        {getStorys.data.data?.map((elm, i) => {

                            return <StoryIcon
                                key={i}
                                image={`https://basrabackend.justcode.am/uploads/${elm.photo}`}
                                onPress={() => {
                                    ShowStory(i)
                                }}
                                text={elm.name}
                            ></StoryIcon>
                        })

                        }

                    </ScrollView>
                </View>
                <View
                    style={{
                        ...styles.container,
                        paddingBottom: 106,
                        paddingTop: 0,
                        paddingHorizontal: 0,
                    }}
                >
                    <View style={styles.compilations}>
                        {compilations.map((compilation) => (
                            <View style={styles.category} key={compilation._id}>
                                <Category
                                    compilationId={compilation._id}
                                    name="المخزون"
                                ></Category>
                            </View>
                        ))}
                    </View>
                    <View style={{ paddingHorizontal: 15, height: 190 }}>
                        <Swiper
                            height={130}
                            style={styles.bannerSwiper}
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
                            <TouchableOpacity
                                style={styles.slide}
                                onPress={() =>
                                    navigation.navigate("CatalogTab", { screen: "Category" })
                                }
                            >
                                <Image
                                    style={styles.slideImg}
                                    source={require("../../assets/images/home-swiper.png")}
                                    height={130}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.slide}
                                onPress={() =>
                                    navigation.navigate("CatalogTab", { screen: "Category" })
                                }
                            >
                                <Image
                                    style={styles.slideImg}
                                    source={require("../../assets/images/home-swiper.png")}
                                    height={130}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.slide}
                                onPress={() =>
                                    navigation.navigate("CatalogTab", { screen: "Category" })
                                }
                            >
                                <Image
                                    style={styles.slideImg}
                                    source={require("../../assets/images/home-swiper.png")}
                                    height={130}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.slide}
                                onPress={() =>
                                    navigation.navigate("CatalogTab", { screen: "Category" })
                                }
                            >
                                <Image
                                    style={styles.slideImg}
                                    source={require("../../assets/images/home-swiper.png")}
                                    height={130}
                                ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.slide}
                                onPress={() =>
                                    navigation.navigate("CatalogTab", { screen: "Category" })
                                }
                            >
                                <Image
                                    style={styles.slideImg}
                                    source={require("../../assets/images/home-swiper.png")}
                                    height={130}
                                ></Image>
                            </TouchableOpacity>
                        </Swiper>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    compilations: {
        width: "100%",
    },
    bannerSwiper: {
        marginTop: 5,
        height: 190,
    },
    slideImg: {
        width: "100%",
        height: 130,
        borderRadius: 10,
    },
    slide: {
        height: 10,
    },
    video: {
        height: 300,
        width: "100%",
    },
    category: {
        width: "100%",
        marginBottom: 25,
    },
    search: {
        width: "100%",
        marginBottom: 25,
        marginTop: -45,
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
        // paddingBottom: 106,
        display: "flex",
        alignItems: "center",
        // height: "100%",
        width: "100%",
    },
    stories: {
        // transform: [{ scaleX: -1 }],
        // paddingLeft: 20,
        // paddingRight: 20,
    },
});
