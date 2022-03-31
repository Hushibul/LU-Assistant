import React from 'react'
import Resultweb from "../component/Resultweb"
import { StatusBar } from 'expo-status-bar'
//import all the components we are going to use
import { StyleSheet, View, Text, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window')
//import WebView

const Result = () => {

  return (

    <View style={{flex:1, backgroundColor: '#455a64' }}>
      <ScrollView>
        <View style={styles.container1}>

          <View style={{
            flex: 1,
            width: 'auto',
            height: 'auto',
            backgroundColor: '#455a64',
            margin: 5, 
            borderRadius: 50,
            borderWidth: 12,
            borderColor: '#c3d136',
            marginTop: 50,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

            <Text style={{ fontSize: 20, color: "white", fontWeight: 'bold', margin: 5, padding: 15 }}>
              Please connect with internet
                      </Text>
          </View>
        </View>
      </ScrollView>

      <ScrollView>
        <View style={styles.container}>

          <View style={{
            flex: 1,
            width: width - 20,
            height: height / 1.4,
            backgroundColor: 'white',
            margin: 10,
            marginLeft: 10,
            borderRadius: 50,
          }}>

            <Resultweb />

          </View>

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    //color:'#c3d136',
    //backgroundColor:"#455a64"
    backgroundColor: "#455a64"
  },

  container1: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    //color:'#c3d136',
    //backgroundColor:"#455a64"
    backgroundColor: "#455a64",
    // marginBottom: 1,
    padding: 5
  },

  

  
  pagecut: {

    marginTop: -230,
    marginBottom: -2700,

    //width: 320,
    //flex: 1

  },

  cardView: {
    flex: 1,
    width: width - 20, //bothside cut-off 20
    height: height / 4, //bothside devide 
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,

  },
  textView: {
    bottom: 10,
    margin: 10,
    left: 5,
  },


  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
  },

  view: {
    flex: 1,
    backgroundColor: '#c3d136',
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10
  },

});

export default Result;