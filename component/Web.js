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
import React, {useState} from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet, 
  View,
  ActivityIndicator
} from 'react-native';

//import WebView
import {WebView} from 'react-native-webview';

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator
        color="#009688"
        size="large"
      />
    </View>
  );
};

const Web = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <WebView 
          //Loading URL
          source={{uri: 'https://google.com'}}
          style={styles.pagecut}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <ActivityIndicatorElement /> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    marginTop:260,
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
  
});

export default Web;