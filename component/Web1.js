


import React, { Component } from "react";
import { BackHandler, 
    StyleSheet, 
    View} from "react-native";
  
    import { WebView } from "react-native-webview";
    

export default class Web1 extends Component {
 
   
 
 
    WEBVIEW_REF = React.createRef();

  state = {
    canGoBack: false,
    
    
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };



  

  render() {
    return (
                <View style={styles.container}> 
                  <WebView
                  source={{ uri: "https://www.lus.ac.bd/notice/" }}
                  style={styles.pagecut}
                  ref={this.WEBVIEW_REF}
                  onNavigationStateChange={this.onNavigationStateChange}
                />
                </View>


    
    ); 
  }
}







const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
     margin:20,
      marginTop:20,
        maxHeight:800, 
    // alignItems: 'center',
    //   justifyContent: 'space-between',
  
    },
   
  
      
      
    
  
    pagecut: {
      
      // marginTop: -230,
      // marginBottom:-2700,
      marginTop: -230,
      marginBottom:-2700,  
      //width: 320,
      //flex: 1
      
    },
   
    
});
  