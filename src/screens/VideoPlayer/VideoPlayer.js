import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Fontisto, Octicons,Entypo,MaterialIcons } from "@expo/vector-icons";
import Video from "react-native-video";
import  Orientation  from "@hortau/react-native-orientation-locker";


const VideoPlayer = ({ route }) => {
  const {
    title,
    release_date,
    genre,
    poster_path,
    overview,
    backdrop_path,
    vote_count,
  } = route.params.movieData;

  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={"#080508"} />
      <ScrollView style={styles.scrollContainer}>
        {isVideoVisible ? (
          <Video style={styles.firstContainer} setControls controls repeat={false} resizeMode='cover' source={{uri:'URL',}} onFullscreenPlayerWillPresent={()=>{Orientation.lockToLandscape()}}
          onFullscreenPlayerWillDismiss={()=>{Orientation.lockToPortrait();}} />
        ) : (
          <Image
            style={styles.firstContainer}
            resizeMode="cover"
            source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
          />
        )}

        {/* Second Container */}
        <View style={styles.secondContainer}>
          {/* First Box */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Fontisto name="netflix" size={20} color="red" />
            <Text style={{ fontSize: 15, color: "#fff", letterSpacing: 5 }}>
              SERIES{" "}
            </Text>
          </View>
          {/* First Box */}

          {/* Second Box */}
          <Text style={{ color: "#fff", fontSize: 23, fontWeight: "bold" }}>
            {title}
          </Text>
          {/* Second Box */}

          {/* Third Box */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 15, color: "#fff" }}>
              {release_date.split("-")[0]}
            </Text>
            <View
              style={{ width: 2.5, height: 23, backgroundColor: "#fff" }}
            ></View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="favorite" size={20} color="red" />

              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "600",
                  lineHeight: 15,
                }}
              >
                {vote_count}
              </Text>

              <MaterialIcons name="hd" size={27} color="#fff" />
            </View>
          </View>

          {/* Third Box */}
        </View>

        <View style={{ padding: 10, gap: 10 ,marginTop:10}}>
          <TouchableOpacity
            onPress={() => {setIsVideoVisible(true)}}
            activeOpacity={0.5}
            style={styles.playButton}
          >
            <Entypo name="controller-play" size={23} color={"#000"} />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: "#000",
                  marginRight: 10,
                  fontWeight: "600",
                },
              ]}
            >
              Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.5}
            style={[styles.playButton,{backgroundColor:'#2b292b',gap:11}]}
          >
            <Octicons name="download" size={23} color={"#fff"} />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: "#fff",
                  fontWeight: "600",
                },
              ]}
            >
              Download
            </Text>
          </TouchableOpacity>

          <Text style={{fontSize:15,color:'#fff',marginVertical:10,lineHeight:25,textAlign:'justify'}}>{overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    flex: 1,
  },
  firstContainer: {
    height: responsiveHeight(35),
  },
  secondContainer: {
    padding: 10,
    gap: 10,
  },
  titles: {
    fontSize: responsiveFontSize(3),
    color: "#fff",
    fontWeight: "500",
  },
  playButton: {
    backgroundColor: "#fff",
    // width:responsiveWidth(30),
    height: responsiveHeight(6),
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginRight: 15,
  },
});
