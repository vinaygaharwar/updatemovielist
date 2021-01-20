import * as React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {StyleSheet, Text, View, TextInput,ScrollView,Image,TouchableHighlight } from 'react-native';




function screen1({ navigation }) {
 
  const apiurl="http://www.omdbapi.com/?apikey=fce94026";
  const [state, setState]=useState(
    {
      s:"",
      results:[],
      selected:{}
    }
  );

  const search = () =>{
    try{
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;
        
      setState(prevState=>{
        return{ ...prevState,results:results}
      })
    })
  }catch(e)
  {return null}
  }

 
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies List</Text>
      <TextInput
      style={styles.searchbox} placeholder={'Enter Movie'}
      onChangeText={text=>setState(prevState=>{
        return{...prevState,s: text}
      })}
      onSubmitEditing={search}
      value={state.s}
      />
       <ScrollView style={styles.results}>
       {/* {!state? null :   */}
        
        {state.results.map(result=>(
          <TouchableHighlight 
           key={result.imdbID}
           onPress={() =>
            navigation.navigate('screen2',{result:result,state:state})
          }>
          <View style={styles.result} >
            <Image
            source={{ uri: result.Poster}}
            style={{
              width:300,
              height:300
            }}
            
            />
            <Text style={styles.heading}>{result.Title}</Text>
          </View>
          </TouchableHighlight>
        ))}
     
        
       {/* } */}
      </ScrollView>
    </View>
  );

}


export default screen1;



const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor: 'black',
    },
  title:{
    color:'white',
    fontSize:32,
  },
searchbox:{
  color:'black',
  backgroundColor:'white',
  fontSize:20,
  fontWeight:'300',
 padding:20,
 width:'100%',
 marginBottom:40
},
results:{
  flex:1,
},
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
}
});


