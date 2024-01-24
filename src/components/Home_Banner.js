import {
  Alert,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getUpComingMovies } from "../apis/Network";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

const Home_Banner = () => {
  const [upComingApiData, setUpComingApiData] = useState([]);

  useEffect(() => {
    const handleUpComingApp = async () => {
      const { data, status } = await getUpComingMovies();
      if (status === 200) {
        setUpComingApiData(data.results);
      } else {
        Alert.alert(`Request Failed with ${data}`);
      }
    };
    handleUpComingApp();
  }, []);

  const renderMovieBanner = ({ item, index }) => {
    return (
      <ImageBackground style={styles.movieBanner} resizeMode="cover" source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,}}>

        <LinearGradient style={styles.linearContainer} colors={['rgba(0,0,0,0.1)','rgba(0,0,0,7)']}>
            <Text style={styles.titles}>My List</Text>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.5} style={styles.playButton}>
              <Entypo name="controller-play" size={30} color={'#000'}/>
            <Text style={[styles.titles,{fontSize:responsiveFontSize(2.7),color:'#000',marginRight:10,fontWeight:'600',}]}>Play</Text>
            </TouchableOpacity>
            <Text style={styles.titles}>Info</Text>
        </LinearGradient>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
      pagingEnabled
      showsHorizontalScrollIndicator={false}
        horizontal
        data={upComingApiData}
        renderItem={renderMovieBanner}
      />
    </View>
  );
};

export default Home_Banner;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(65),
    width: "100%",
  },
  movieBanner:{
    width:responsiveWidth(100),
    height:'100%',
    justifyContent:'flex-end',
    opacity:0.9
  },
  linearContainer:{
    flex:0.2,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignSelf:'stretch'
  },
  titles:{  
    fontSize:responsiveFontSize(3),
    color:'#fff',
    fontWeight:'500',
    marginRight:10
  },
  playButton:{
    backgroundColor:'#fff',
    width:responsiveWidth(30),
    height:responsiveHeight(6),
    borderRadius:10,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
    gap:5,
    marginRight:15
  }
});
