// import React from 'react'
// import { Block ,Text } from "expo-ui-kit";

// const Dashboard = () => {
//     return (
//         <Block center middle middle color="y#eeeeee">
//             <Text h2  >Dashboard</Text>
            
//          </Block>
//     )
// }

// export default Dashboard;


import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet, Text, Image, Dimensions ,ScrollView,SafeAreaView} from 'react-native'
const { width, height } = Dimensions.get('window')
import Carousel from '../component/Carousel'
import { dummyData } from '../data/Data'
import Flist from '../component/Flist'
import { Block } from 'expo-ui-kit'
import Web from '../component/Web'
import Web1 from '../component/Web1'
import {AntDesign,MaterialIcons,Fontisto,Ionicons,Entypo,MaterialCommunityIcons,FontAwesome} from "@expo/vector-icons";









const Home = ({navigation}) =>{

  
  
  
  return (
        <View style={styles.container }>

     
       
       <ScrollView >
                <View  style={{marginTop:45,padding:5}}>
                  <Carousel  data = {dummyData}/>
                </View>
               
                            {/* <Image style={styles.image} source={{uri:"https://www.lus.ac.bd/wp-content/uploads/2020/01/chairman.jpg", }} /> 
                             <Image style={{ height:150,  width:130 } }  source={require('../assets/imgs/bg.png')} /> */}    

                   <View style={styles.cardViewAvater} backgroundColor={'#ffffff'} >
                     <View style={styles.avatar} >
                          <Image style={styles.avatarsize} source={{uri:"https://www.lus.ac.bd/wp-content/uploads/2020/01/chairman.jpg", 
                             }} />
                      </View>
                       <View style={styles.avatarTextview}>
                            <Text  style= {styles.avaterfontsize } >Danobir Dr. Syed Ragib Ali</Text>
                            <Text style={styles.avaterfontsize2} >Founder & Chairman, Board of Trustees, Leading University, Sylhet Welcome Message </Text>
                            <Text  style= {styles.avaterfontsize3 } >Leading University is the first private university in Sylhet. Its a reality of my deepest dream from decades. Establishment of Leading University is the greatest work of many other deeds in my life that I could do from the mercy of Allah. To deliver the light of modern higher education in every pace of life, I establish the Leading University in 2001 by means of nominal fee structure. Today Leading University earned the name and fame not only in Sylhet but also in nationwide with the greatest support and love from the people of the country.</Text>
                       </View>
                    </View>


                    <View style={styles.cardViewAvater} backgroundColor={'#ffffff'} >
                     <View style={styles.avatar} >
                          <Image style={styles.avatarsize} source={{uri:"https://www.lus.ac.bd/wp-content/uploads/2021/03/Qazi-Azizul-Mowla.jpg", 
                             }} />
                      </View>
                       <View style={styles.avatarTextview}>
                            <Text  style= {styles.avaterfontsize } >Prof. Qazi Azizul Mowla, PhD, FIAB, AAG</Text>
                            <Text style={styles.avaterfontsize2} >Vice-Chancellor Welcome Message</Text>
                            <Text  style= {styles.avaterfontsize3 } >Welcome to Leading University, a community that cherishes excellence and embraces change.Here you will find a place determined to make a positive impact on the world. You get to become a part of an institution that cares for you. Our commitment to equality and diversity is unparalleled.
                                                                          Since its foundation, Leading University has performed exceptionally in delivering comprehensive education in the northeast region of Bangladesh. Our faculties and staff will provide you the student learning experience you deserve.Here at Leading University, we give our best to help you achieve your full potential. I hope that you will join us as we continue our journey to eminence.

                              Wishing you a successful academic life</Text>
                       </View>
                    </View>








             <View style={styles.cardView2}>
                 <View  style={{flex:1, justifyContent:'center'}} >
                 <Text style={{ 
                        fontSize: 25,
                        color:'white',
                        fontWeight: 'bold',}}>Campus Facilities
                       < AntDesign name="home" color="#c3d136" size={60}/>
               </Text>
               </View>
                
              </View> 

              {/* Campus Facilities */}
              <View style={styles.cardView1} backgroundColor={'#ffffff'} >
                     <View style={styles.iconview} >
                            <Text style={{padding:5}} >
                              < AntDesign name="wifi" color="#c3d136" size={120}/>
                              </Text>
                      </View>
                       <View style={styles.iconTextview}>
                            <Text  style= {styles.avaterfontsize } >Free Wi-Fi Access</Text>
                            <Text style={styles.iconfontsize3} >Students are given access to high speed internet all over the campus through wifi.</Text>
                            
                       </View>
                    </View>

                    <View style={styles.cardView1} backgroundColor={'#ffffff'} >
                     <View  style={styles.iconview}>
                            <View style={{padding:5, marginTop:10}}>
                              < Fontisto name="laboratory" color="#c3d136" size={120}/>
                              </View>
                      </View>
                       <View style={styles.iconTextview}>
                            <Text  style= {styles.avaterfontsize } >Highly Equipped Labs</Text>
                            <Text style={styles.iconfontsize3} >There are labs equipped with modern instruments in every relevant department.</Text>
                            
                       </View>
                    </View>

                    <View style={styles.cardView1} backgroundColor={'#ffffff'} >
                     <View style={styles.iconview} >
                            <Text style={{padding:5}}>
                              < MaterialCommunityIcons name="account-group" color="#c3d136" size={120}/>
                              </Text>
                      </View>
                       <View style={styles.iconTextview}>
                            <Text  style= {styles.avaterfontsize } >Extra Curricular Activities</Text>
                            <Text style={styles.iconfontsize3} >Students can participate in various extra curricular activities through various clubs.</Text>
                            
                       </View>
                    </View>

                    <View style={styles.cardView1} backgroundColor={'#ffffff'} >
                     <View  style={styles.iconview}>
                            <Text style={{padding:5}}>
                              < FontAwesome name="book" color="#c3d136" size={120}/>
                              </Text>
                      </View>
                       <View style={styles.iconTextview}>
                            <Text  style= {styles.avaterfontsize } >Rich Library</Text>
                            <Text style={styles.iconfontsize3} >The university has a fully air-conditioned and computerized rich library.</Text>
                            
                       </View>
                    </View>

                    <View style={styles.cardView1} backgroundColor={'#ffffff'} >
                     <View  style={styles.iconview}>
                            <Text style={{padding:5}}>
                              < Entypo name="air" color="#c3d136" size={120}/>
                              </Text>
                      </View>
                       <View style={styles.iconTextview}>
                            <Text  style= {styles.avaterfontsize } >AC Class Rooms</Text>
                            <Text style={styles.iconfontsize3} >Classrooms are air conditioned, so the students can study in comfort.</Text>
                            
                       </View>
                    </View>

                    <View style={styles.cardView1} backgroundColor={'#ffffff'} >
                     <View  style={styles.iconview}>
                            <Text style={{padding:5}}>
                              < FontAwesome name="money" color="#c3d136" size={140}/>
                              </Text>
                      </View>
                       <View style={styles.iconTextview}>
                            <Text  style= {styles.avaterfontsize } >Up to 75% Waiver</Text>
                            <Text style={styles.iconfontsize3} >Meritorious students are rewarded with up to 75% waiver based on several criterias.</Text>
                            
                       </View>
                    </View>
               
               
                 {/* Footer Desine */}
               <View style={styles.cardView2}>
                <Text style={{marginTop:18,
                 marginLeft:13,
                        fontSize: 25,
                        color:'white',
                        fontWeight: 'bold',}}>Contact
                 < AntDesign  name="contacts" color="#c3d136" size={25}/>
                </Text>
 

                <Text style={{color:'white',marginTop:10,fontStyle:'normal'}}>Phone: 01313084499.</Text>
                <Text style={{color:'white',marginTop:10,fontStyle:'normal'}}>info@lus.ac.bd</Text>

                <Text style={{color:'white',marginTop:10,fontStyle:'normal',
                                marginHorizontal:10,
                                padding:20,
                                fontWeight:"bold",
                                
                              }}>Copyright 2021,Rimel all rights reserved . Developed by <Text style={{fontSize:25,color:"#c3d136"}}>Jahid </Text>.</Text>
              </View>

              <View style={styles.cardView2}></View>


              {/* <View style={styles.cardView2}>
                   <Text style={{marginTop:18,
                 marginLeft:13,
                        fontSize: 25,
                        color:'white',
                        fontWeight: 'bold',}}> Copyright 2021,Rimel all rights reserved . Developed by Jahid . </Text>
              </View>
               */}
              
              </ScrollView>
        
              
     </View>
     

    );
}

