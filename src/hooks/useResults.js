import React, { useState, useEffect } from 'react';
import {View, Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import marvel from '../api/marvel';
import MainAxios from '../api/marvel';

export default ()=>{
    const[results,setResults]=useState([]);
    const[errorMessage, setErrorMessage]= useState('');
    

    const searchApi = async(seearhTerm) =>{
        try{
        const response =  await  MainAxios.get('',{
        params:{
            nameStartsWith:seearhTerm,
            limit:20
         }
       }).then(
        console.log('DATA'));
      // console.log(response.data)
     
      setResults(response.data);}
       catch(err){
           console.log(err);
          setErrorMessage(err)
       }
    };
    
     useEffect(()=>{
         searchApi('spider');
     },[])
return [searchApi,results,errorMessage];
}