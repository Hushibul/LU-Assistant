// // import React from 'react'
// // import { Block ,Text } from "expo-ui-kit";
// // import { Webview } from "react-native-webview";

// // const Routine = () => {
// //     return (
// //         <Block center middle color="#eeeeee">
// //             <Text h2 > Routine </Text>
// //             <Text h3> llllfgjlksfdhjgklfdhslgkuhfdskjhgkjfdsg</Text>
            
// //          </Block>
// //     )
// // }

// // export default Routine;






// // import React from 'react'
// // import { Block ,Text } from "expo-ui-kit";

// // const Notifications = () => {
// //     return (
// //         <Block center middle color="#eeeeee">
// //             <Text h2  > Notifications </Text>
            
// //          </Block>
// //     )
// // }

// // export default Notifications;







// // React Native Show Progress bar While Loading WebView
// // https://aboutreact.com/react-native-show-progress-bar-while-loading-webview/

// //import React in our code
// import React, {useState} from 'react';
// import Routineweb from "../component/Routineweb"
// import { StatusBar } from 'expo-status-bar'
// //import all the components we are going to use
// import {StyleSheet,View,Text,Dimensions ,ScrollView} from 'react-native';
// const { width, height } = Dimensions.get('window')



// const Routine = () => {
  
//   return (
   
    
//  <View style={{backgroundColor:'#c3d136'}}>                
//     <ScrollView>
//       <View style={styles.container1 }>

//                   <View style={{ 
//                       flex: 1,
//                       width: width - 190, 
//                       height: height / 7, 
//                       backgroundColor: '#455a64',
//                       margin: 10,marginLeft:80,
//                       borderRadius: 70,
//                       borderWidth:20,
//                       borderColor:'#c3d136',
//                       marginTop:50,
//                       padding:5  }}>
                      
//                       <Text style={{fontSize:20,color:"white",fontWeight:'bold', margin:5,padding:15}}>
//                         Please connected with internet 
//                       </Text>
//                     </View>
//        </View>             
//    </ScrollView>

//     <ScrollView>
//       <View style={styles.container }>

//                   <View style={{ 
//                       flex: 1,
//                       width: width - 20, 
//                       height: height / 1.3, 
//                       backgroundColor: 'white',
//                       margin: 10,marginLeft:10,
//                       borderRadius: 70,
                     
//                        }}>
//                         <Routineweb/>  
//                       {/* <Text style={{fontSize:15,color:"red", margin:20,padding:20}}>
//                         Please connected with internet 
//                       </Text> */}
//                     </View>

                    
//   </View>
//     </ScrollView>





//     </View>
   
      

    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
    
    
//     //color:'#c3d136',
//     //backgroundColor:"#455a64"
//     backgroundColor:"#455a64"
//    },
//    container1: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//     //color:'#c3d136',
//     //backgroundColor:"#455a64"
//     backgroundColor:"#455a64",
//     marginBottom:25,
//     padding:5
    
//    },
  
  
//   webcontainer: {
//     backgroundColor: '#F5FCFF',
//     flex: 1,
//     marginTop:20,
//     maxHeight:400 
//   //   alignItems: 'center',
//   //   justifyContent: 'space-between',

//   },
//   activityIndicatorStyle: {
//     flex: 1,
//     position: 'absolute',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     marginTop: 'auto',
//     marginBottom: 'auto',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     justifyContent: 'center',


    
    
//   },

//   pagecut: {
    
//     marginTop: -230,
//     marginBottom:-2700,
    
//     //width: 320,
//     //flex: 1
    
//   },



//   cardView: {
//     flex: 1,
//     width: width - 20, //bothside cut-off 20
//     height: height / 4, //bothside devide 
//     backgroundColor: 'white',
//     margin: 10,
//     borderRadius: 10,
    
// },
// textView: {
//  // position: 'absolute',
//   bottom: 10,
//   margin: 10,
//   left: 5,
// },

// // container: {
// // flex: 1,
// // marginTop: StatusBar.currentHeight || 0,
// // //color:'#c3d136',
// // backgroundColor:"#455a64"
// // },
// item: {
// backgroundColor: '#f9c2ff',
// padding: 20,
// marginVertical: 8,
// marginHorizontal: 16,
// },
//  title: {
//  fontSize: 32,
// },

// view: {
//   flex: 1,
//  backgroundColor:'#c3d136',
//  },
//  image: {
//   width: width - 20,
//   height: height / 3,
//   borderRadius: 10
// },
  
// });

// export default Routine;



// import React from 'react'
// import { Block ,Text } from "expo-ui-kit";

// const Notifications = () => {
//     return (
//         <Block center middle color="#eeeeee">
//             <Text h2  > Notifications </Text>
            
//          </Block>
//     )
// }

// export default Notifications;







// React Native Show Progress bar While Loading WebView
// https://aboutreact.com/react-native-show-progress-bar-while-loading-webview/

//import React in our code
import React from 'react'
import Routineweb from "../component/Routineweb"
import { StatusBar } from 'expo-status-bar'
//import all the components we are going to use
import {StyleSheet, View,Text,ActivityIndicator,Dimensions ,ScrollView} from 'react-native';
const { width, height } = Dimensions.get('window')
//import WebView




const Routine = () => {
  //const [visible, setVisible] = useState(false);
  return (
   
    //  <SafeAreaView style={{flex: 1}}> 
     
    //   <View style={styles.container}>
      
       
    //     <WebView 
    //       //Loading URL
    //       source={{uri: 'https://www.lus.ac.bd/notice/'}}
    //       style={styles.pagecut}
    //       //Enable Javascript support
    //       javaScriptEnabled={true}
    //       //For the Cache
    //       domStorageEnabled={true}
    //       onLoadStart={() => setVisible(true)}
    //       onLoad={() => setVisible(false)}
    //     />
    //     {visible ? <ActivityIndicatorElement /> : null}
    //   </View>
      
    //   </SafeAreaView>
 <View style={{backgroundColor:'#455a64'}}>                
    <ScrollView>
      <View style={styles.container1 }>

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
                      
                      <Text style={{fontSize:20,color:"white",fontWeight:'bold', margin:5,padding:15}}>
                        Please connect with internet 
                      </Text>
                    </View>
       </View>             
   </ScrollView>

    <ScrollView>
      <View style={styles.container }>

                  <View style={{ 
                      flex: 1,
                      width: width - 20, 
                      height: height / 1.3, 
                      backgroundColor: 'white',
                      margin: 10,
                      marginLeft:10,
                      borderRadius: 70,
                     
                       }}>
                        <Routineweb/>  
                      
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
    backgroundColor:"#455a64"
   },
   container1: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    //color:'#c3d136',
    //backgroundColor:"#455a64"
    backgroundColor:"#455a64",
    marginBottom:25,
    padding:5
    
   },
  
  
  webcontainer: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    marginTop:20,
    maxHeight:400 
  //   alignItems: 'center',
  //   justifyContent: 'space-between',

  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',


    
    
  },

  pagecut: {
    
    marginTop: -230,
    marginBottom:-2700,
    
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
 backgroundColor:'#c3d136',
 },
 image: {
  width: width - 20,
  height: height / 3,
  borderRadius: 10
},
  
});

export default Routine;