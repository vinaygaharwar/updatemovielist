import * as React from 'react';
import {StyleSheet, Text, View,Image,Modal,TouchableHighlight, Button } from 'react-native';




function screen2({ route,navigation }) {
  
  const {result,state
  }=route.params;
  console.log(result);
  
  return(
    <View>
    <TouchableHighlight 
    key={result.imdbID}
     onPress={()=> Nextpage( (result.imdbID))}>
   <View style={styles.result} >
     
     <Text style={styles.heading}>{result.Title}</Text>
     
   </View>
   </TouchableHighlight>
  
     
      <Modal 
        
        visible={(typeof result.Title !="undefined")}>
          <View style={styles.page}>
            <Text style={styles.pagetitle}>{result.Title}</Text>
            <Image
            source={{ uri: result.Poster}}
            style={{
              width:200,
              height:200,
              marginBottom:20
            }}/>
            <Text style={styles.Type}>Year:{result.Year}</Text>
            <Text style={styles.Type}>Seems Interesting! {result.Type} , you have to watch it</Text>
        
      </View>
      <TouchableHighlight 
      onPress={()=>navigation.navigate('screen1')}>
        <Text style={styles.BackBtn}>Back</Text>
  
      </TouchableHighlight>
      </Modal>
      </View>
  )
  }
  
 
  
  
  
  export default screen2;
  
  const styles = StyleSheet.create(
    {
     
  result:{
    flex:1,
    width:'100%',
    marginBottom:20
  },
  heading:{
    color:'white',
    fontSize:18,
    fontWeight:'700',
    padding:20,
    backgroundColor:'red'
  },
  page:{
  padding:30
  },
  pagetitle:{
    fontSize:24,
    fontWeight:'700',
    marginBottom:20,
    color:'black'
  },
  Type:{
    color:'black',
    fontSize:22,
    fontWeight:'800'
  },
  BackBtn:{
    padding:20,
    fontSize:20,
    fontWeight:'700',
    color:'white',
    backgroundColor:'red'
  }
  });
  
  
  