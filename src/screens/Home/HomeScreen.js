import { StyleSheet,StatusBar,ScrollView, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home_Banner from '../../components/Home_Banner'
import MovieCard from '../../components/MovieCard'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from '../../apis/Network'


const HomeScreen = () => {

  const [nowPlayingData, setnowPlayingData] = useState([])
  const [popularMoviesData, setpopularMoviesData] = useState([])
  const [topRatedData, setTopRatedData] = useState([])



  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getNowPlayingMovies();
      if (status === 200) {
        setnowPlayingData(data.results);
      } else {
        Alert.alert(`Request Failed with ${data}`);
      }
    };
    handleApi();
  }, []);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getPopularMovies();
      if (status === 200) {
        setpopularMoviesData(data.results);
      } else {
        Alert.alert(`Request Failed with ${data}`);
      }
    };
    handleApi();
  }, []);

  useEffect(() => {
    const handleApi = async () => {
      const { data, status } = await getTopRatedMovies();
      if (status === 200) {
        setTopRatedData(data.results);
      } else {
        Alert.alert(`Request Failed with ${data}`);
      }
    };
    handleApi();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} translucent backgroundColor={'transparent'}/>
      <ScrollView style={styles.scrollView}>
        <Home_Banner/>
        <View style={styles.subContainer}>
          <MovieCard title={"Now Playing"} data={nowPlayingData}/>
          <MovieCard title={"Popular Movies"} data={popularMoviesData}/>
          <MovieCard title={"Top Rated Movies"} data={topRatedData}/>
    
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
  },
  scrollView:{
    flex:1,
  },
  subContainer:{
    paddingHorizontal:15,
    gap:10,
    marginTop:20
  }
})