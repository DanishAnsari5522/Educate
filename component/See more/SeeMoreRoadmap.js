import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Pressable } from 'react-native'
import Footer from '../Footer'
function SeeMoreRoadmap({navigation}) {

    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.introhtml}>
                    <Text style={Styles.html}>What is meant by Roadmap?| roadmaps</Text>
                    <Text style={Styles.abouthtml}>All new things starts with plan ,Roadmap is a plan or your path from where to start amd how to start. It gives you a better understanding about what is going to come in between you path and upto where it will go , Definitely there is not end in study but we can say that it is completed when it comes to a certain point. In simple word Roadmap is a syllabus</Text>
                </View>
                <View>
                    <Text style={Styles.startlearing}>Start Your Learning Journey</Text>
                    <View style={Styles.grid_container}>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("HTML CSS JS") }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/htmlcssjs.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Html-Css</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("FrontEnd RoadMap") }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/frontend.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Frontend</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("BackEnd RoadMap") }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/backendlogo.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Backend</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("FullStack RoadMap") }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/fullstacklogo.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Full Stack</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Text style={Styles.htmlcssjs} onPress={() => { navigation.navigate("HTML CSS JS") }}>Start With Basic Html,CSS,JavaScript</Text>
                </View>
                <Footer />
            </View>
        </ScrollView >
    )
}

const Styles = StyleSheet.create({
    mainview: {
        marginTop: 0,
        backgroundColor: 'rgb(235, 231, 231)',
    },
    introhtml: {
        width: 'auto',
        margin: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: 'white',
        borderRadius: 5
    },
    html: {
        fontFamily: 'sans-serif-medium',
        fontSize: 19,
        marginBottom: 10
    },
    abouthtml: {
        color: '#5aa7a7',
        fontSize: 14,
        fontFamily: 'Roboto'
    },
    //start your learnig joutney
    startlearing:{
        marginLeft: 20,
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
    },
    grid_container: {
        width: '100%',
        // height:'150%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',


    },
    contaner: {
        width: '40%',
        height: '50%',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 2
    },
    blue: {
        paddingTop:8,
        paddingLeft:'25%'
    },
    htmlcssjs: {
        backgroundColor: 'pink',
        borderRadius: 2,
        padding: 4,
        marginTop: 50,
        marginLeft: 20,
        width: '70%',

    },
    frontendimg: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    }

})

export default SeeMoreRoadmap;