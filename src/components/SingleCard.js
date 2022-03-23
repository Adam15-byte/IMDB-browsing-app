import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext } from "react";
import { COLORS } from "../consts/colors";
import Star from "react-native-star-view";
import { Background } from "../context/Background";

const SingleCard = ({ movie }, translateY, index) => {
  const { title, year, image, crew, imDbRating } = movie;
  const { handleChangeImage } = useContext(Background);
  return (
    <>
      {/* {!image && <View style={styles.spacer} />} */}
      {image && (
        <TouchableOpacity
          style={styles.mainContainer}
          onPress={() => handleChangeImage(image)}
          activeOpacity={0.9}
        >
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{imDbRating}</Text>
            <Star
              totalScore={10}
              score={parseInt(imDbRating)}
              style={styles.starStyle}
            />
          </View>
          <Text style={styles.yearText}>{year}</Text>
          <Text
            style={styles.castingText}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {crew}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  mainContainer: {
    height: 400,
    width: 200,
    alignItems: "center",
    borderRadius: 40,
    backgroundColor: COLORS.white,
    padding: 10,
    marginHorizontal: 20,
    top: 250,
  },
  image: {
    width: "100%",
    height: "80%",
    borderRadius: 40,
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starStyle: {
    marginLeft: 5,
    height: 20,
    width: 100,
  },
  ratingText: { fontWeight: "600", fontSize: 13, paddingTop: 4 },
  yearText: { fontWeight: "600", fontSize: 13, paddingTop: 3 },
  castingText: { fontSize: 13, marginTop: 3 },
});
