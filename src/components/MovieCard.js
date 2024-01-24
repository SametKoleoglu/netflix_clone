import { FlatList, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const MovieCard = ({title,data}) => {

  const navigation = useNavigation();

  handleOnClick = (movieData)=>{
    navigation.navigate('VideoPlayer',{movieData})
  }

  const renderMovieCard =({item,index})=>{
    return(
      <TouchableOpacity onPress={()=>handleOnClick(item)}>
        <Image resizeMode='contain' style={styles.movieImg} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`,}} />
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',fontSize:16,fontWeight:'bold',letterSpacing:0.5,marginLeft:8}}>
        {title}
      </Text>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={data} renderItem={renderMovieCard} ItemSeparatorComponent={()=><View style={{width:15}}></View>} />
    </View>
  )
}

export default MovieCard

const styles = StyleSheet.create({
    container:{
        height:responsiveHeight(40),
        gap:15,
        marginTop:8
    },
    movieImg:{
        width:responsiveWidth(50),
        height:'100%',
        borderRadius:15
    }
});