import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Pressable } from 'react-native'
import Footer from '../Footer'
function SeeMoreFrontend({navigation}) {

    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.introhtml}>
                    <Text style={Styles.html}>What is meant by Roadmap?| roadmaps</Text>
                    <Text style={Styles.abouthtml}>Every Application has its two parts frontend and backend.frontend describes the look and feel of the application along with its working like when a button is clicked what will happen like stuff .frontend consists of of UI/UX designing After learning Html,css and JavaScript the next step is to learn some of the framework or libraries here are the list of some technology you should learn</Text>
            </View>
            <View>
                <Text style={Styles.startlearing}>Start Your Learning Journey</Text>
                <View style={Styles.grid_container}>
                    <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("Angular") }}>
                        <View style={Styles.images}>
                        <Image style={Styles.frontendimg} source={require('../../assets/angular.png')} />
                        </View>
                        <View style={Styles.aboutimage}>
                            <Text style={Styles.blue}>Angular</Text>
                        </View>
                    </Pressable>
                    <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("React") }}>
                        <View style={Styles.images}>
                        <Image style={Styles.frontendimg} source={require('../../assets/react.png')} />
                        </View>
                        <View style={Styles.aboutimage}>
                            <Text style={Styles.blue}>ReactJs</Text>
                        </View>
                    </Pressable>
                    <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("Vue") }}>
                        <View style={Styles.images}>
                        <Image style={Styles.frontendimg} source={require('../../assets/vuejs.png')} />
                        </View>
                        <View style={Styles.aboutimage}>
                            <Text style={Styles.blue}>VueJs</Text>
                        </View>
                    </Pressable>
                    <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("AngularMaterial") }}>
                        <View style={Styles.images}>
                        <Image style={Styles.frontendimg} source={require('../../assets/material.png')} />
                        </View>
                        <View style={Styles.aboutimage}>
                            <Text style={Styles.blue}>Angular Materrial</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <Pressable>
                <Text style={Styles.htmlcssjs} onPress={() => { navigation.navigate("HTML CSS JS") }}>Start With Basic Html,CSS,JavaScript</Text>
            </Pressable>
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

export default SeeMoreFrontend;