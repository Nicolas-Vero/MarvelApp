import React,{ useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Herodetails from '../components/HeroDetails';
import axios from 'axios'



const ResultScreen = ({navigation}) =>{
    const[results,setResults]=useState();
    const[errorMessage, setErrorMessage]= useState('');
    const item = navigation.getParam('item');
    const dataDetails = [item.series.items];
   // console.log(item.id);
    
  const comicsDetails =(id)=> {
      try{
          console.log('IIDDD');
          
          console.log(id);
          
         axios.get('https://gateway.marvel.com:443/v1/public/characters/'+id+'/comics?apikey=5219c647d67dc19881d2766d0f6dd74c&hash=9e354b7b72f423cb1e4a6f69229efe05&ts=1')
        .then(res => {
          setResults(res.data);
          console.log(res);
          
        })
    }catch(err){
        console.log(err);
       
       setErrorMessage(err)
    }
 };

 useEffect(()=>{
    comicsDetails(item.id);
    
},[])
        

    return (<View>
         <FlatList
          data={dataDetails[0]}
          keyExtractor={result =>result.name.toString()}
    renderItem={({item}) =>{
        return  ( 
           <Text>{item.name}</Text>
   
        )}}/>
    </View>
    )
}


export default (ResultScreen);