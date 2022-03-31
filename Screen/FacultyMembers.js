// import * as React from 'react'

// import { Block ,Text } from "expo-ui-kit";


// const FacultyMembers=()=> {

//     return (

//         <Block center middle color="#eeeeee">
//             <Text h2 > Faculty Members </Text>

//          </Block>

//     )

//   }
//   export default FacultyMembers;


import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, View, Text, FlatList, Dimensions, SectionList, SafeAreaView, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window')
import { AntDesign, FontAwesome5, Fontisto, Ionicons, Octicons, Entypo, MaterialCommunityIcons, FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { color } from 'react-native-reanimated';


const SECTIONS = [
  {
    title: '',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'hellow  iam rimel isalhfgjkdaslghkjahsglkjashdgukhfrlsukgjahfiudsehglkrjuheulikhejhuilkfh',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    // title: 'Punk and hardcore',
    title: 'Faculty Members of Computer Science & Engineering',
    data: [
      {
        key: '1',
        title: 'Prof. Dr. AS. Faruq',
        text: 'Professor Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2021/03/Prof.-Dr.-AS.-Faruq-250x250.jpg',
        email: 'faruq_cse@lus.ac.bd',
        phone: '01757584584',
      },
      {
        key: '2',
        title: 'Rumel M. S. Rahman Pir',
        text: 'Associate Professor Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/05/Rumel-M.S.-Rahman-Pir-250x250.jpg',
        email: 'head_eee@lus.ac.bd',
        phone: '01758228736',
      },

      {
        key: '3',
        title: 'Sabia Akter Bhuiyan',
        text: '      Assistant Professor Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/11/sabia_akter.jpg',
        email: 'aktersabia@yahoo.com',
        phone: '01714506159',
      },
      {
        key: '4',
        title: 'Arif Ahmad',
        text: 'Assistant Professor Head(Acting)Computer Science & Engineering',
        uri: '',
        email: '',
        phone: '',
      },
      {
        key: '5',
        title: 'Md. Ebrahim Hossain',
        text: 'Assistant Professor Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2020/01/Ebrahim-Hossain.jpg',
        email: 'ebrahim.cse@lus.ac.bd',
        phone: '01733688612',
      },
      {
        key: '6',
        title: 'Arafat Habib Quraishi',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2021/01/216.jpg',
        email: ' arafat@lus.ac.bd',
        phone: '+8801914487146',
      },
      {
        key: '7',
        title: 'Mohammad Jaber Hossain',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/02/IMG_9864.jpg',
        email: 'jhsarzil120@gmail.com',
        phone: '01711091906',
      },
      {
        key: '8',
        title: 'Tonni Das Jui',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/01/31855767_942633539250930_2611705570440249344_n.jpg',
        email: 'tonnijuicse@gmail.com',
        phone: '',
      },

      {
        key: '9',
        title: 'Adil Ahmed Chowdhury',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2020/07/adil-png.png',
        email: 'adil@lus.ac.bd',
        phone: '01771852888',
      },

      {
        key: '10',
        title: 'Md. Saiful Ambia Chowdhury',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2017/01/12489314_218201151851644_3803346472606839500_o.jpg',
        email: 'sas2505@lus.ac.bd',
        phone: '+8801718377269',
      },

      {
        key: '11',
        title: 'Kazi Md. Jahid Hasan',
        text: 'Lecturer (Mathematics)',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2020/06/jahid-1-scaled.jpg',
        email: 'jahidce@lus.ac.bd',
        phone: '01676480060',
      },

      {
        key: '12',
        title: 'Debojyoti Biswas',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/01/27912865_1962963720397992_2504841248494051743_o.jpg',
        email: 'bishaldebojyoti@gmail.com',
        phone: '01861888162',
      },

      {
        key: '13',
        title: 'Syeda Tamanna Alam',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/11/Syeda-Tajmanna-Alam-Monisha.jpg',
        email: ' monisha_cse@lus.ac.bd',
        phone: ' 01712953999',
      },

      {
        key: '14',
        title: 'Mohammad Shoaib Rahman',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2020/03/Shoaib-Rahman.jpg',
        email: 'shoaib_cse@lus.ac.bd',
        phone: '01717001333',
      },

      {
        key: '15',
        title: 'Md. Saidur Rahman',
        text: 'Lecturer Computer Science & Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/11/DSC_26433.jpg',
        email: 'kohinoor_cse@lus.ac.bd',
        phone: '01732477046',
      },
    ],
  },
  {
    title: 'Faculty Members of Electrical & Electronic Engineering',
    data: [
      {
        key: '1',
        title: 'Rumel M. S. Rahman Pir',
        text: 'Associate Professor Head EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/05/Rumel-M.S.-Rahman-Pir-250x250.jpg',
        email: 'head_eee@lus.ac.bd',
        phone: '01758228736',
      },

      {
        key: '2',
        title: 'Mrinal Kanti Dhar',
        text: 'Assistant Professor EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2016/09/Mrinal-Kanti-Dhar.jpg',
        email: 'mrinal054@gmail.com',
        phone: '+8801719447739',
      },

      {
        key: '3',
        title: 'Rafiqul Islam',
        text: 'Assistant Professor EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2020/09/MRI-PP-Photo-new.jpg',
        email: 'rafiqulzyl@lus.ac.bd',
        phone: ' 01716 446071',
      },
      {
        key: '4',
        title: 'Md. Kamruzzaman',
        text: 'Assistant Professor EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2021/03/Kamruzzama.jpg',
        email: ' mkzaman_eee@lus.ac.bd',
        phone: ' 01580831271',
      },
      {
        key: '5',
        title: 'Md. Tanjimuddin',
        text: 'Lecturer EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/05/Md.-Tajimuddin.jpg',
        email: ' tanjim0023@gmail.com',
        phone: '',
      },
      {
        key: '6',
        title: 'Md. Niaz Morshedul Haque',
        text: 'Lecturer EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2017/12/02.jpg',
        email: ' niaz.morshed@lus.ac.bd',
        phone: '+88-01717255769',
      },
      {
        key: '7',
        title: 'Md. Moontasir Rashid',
        text: 'Lecturer EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2018/09/Moontasir-Rashid.jpg',
        email: ' moontasir@lus.ac.bd',
        phone: '+8801628245005',
      },
      {
        key: '8',
        title: 'Afshana Begumn',
        text: 'Lecturer EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/11/Afshana-Begum.jpg',
        email: 'afsanab96@gmail.com',
        phone: ' 01759612103',
      },
      {
        key: '9',
        title: 'Gulam Mahfuz Chowdhury',
        text: 'Lecturer EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2020/05/20200204083018_IMG_4388-scaled.jpg',
        email: ' mahfuz_eee@lus.ac.bd',
        phone: '01303128793',
      },
      {
        key: '10',
        title: 'Ishmam Ahmed Chowdhury',
        text: 'Lecturer EEE',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2021/03/Ishmam-Ahmed-Chy.jpg',
        email: 'ishmamahmed_eee@lus.ac.bd',
        phone: ' 01723000891',
      },
    ]
  },
  {
    title: 'Faculty Members of Civil Engineering',
    data: [
      {
        key: '1',
        title: 'Prof. Dr. M. Rakib Uddin',
        text: 'Professor Dean, Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/01/Md.-Rakib-Uddin-Dean-Social-Science.jpg',
        email: 'rakib.uddin.lu@gmail.com',
        phone: '01711964950',
      },
      {
        key: '2',
        title: 'Engr. Md. Aminul Haque',
        text: 'Associate Professor and Former Head Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/01/Md.-Rakib-Uddin-Dean-Social-Science.jpg',
        email: 'mahaque@lus.ac.bd',
        phone: '+8801672005555',
      },
      {
        key: '3',
        title: 'Abul Abrar Masrur Ahmed',
        text: 'Assistant Professor Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2018/10/CSC_0810.jpg',
        email: 'masrur@lus.ac.bd',
        phone: '+8801912140065',
      },
      {
        key: '4',
        title: 'Sheikh Hefzul Bari',
        text: 'Assistant Professor Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2021/01/IMG_3005-scaled.jpg',
        email: ' shbari@lus.ac.bd',
        phone: '01711188073',
      },
      {
        key: '5',
        title: 'Chowdhury Mohammed Shams',
        text: 'Assistant Professor Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/07/Md-Shams-Wahid.jpg',
        email: 'shams_ce@lus.ac.bd',
        phone: '01719192149',
      },
      {
        key: '6',
        title: 'Amit Chakraborty',
        text: 'Assistant Professor Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/08/Amit-Chakraborty.jpg',
        email: 'amitjoy.ce12@gmail.com',
        phone: '01719232497',
      },
      {
        key: '7',
        title: 'Shabbir Ahmed Osmani',
        text: 'Assistant Professor Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2018/05/Shabbir-photo-New.jpg',
        email: ' osmani@lus.ac.bd',
        phone: '01711964950',
      },
      {
        key: '8',
        title: 'Jafor Ahmed Limon',
        text: 'Assistant Professor Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2018/10/IMG_20181003_062237.jpg',
        email: '  jaforlimon@gmail.com',
        phone: '+8801737401051',
      },
      {
        key: '9',
        title: 'Tanay Datta Chowdhury',
        text: 'Lecturer Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/11/Tanay-Datta-Chy.jpg',
        email: 'tanaydatta@ymail.com',
        phone: '01725334646',
      },
      {
        key: '10',
        title: 'Nazmun Nahar Papri',
        text: 'Lecturer Civil Engineering',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/11/Nazmun-Nahar-Papri.jpg',
        email: '  npapri21@gmail.com',
        phone: ' 01762912958',
      },
    ]
  },
  {
    title: 'Faculty Members of Architecture',
    data: [
      {
        key: '1',
        title: 'Prof. Syeda Zarina Hossain',
        text: 'Professor Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2018/09/syeda-zarin-hossain.jpg',
        email: ' zarhossain@gmail.com',
        phone: ' 01764543535',
      },
      {
        key: '2',
        title: 'Ar. Rajon Das',
        text: 'Associate Professor Head Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/11/Rajon-Das.jpg',
        email: 'head_arch@lus.ac.bd',
        phone: '  01717794232',
      },
      {
        key: '3',
        title: 'Ar. Md. Shawkat Jahan',
        text: 'Associate Professor Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/11/shawkat-jahan2.jpg',
        email: 'sjchowdhury@lus.ac.bd',
        phone: ' 01712204903',
      },
      {
        key: '4',
        title: 'Tanjima Siddika Chandni',
        text: 'Assistant Professor Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/11/Tanjima-Siddika-Chandni.jpg',
        email: 'tanjima.arch15@gmail.com',
        phone: '01912581499',
      },
      {
        key: '5',
        title: 'Syed Mohsin Ali',
        text: 'Assistant Professor Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/11/Syed-Mohsin-Ali.jpg',
        email: 'srvnishow@gmail.com',
        phone: '01742824848',
      },
      {
        key: '6',
        title:'Noorjahan Begum',
        text: 'Lecturer Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2018/12/received_1870965669598986.jpeg',
        email: 'mukta_arch@yahoo.com',
        phone: '01913524380',
      },
      {
        key: '7',
        title: 'Salina Akther',
        text: 'Lecturer Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2015/11/Salina-Akther.jpg',
        email: 'sumi-arcbk@yahoo.com',
        phone: '01918774428',
      },
      {
        key: '8',
        title: 'Shah Md. Hasin Shad',
        text: 'Lecturer Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2019/02/10984245_10200433639439568_924885420244224489_n-1.jpg',
        email: 'hasinshad@lus.ac.bd',
        phone: ' +8801673259694',
      },
      {
        key: '9',
        title: 'Md. Imtiaz Ahmad',
        text: 'Lecturer Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2021/02/Edited.jpg',
        email: '  imtiaz_arch@lus.ac.bd',
        phone: '01683754887',
      },
      {
        key: '10',
        title: 'Sharmin Islam',
        text: 'Lecturer Architecture',
        uri: 'https://www.lus.ac.bd/wp-content/uploads/2020/12/Sharmin-Islam.jpg',
        email: 'sharminislam_arch@lus.ac.bd',
        phone: '01776144366',
      },
    ]
  }
];


const ListItem = ({ item }) => {
  return (
    // <View style={styles.cardView}>
    //   <Image
    //     source={{
    //       uri: item.uri,
    //     }}
    //     style={styles.itemPhoto}
    //     resizeMode="cover"
    //   />
    //   <Text style={styles.itemText}>{item.text}</Text>
    // </View>

    // <View style={styles.cardView1}>
    //         <Image style={styles.image} source={{ uri: item.uri }} resizeMode="cover" />

    //             <View style={styles.textView}>
    //             {/* <Text style={styles.itemTitle}> {item.title}</Text> */}
    //             <Text style={styles.itemTitle}>{item.text}</Text>
    //             </View>
    //     </View>
    <View style={styles.cardView1}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Image style={styles.image} source={{ uri: item.uri }} resizeMode="cover" />

        <Text style={styles.itemTitle}> {item.title}</Text>
        <Text style={styles.itemText}>{item.text}</Text>
        <Text style={styles.itemText}>{item.email}</Text>
        <Text style={styles.itemText}>{item.phone}</Text>

      </View>
    </View>



  );
};


const About = () => {
  return (


    <View style={styles.container}>
      <View style={{

        width: width - 20,
        height: height / 7,
        backgroundColor: 'transparent',
        margin: 10,
        borderRadius: 70,
        // borderWidth:20,
        // borderColor:'#c3d136',
        marginTop: 50,
        padding: 5
      }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, flexDirection: 'row' }}>
          <Image style={styles.logosize} source={{ uri: "https://www.lus.ac.bd/wp-content/themes/leading-university-theme/img/logo-white.png", }} />
          <Image style={styles.logosize1} source={{ uri: "https://www.lus.ac.bd/wp-content/themes/leading-university-theme/img/label-white.png", }} />

        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
      <SafeAreaView style={{ flex: 1 }}>




        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}

          renderSectionHeader={({ section }) => (


            <>
              <Text style={styles.sectionHeader}>
                {section.title}
              </Text>

              {/* {section.horizontal ? (
                                <FlatList
                                    horizontal
                                    data={section.data}
                                    renderItem={({ item }) =>
                                    <ListItem item={item} />}
                                    showsHorizontalScrollIndicator={false}
                                />
                        ) : null} */}
            </>
          )}

          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />


      </SafeAreaView>
    </View>


  );
};

export default About;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#455a64",
    marginBottom: 25,
    padding: 5
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 30,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },

  itemText: {
    // color: 'rgba(255, 255, 255, 0.5)',
    color: 'green',
    margin: 5,
    textAlign: 'center',
  },

  itemTitle: {
    color: 'green',
    fontSize: 22,
    fontWeight: "bold",
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },

  cardView: {
    flex: 1,

    width: width - 20,
    height: height / 3,
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  cardView1: {
    flex: 1,
    width: width - 40,
    height: "auto",
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderColor: "gray",
    borderWidth: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  image: {
    width: 100,
    height: 100,
    borderWidth: 7,
    borderColor: '#455a64',
    borderRadius: 70,
    left: 10,
    bottom: -10,
    margin: 10
  },


  logosize: {

    height: 80,
    width: 80,
    resizeMode: 'cover',



  },
  logosize1: {
    height: 30,
    width: 200,
    marginTop: 25,

  },
});