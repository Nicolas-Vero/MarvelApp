import React from 'react';
import {View,Text,StyleSheet,FlatList, Image,SafeAreaView} from 'react-native';
import { render } from 'react-dom';


const HeroDetails = ({hero}) => {    


    return(
    <View style={styles.main_container}>
      <Image
          style={styles.image}
          source={{uri: hero.thumbnail.path+'/portrait_incredible.'+hero.thumbnail.extension}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{hero.name}</Text>
            <Text style={styles.id}>ID:{hero.id}</Text>
          </View>
          
          <View style={styles.description_container}>
          {hero.description ?  <Text style={styles.description_text} numberOfLines={6}>{hero.description}</Text>:  <Text style={styles.description_text}> pas de description disponible</Text> }
           
          </View>
          
        </View>
      </View>
    )
  }


const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row',
        borderColor : 'black',
        borderWidth : 2
        
      },
      image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row',
        borderColor : 'black',
        borderWidth : 2
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
        
      },
      id: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      }
});

export default HeroDetails;