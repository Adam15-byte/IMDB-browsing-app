import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Text,
  Image,
} from "react-native";
import React, { useRef, useEffect, useState, useContext } from "react";
import { COLORS } from "../consts/colors";
import SingleCard from "../components/SingleCard";
import { LinearGradient } from "expo-linear-gradient";
import { Background } from "../context/Background";
import { TOPTVSHOWS } from "../../assets/sampleData/Top250tvshows";

const { width, height } = Dimensions.get("window");
const ITEM_SIZE = 240;

const TheBestTVshows = () => {
  const [topTvshows, setTopTvshows] = useState(null);
  const { imageBG, handleChangeImage } = useContext(Background);
  const transformData = () => {
    const transformedData = TOPTVSHOWS.items;
    setTopTvshows([
      { id: "leftSpacer" },
      ...transformedData,
      { id: "rightSpacer" },
    ]);
  };

  useEffect(() => {
    transformData();
  }, []);
  useEffect(() => {
    handleChangeImage(TOPTVSHOWS.items[0].image);
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current;
  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -50, 0],
    });

    if (!item.image) {
      return <View style={styles.spacer} />;
    }
    return (
      <View style={styles.animationContainer}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <SingleCard movie={item} width={width} index={index} />
        </Animated.View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {!topTvshows && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {topTvshows && (
        <>
          <View
            intensity={100}
            style={{
              position: "absolute",
              height: 400,
              width: width,
              top: 0,
            }}
          >
            <Image
              source={{
                uri: imageBG,
              }}
              style={{ height: "100%", width: width }}
              blurRadius={4}
              resizeMode="cover"
            />
            <LinearGradient
              colors={["transparent", "white"]}
              style={styles.linearColorBackground}
            />
          </View>
          <Animated.FlatList
            data={topTvshows}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            decelerationRate={0}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomTextStyle}>ALL TIME BEST TVSHOWS</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default TheBestTVshows;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  animationContainer: {
    height: "100%",
    top: 0,
  },
  spacer: {
    height: 1,
    width: 100,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignSelf: "center",
  },
  backdropContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  linearColorBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
  },
  bottomTextContainer: {
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTextStyle: {
    fontWeight: "700",
    letterSpacing: 7,
    fontSize: 16,
  },
});
