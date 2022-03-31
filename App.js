
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Block ,Text } from "expo-ui-kit";
import Drawer from "./Drawer"


export default function App() {
  
  
  return (
    
    < NavigationContainer>
          <Drawer/>
          {/* <Block center middle>
            <Text>Hellow iam rimel</Text>
            <Text bold>Now i am make Drawer</Text>
         </Block> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
