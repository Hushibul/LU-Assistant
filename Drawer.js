import React from "react";
import {  Image ,StyleSheet } from "react-native";
import { Block ,Text ,Button } from "expo-ui-kit";
import { createStackNavigator } from '@react-navigation/stack';
import {
    DrawerItem,
    DrawerContentScrollView,
    createDrawerNavigator,
  } from '@react-navigation/drawer';
   import {AntDesign,FontAwesome5,Feather,Foundation,MaterialIcons,Ionicons} from "@expo/vector-icons";
 


//import screen
import FacultyMembers from "./Screen/FacultyMembers";
import About from "./Screen/About";
import Routine from "./Screen/Routine";
import Notifications from "./Screen/Notifications";
import Result from "./Screen/Result";

import Animated from "react-native-reanimated";
import Home from "./Screen/Home";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const Screen = ({ navigation,style }) => {
 
  //we need to wrap this into a view/block and press the style to thid wrap  
  return (
    <Animated.View style={[{flex: 1 , overflow:"hidden"},style]}>
    <Stack.Navigator 
        screenOptions={{
            headerTransparent:true,
            headerTitle:null,
            headerLeft:()=>(
                <Button 
                 padding
                 transparent
                  marginHorizontal 
                  onPress={()=>{navigation.openDrawer()}}>
                        {/* Add manu icom */}
                        {/* <Text white small>
                            Manu
                        </Text> */}

                        <Feather name="menu" color="green" size={28}/>
                </Button>
                )
            

     }}
        >
        <Stack.Screen name="Home" component={Home} />
       
        <Stack.Screen name="Routine" component={Routine} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="FacultyMembers" component={FacultyMembers} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      </Animated.View>
    
    );
};

// build Custom Drawer manue why use treeple dot
//[] style drawer manu  https://www.lus.ac.bd/wp-content/themes/leading-university-theme/img/logo-white.png
//https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png
const DrawerContent = (props)=> {
 
    return (
      <DrawerContentScrollView {...props}>       
      <Block>
        {/* <DrawerItemList {...props} /> 
        Add Avatar */}

        <Block flex={0.4} margin={20} bottom > 
            <Image source={{uri:"https://www.lus.ac.bd/wp-content/themes/leading-university-theme/img/logo-white.png", 
            height:150, 
            width:130}} 
           resizeMode="contain"
            //style={{ borderRadius: 30 }}  <Text title>Leading University</Text>
            />
          
            <Text size={12} style={{color:"white"}}>A Promise to Lead</Text>
          </Block>

        {/* add icon for item */}
        <DrawerItem
          label="Home"
          labelStyle={{marginLeft:-16 ,color:"white"}}
          onPress={() => props.navigation.navigate("Home")}
          icon={()=> < AntDesign name="home" color="#c3d136" size={20}/>}
        />

        
        

          <DrawerItem
          label="Notifications"
          labelStyle={{marginLeft:-16 ,color:"white"}}
          onPress={() => props.navigation.navigate("Notifications")}
          icon={()=> < AntDesign name="notification" color="#c3d136" size={20}/>}
        />
      

          <DrawerItem
          label="Routine"
          labelStyle={{marginLeft:-16 ,color:"white"}}
          onPress={() => props.navigation.navigate("Routine")}
          icon={()=> <MaterialIcons name="schedule" size={20} color="#c3d136" />}
        />

          <DrawerItem
          label="Result"
          labelStyle={{marginLeft:-16 ,color:"white"}}
          onPress={() => props.navigation.navigate("Result")}
          icon={()=> <Foundation  name="results" size={20} color="#c3d136" />}
        />

<DrawerItem
          label="Faculty Members"
          labelStyle={{marginLeft:-16 ,color:"white"}}
          onPress={() => props.navigation.navigate("FacultyMembers")}
          icon={()=> <FontAwesome5 name="layer-group" size={20} color="#c3d136" />}
        />


<DrawerItem
          label="About"
          labelStyle={{marginLeft:-16 ,color:"white"}}
          onPress={() => props.navigation.navigate("About")}
          icon={()=> <Ionicons name="ios-people-outline" size={20} color="#c3d136" />}
        />

    </Block>


      </DrawerContentScrollView>
    );
  };

export default () => {
  //const [ progress, setProgress ] = React.useState( new Animated.Value (0) ) ;
  // create animation for screen scaleing 

  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const screensStyles = { borderRadius ,transform: [{ scale }] };
   // add background  color 
  
  return (
    <Block style={{backgroundColor:"#455a64"}}>
        <Drawer.Navigator
        // the drawer -> screen animated should be slide 
        initialRouteName="Home"
        
        
         // hideStatusBar
         drawerType="slide"
         overlayColor="transparent"
         contentContainerStyle={{ flex: 1 }}
         drawerStyle={{flex: 1, width: '50%', backgroundColor: 'transparent'}}
         drawerContentOptions={{
           activeBackgroundColor: 'transparent',
           activeTintColor: 'green',
           inactiveTintColor: 'green',}}
           
        //set scene background to transparent
        sceneContainerStyle={{ backgroundColor: 'transparent' }} 
        drawerContent={ props =>{ 
          //console.log("progress",props.progress);
          //setProgress(props.progress);
          setTimeout(() => {       //setTimeout(() use for debuging 
            setProgress(props.progress);
          }, 100);
          return <DrawerContent {...props} />;
         
       }}>
        
        <Drawer.Screen name="Screen" >
        {props => <Screen {...props} style={screensStyles}/>}
        </Drawer.Screen>
       
      </Drawer.Navigator>
      </Block>
    );
};