export default Home

const styles = StyleSheet.create({
  cardView: {
      flex: 1,
      width: width - 20, //bothside cut-off 20
      height: height / 3, //bothside devide 
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0.5, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
},

container: {
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
  //color:'#c3d136',
  backgroundColor:"#455a64"
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




  // avatar style
    avatar : {
              flex: 0.5,
              
              margin:20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent:'center',
              
              
            },


    avatarsize:{
      height:150, 
      width:150,
      resizeMode:'cover',
      borderRadius:75,
      borderWidth:6 ,
      overflow: "hidden",
      borderColor: "#455a64",
      //marginLeft: 0,
      //position: 'absolute',

    },
     
    cardViewAvater: {
      flex: 1,
      width: width - 20,
      height: 'auto',
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0.5, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
  },

  avatarTextview:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:15
    //   position: 'absolute',
    //  padding:30,
    //    top: 120,
    //    margin: 5,
    //   left: 12,
      
      //fontSize:30,
      //fontWeight: 'bold',
     //color: '#c3d136'
      
      
      

  },
  //avaterdescription: {  style resources
   // position: 'absolute',
    //fontWeight: 'bold',
         // marginTop:18,
        // flexDirection: 'row',
        // AlignItems: 'center',
        //  justifyContent: 'space-between',
          //  color: '#c3d136',
   // bottom:160,
     //top:100,
      // margin: 20,
      //s marginRight:0.5,
        //fontSize: 25,
        // shadowColor: '#000',
        // shadowOffset: { width: 0.8, height: 0.8 },
        // shadowOpacity: 1,
        // shadowRadius: 3,
        // elevation: 5
   //},

   avaterfontsize: {
    marginTop:18,
    fontSize: 25,
    color:'#c3d136',
    textAlign:'center',
    fontWeight: 'bold',
        
   },
   avaterfontsize2: {
    marginTop:20,
    fontWeight: 'bold',
    fontSize: 20,
    color:'#c3d136',
    textAlign:'center',
        
   },

   avaterfontsize3: {
    marginTop:20,
    fontWeight: 'bold',
    fontSize: 16,
    color:'black',
    textAlign:'justify',
        
   },


    /* Campus Facilities */
    iconsize:{
      //backgroundColor: '#f9c2ff',
       padding: 30,
       marginVertical: 50,
       marginHorizontal: 125,
       marginTop:-30,
      // justifyContent: 'center',
      // alignContent:'center',
     },
     iconview:{
     
      flex:1,
     // justifyContent:'center',
      alignItems:'center',
       margin:5,
     },

    iconTextview:{
      flex:1,
      //position: 'absolute',
      justifyContent:'center',
      alignItems:'center',
    //   padding:10,
    //   top: 120,
      margin:5,
    //  left: 12,
   //fontSize:30,
   //fontWeight: 'bold',
  //color: '#c3d136'
    },

    iconfontsize3: {
      marginTop:10,
      fontWeight: 'bold',
      fontSize: 16,
      color:'black',
      textAlign:'center',
          
     },

     cardView1: {
      flex: 1,
      width: width - 20,
      height: height / 2.6,
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0.5, height: 0.5 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 5,
  },
  cardView2: {
    flex: 1,
    width: width - 20, //bothside cut-off 20
    height: height /6.5, //bothside devide 
    backgroundColor: 'transparent',
    margin: 10,
    borderRadius: 50,
   
},

     

})