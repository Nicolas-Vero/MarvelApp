import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () =>{
    const[searchApi,results,errorMessage]= useResults(); 
    const[term, setTerm]= useState('');
    
      if (results.data == undefined ) {
        return (
            <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" /> 
            </View>
     );
      } else {
        return (
            <View >
                    <SearchBar 
                    term={term} 
                    onTermChange={setTerm}
                    onTermSubmit={()=>searchApi(term)}
                    />
               {errorMessage ? <Text>{errorMessage}</Text>: null }
            <ResultsList results={results.data} />
            </View>
            );
      } 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default SearchScreen;