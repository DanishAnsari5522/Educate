import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Image,Pressable} from 'react-native'
import Footer from '../Footer'
function BackEnd({navigation}) {

    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.introhtml}>
                    <Text style={Styles.html}>What is meant by Roadmap?| roadmaps</Text>
                    <Text style={Styles.abouthtml}>After learning Html,css,JavaScript the first step to become a full stack developer is by learning backend technologies ,Hello Greenhat.Srs i am Arvind kumar and today i am gonna introduce you about some of the most famous backend technologies you should be learning .backend basically means the programming at server side (server is a computer nothing else where we store data to all people and give back them their information when they ask) there are a lots of tutorials present on the youtube which is best for you that can teach you everything. Dont worry here the selected videos</Text>
                </View>
                <View>
                    <Text style={Styles.startlearing}>Start Your Learning Journey</Text>
                    <View style={Styles.grid_container}>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("Php") }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/php.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>PHP</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("Node") }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/node.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Node.js</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("Python") }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/python.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Python</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { navigation.navigate("Ruby") }}> 
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/rupy.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Ruby</Text>
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

export default BackEnd;