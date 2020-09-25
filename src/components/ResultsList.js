import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Herodetails from '../components/HeroDetails';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title ,results, navigation})=>{
    const DATA = [results.results] 
    return (
    <View>
    <Text style = {styles.title}> {title}</Text>
     <FlatList
          data={DATA[0]}
          keyExtractor={result =>result.id.toString()}
    renderItem={({item}) =>{
        return  (
            <TouchableOpacity onPress={()=>{navigation.navigate('ResultsShow',{item :item })}}>
             <Herodetails hero ={item} />
           </TouchableOpacity>
        )}}           
        />      
    </View>
);};
const styles = StyleSheet.create({ 
    title : {
        fontSize :18,
        fontWeight: 'bold'
    }
});
export default withNavigation(ResultsList);