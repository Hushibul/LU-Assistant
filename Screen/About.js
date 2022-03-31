import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, View, Text, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window')
import { AntDesign, FontAwesome5, Fontisto, Ionicons, Octicons, Entypo, MaterialCommunityIcons, FontAwesome, MaterialIcons } from "@expo/vector-icons"
import { color } from 'react-native-reanimated';

const About = () => {

  return (
    <View style={{ backgroundColor: '#c3d136' }}>
      <ScrollView>

        <View style={styles.container1}>
          <View style={{
            flex: 1,
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

            {/* Heading for Leading University*/}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, flexDirection: 'row' }}>
              <Image style={styles.logosize} source={{ uri: "https://www.lus.ac.bd/wp-content/themes/leading-university-theme/img/logo-white.png", }} />
              <Image style={styles.logosize1} source={{ uri: "https://www.lus.ac.bd/wp-content/themes/leading-university-theme/img/label-white.png", }} />

            </View>
          </View>
        </View>
      </ScrollView>

      <ScrollView>
        <View style={styles.container}>

          <View style={{
            flex: 1,
            width: width - 20,
            height: 'auto',
            backgroundColor: 'white',
            margin: 10,
            // marginLeft: 10,
            borderRadius: 70,
          }}>

            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text > < FontAwesome5 name="readme" color="#c3d136" size={100} /></Text>
            </View>
            <Text style={styles.textStyle}>
              Established in 2001, <Text style={{ color: 'red' }}>Leading University is a non-profit private higher-education institution</Text> located in the urban setting of the large city of Sylhet (population range of 500,000-1,000,000 inhabitants). Officially recognized by the University Grants Commission of Bangladesh, Leading University (LUS) is a small (uniRank enrollment range: 5,000-5,999 students) coeducational Bangladeshi higher education institution. Leading University (LUS) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 19 years old Bangladeshi higher-education institution has a selective admission policy based on students' past academic record and grades. LUS also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, as well as administrative services.
                      </Text>
          </View>

          {/* Department */}
          <View style={styles.titlecard}>
            <Text style={styles.title}> Department
              <Text style={{ margin: 5, marginLeft: 10, marginTop: 10 }}>
                < AntDesign name="downcircleo" color="#c3d136" size={20} /> </Text>
            </Text>
          </View>

          {/*Computer Science and Engineering*/}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}>
              <MaterialIcons name="computer" size={100} color="#c3d136" /></View>

            <Text style={styles.title}>
              Computer Science and Engineering
                      </Text>

            <Text style={styles.textStyle}>
              Importance of Computer Science and Engineering for the development and progress of society, and the need for specialists in this field has become obvious in our daily life. The University acknowledges this importance and has therefore introduced Department of Computer Science & Engineering by giving all academic, financial and administrative support to the department.
              To become a prominent department of Computer Science and Engineering producing competent professionals with research and innovation skills, including moral values and social concerns.</Text>
          </View>

          {/*Business Administration */}
          <View style={styles.csecard}>

            <View style={styles.detpCenter}>
              <MaterialIcons name="add-business" size={100} color="#c3d136" />
            </View>

            <Text style={styles.title}>
              Business Administration
                      </Text>

            <Text style={styles.textStyle}>
              The need for managers in business who can face the growing complexities and challenges is growing in the country. Business is now conducted in the context of growing globalization in a highly competitive word. In recognition of this need the Leading University has established the Department of Business Administration to provide education for future mangers in the fast changing word. </Text>

            <Text style={styles.textStyle}>
              The Department of Business Administration is one of the founding and the largest Department of the University. It has about 2000 (Two thousand) students and 64 highly qualified extremely dedicated vastly experienced faculty members. Among them, 34 full time and 30 Adjunct faculty. The Department has also been hiring business executives from the corporate word to teach students real life cases. </Text>
          </View>

          {/*Architechture*/}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}>
              <MaterialIcons name="architecture" size={100} color="#c3d136" />
            </View>
            <Text style={styles.title}>
              Architecture
                      </Text>

            <Text style={styles.textStyle}>
              The Department of Architecture started its brave journey on 3rd February, 2007 in Leading University, Sylhet. The department offers five years undergraduate program leading to Bachelor of Architecture (B.ARCH) degree. At the very beginning there was a single batch to start with. At present five batches are performing their architectural studies in the department and the first batch has completed their graduation successfully. Currently there are ten faculty members conducting the classes with high efficiency and care. The architectural learning process is also adorned with direct lecture and supervisions of many visiting faculties and professional of the field. The department has successfully arranged several open exhibitions with the student projects which are well appreciated by the spectators. on December, 2011 a group of students of 4th semester were awarded with honorable mention prize in a design competition entitled Dwelling unit in 2062 organized by Bangladesh University of Engineering and Technology.</Text>

            <Text style={{ fontSize: 15, color: "black", marginTop: -12, padding: 20, textAlign: "justify", fontWeight: 'bold' }}>
            </Text>
          </View>

          {/*Civil Engineering */}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}>
              <Ionicons name="construct" size={100} color="#c3d136" /></View>

            <Text style={styles.title}>
              Civil Engineering
                      </Text>

            <Text style={styles.textStyle}>
              The Department of Civil Engineering is the first department in this field in Sylhet among all private universities. It was established in 2008. The department offers four year undergraduate program leading to B.Sc. in Civil Engineering degree. At present we have six batches and 200 students. The Department offers 60 undergraduate courses to the respective students. There are 9 full time faculty members dedicated in teaching the students of this department as well as the students of other departments of LU. We also employ highly experienced teachers and professional experts from other Universities, Colleges and Firms. We care for our students and our teachers are highly professionals. Most of our teachers have foreign degrees. Department offices, lecture halls and most of the labs are housed in the School of Engineering floor of the campus
              </Text>
          </View>

          {/*Electronic Engineering */}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}>
              <Octicons name="circuit-board" size={100} color="#c3d136" /></View>

            <Text style={styles.title}>
              Electronic Engineering
                      </Text>

            <Text style={styles.textStyle}>
              Importance of Electrical & Electronic Engineering for the development and progress of society, and the need for specialists in this field has become obvious in our daily life. The University acknowledges this importance and has therefore introduced Department of Electrical & Electronic Engineering by giving all academic, financial and administrative support to the department.</Text>

            <Text style={styles.textStyle}>
              Currently the Department offers Bachelor of Science (Engg.) program at undergraduate level and is looking forward to offer Master of Computer Applications (MCA) program at graduate level. Besides, CSE and EEE Department is offering General Education Courses to the students enrolled in other bachelor programs at the University. </Text>
          </View>

          {/*Law */}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}><Octicons name="law" size={100} color="#c3d136" /></View>

            <Text style={styles.title}>
              Department of Law
                      </Text>

            <Text style={styles.textStyle}>
              The Law Department of Leading University is currently playing a very pivotal role towards the provision of high quality socially relevant and cutting- edge legal education through the introduction and setting up an exciting LL.B.(Hons.) and LL.M. program. This highly significant step is motivated to set up a center of excellence for law studies which not only addresses and provides meaningful solutions for pressing ground realities but it is capable of offering international standard legal education, research and analysis which is in tune with the latest development in these fields in the global arena.</Text>

            <Text style={styles.textStyle}>
              Law Department of Leading University vows to provide completely new and different set of skills also which, does not cover the traditional legal education only.</Text>
          </View>

          {/*English */}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}><MaterialCommunityIcons name="alphabetical-variant" size={100} color="#c3d136" /></View>

            <Text style={styles.title}>
              Department of English
                      </Text>

            <Text style={styles.textStyle}>
              The Department of English, named as the Royal Department all over the globe, is one of the founding departments of Leading University which was established in 2001, offers a dynamic and supportive community of highly qualified and dedicated faculty members and number of vibrant students.  From the time of its inception the Department aims at producing good human being who will be able to think differently and will be capable of meeting up the demands and challenges of the fastest growing globalized world. The Department makes every effort to kindle humanistic learning with the capacity of rational and imaginative respond through the literature and language study.
              </Text>
          </View>

          {/*Islamic Studies*/}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}><FontAwesome5 name="mosque" size={100} color="#c3d136" />
            </View>

            <Text style={styles.title}>
              Islamic Studies
                      </Text>

            <Text style={styles.textStyle}>
              Department of Islamic Studies was establish in 2014. At present the department offers two programs these are B A (Hon’s) in Islamic Studies & M A in Islamic Studies (Major in Islamic Economics and Banking).</Text>

            <Text style={styles.textStyle}>
              The increasing demand of Islamic knowledge for financial and economical activities, tempting new and suitable academic courses. The objective of the courses BA (Honors) Islamic Studies (Major in Islamic Economics and Banking) is to provide students a complete knowledge of Islamic Economics and Banking as well as code of life based on the revealed knowledge. The curriculum is designed to enable students to have a comprehensive world view on Islam as an ideal system and its role in the development of human life and resolve current issues using Islamic tradition according to teaching and practical guidance of the Qur’an and Sunnah. </Text>
          </View>

          {/*Tourism and Hospitality Management */}
          <View style={styles.csecard}>
            <View style={styles.detpCenter}><FontAwesome5 name="handshake" size={100} color="#c3d136" /></View>

            <Text style={styles.title}>
              Bachelor of Tourism and Hospitality Management
                      </Text>

            <Text style={styles.textStyle}>
              Bachelor of Tourism and Hospitality Management, a professional program in its own identity, was solidified as an international academic discipline in 1840s. The modern idea of tourism and hospitality management was influenced by the medieval period of 12th and 17th century during the industrial revolution. Tourism is one of the fastest growing industries in the world. However still it lacks qualified human resources to handle the increasing influx of visitors. Therefore, this program has been designed to suit high demand of tourism professionals to provide quality services in the sector.</Text>

            <Text style={styles.textStyle}>
              After successfully completing this program, students will find themselves confident enough to choose several paths to apply everything they have learnt. There are various sectors where any skilled graduates can work for the tourism and hospitality industry.</Text>
          </View>

          <View style={{
            flex: 1,
            width: width - 100,
            height: height / 4,
            backgroundColor: 'transparent',
            margin: 10,
            borderRadius: 70,
            // borderWidth:20,
            // borderColor:'#c3d136',
            marginTop: 50,
            padding: 5
            //   alignItems: 'center',
            //   justifyContent: 'space-between',

          }}>

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
    marginBottom: 25,
    padding: 5,
  },


  FacultyView: {
    flex: 1,
    width: width - 100,
    height: height / 7,
    backgroundColor: 'transparent',
    margin: 10,
    borderRadius: 70,
    // borderWidth:20,
    // borderColor:'#c3d136',
    marginTop: 50,
    padding: 5
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
  },

  titlecard: {
    flex: 1,
    width: width - 120, //bothside cut-off 20
    height: 'auto', //bothside devide 
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 70,
  },

  csecard: {
    flex: 1,
    width: width - 20, //bothside cut-off 20
    height: 'auto', //bothside devide 
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 70,

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

  detpCenter: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
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
    // position: 'absolute',
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
    fontSize: 30,
    padding: 12,
    fontWeight: 'bold',
    color: '#c3d136'
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

  textStyle: {
    fontSize: 15,
    color: "black",
    marginTop: -12,
    padding: 20,
    textAlign: "justify",
    fontWeight: 'bold'
  }

});



export default About;

