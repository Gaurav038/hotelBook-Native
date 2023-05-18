import React, { useState } from 'react'
import { View, Text, TextInput,StyleSheet, SafeAreaView, Platform, StatusBar  } from 'react-native'
import { Feather } from "@expo/vector-icons";
import SearchResult from '../components/SearchResult';
import { data } from '../data';


const Search = () => {

  const [input, setInput] = useState("")

  return (
    <SafeAreaView style={searchStyle.AndroidSafeArea} > 
      <View style={searchStyle.container}>
        <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder='enter your destination' />
        <Feather name="search" size={24} color="black" />
      </View>

      <SearchResult data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  )
}

export default Search

const searchStyle = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container:{
      flexDirection: 'row',
      borderColor: "#003580",
      borderWidth: 4,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      justifyContent: 'space-between'
    }
    
})