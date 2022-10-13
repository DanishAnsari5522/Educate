import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Image, Button, Linking,Pressable } from 'react-native'
import Footer from '../Footer'
function YouTuber({navigation}) {

    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.introhtml}>
                    <Text style={Styles.html}>What is meant by Roadmap?| roadmaps</Text>
                    <Text style={Styles.abouthtml}>
                        Firstly i would like to thank all the youtubers those are providing every single technology at free of cost. if you have chosen Computer screen branch and thinking that collage will teach you these technologies then you might be wrong .You have to learn these by yourself .But wait you have invested a lot of money in College so i am saying they will not teach development so now i have to invest more money ,The answer is NO All you can learn FREE only you will need a computer and internet connection and Thses suoerheros will take you to the success.
                    </Text>
                </View>
                <View>
                    <Text style={Styles.startlearing}>Start Your Learning Journey</Text>
                    <View style={Styles.grid_container}>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/yahoobaba') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/yahoobaba.jpg')}/>
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>yahoo baba</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/kudvenkat') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/kudvenkat.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>kudvenkat</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/Freecodecamp') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/freecodecap.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>freecodecap</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/CodingAddict') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/coddingaddict.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Codding Addict</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/programmingwithmosh') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/mosh.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>Programming with mosh</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/Codevolution') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/codevolution.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>codevolution</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/SimplilearnOfficial') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/simplilearn.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>simplilearn</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/edurekaIN') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/edureka.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>edureca!</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/Intellipaat') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/intelipaat.png')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>intelipaat</Text>
                            </View>
                        </Pressable>
                        <Pressable style={Styles.contaner} onPress={() => { Linking.openURL('https://www.youtube.com/c/CodeWithHarry') }}>
                            <View style={Styles.images}>
                                <Image style={Styles.frontendimg} source={require('../../assets/codewithharry.jpg')} />
                            </View>
                            <View style={Styles.aboutimage}>
                                <Text style={Styles.blue}>code with Harry</Text>
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
    startlearing: {
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
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 2
    },
    blue: {
        paddingTop: 2,
        paddingBottom: 4,
        paddingLeft: '25%'
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

export default YouTuber;