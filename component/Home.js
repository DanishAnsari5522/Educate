import React from 'react'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, Linking, DropShadow, Pressable } from 'react-native';
import Footer from './Footer'

function Home({ navigation }) {

    return (
        <ScrollView style={Styles.mt}>
            <ScrollView horizontal={true} style={Styles.course} showsHorizontalScrollIndicator={false} >
                <Pressable onPress={() => { navigation.navigate("HTML CSS JS") }}>
                    <Image style={Styles.wh} source={{ uri: 'data:image/png;base64,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', }} />
                    <Text style={Styles.blue}><Text style={Styles.t}>Start your career in web dev by learning Html5,Css3,JavaScript....</Text>  </Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("FrontEnd RoadMap") }}>
                    <Image style={Styles.wh} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXv33v21tavSn4Kgv_0MljV3ufbV3j5GVpzcLCRYzqtN341_MCAOpOLMCkuyWIm_t2iHE&usqp=CAU', }} />
                    <Text style={Styles.blue}>Complete Roadmap to become job ready frontend developer....</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("BackEnd RoadMap") }}>
                    <Image style={Styles.wh} source={{ uri: 'https://codeworkshop.dev/static/8a5b2989e06c0d8376faabd9a879dbf9/2706c/frontendbackend.jpg', }} />
                    <Text style={Styles.blue}>Complete Roadmap to become job read backend developer....</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("FullStack RoadMap") }}>
                    <Image style={Styles.wh} source={{ uri: 'data:image/png;base64,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', }} />
                    <Text style={Styles.blue}>Complete Roadmap to become job read full satck web developer....</Text>
                </Pressable>
            </ScrollView>
            <View style={Styles.seemoreview} style={Styles.test}>
                <Text style={Styles.seemore} onPress={() => { navigation.navigate("SeeMoreRoadmap") }}>See More Roadmap</Text>

            </View>
            <View style={Styles.frontenddev}>
                <Text style={Styles.frontend}>FrontEnd Development</Text>
                <View style={Styles.rowds} >
                    <View style={{ flexWrap: 'wrap', flex: 1, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }} >
                        <View style={Styles.contaner} >
                            <Pressable onPress={() => { navigation.navigate("Angular") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/angular.png')} />
                            </Pressable>
                        </View>
                        <View style={Styles.contaner} >
                            <Pressable onPress={() => { navigation.navigate("React") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/react.png')} />
                            </Pressable>
                        </View>
                        <View style={Styles.contaner}>
                            <Pressable onPress={() => { navigation.navigate("Vue") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/vuejs.png')} />
                            </Pressable>
                        </View>
                        <View style={Styles.contaner} >
                            <Pressable onPress={() => { navigation.navigate("AngularMaterial") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/material.png')} />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={Styles.seemoreview}>
                    <Text style={Styles.seemore} onPress={() => { navigation.navigate("FrontEnd") }}>See More</Text>
                </View>

            </View>
            <View>
                <Text style={Styles.frontend}>You Tube Channels</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/yahoobaba') }}>
                        <Image style={Styles.ytimg} source={require('../assets/yahoobaba.jpg')} />
                        <Text style={Styles.Channelname}>Yahoo baba</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/kudvenkat') }}>
                        <Image style={Styles.ytimg} source={require('../assets/kudvenkat.jpg')} />
                        <Text style={Styles.Channelname}>Kudvenkat</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/c/Freecodecamp') }}>
                        <Image style={Styles.ytimg} source={require('../assets/freecodecap.png')} />
                        <Text style={Styles.Channelname}>freecodecamp</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/c/CodingAddict') }}>
                        <Image style={Styles.ytimg} source={require('../assets/coddingaddict.jpg')} />
                        <Text style={Styles.Channelname}>Codding Addict</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/c/programmingwithmosh') }}>
                        <Image style={Styles.ytimg} source={require('../assets/mosh.jpg')} />
                        <Text style={Styles.Channelname}>Programming with mosh</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/c/Codevolution') }}>
                        <Image style={Styles.ytimg} source={require('../assets/codevolution.png')} />
                        <Text style={Styles.Channelname}>codevolution</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/c/SimplilearnOfficial') }}>
                        <Image style={Styles.ytimg} source={require('../assets/simplilearn.png')} />
                        <Text style={Styles.Channelname}>Simpli learn</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/c/edurekaIN') }}>
                        <Image style={Styles.ytimg} source={require('../assets/edureka.png')} />
                        <Text style={Styles.Channelname}>edureka</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => { Linking.openURL('https://www.youtube.com/c/Intellipaat') }}>
                        <Image style={Styles.ytimg} source={require('../assets/intelipaat.png')} />
                        <Text style={Styles.Channelname}>intelipaat</Text>
                    </Pressable>
                    <Pressable style={Styles.Channel} onPress={() => Linking.openURL('https://www.youtube.com/c/CodeWithHarry')}>
                        <Image style={Styles.ytimg} source={require('../assets/codewithharry.jpg')} />
                        <Text style={Styles.Channelname}>code with harry</Text>
                    </Pressable>
                </ScrollView>
                <View style={Styles.seemoreview} style={Styles.test} >
                    <Text style={Styles.seemore} onPress={() => { navigation.navigate("YouTuber") }}>See More</Text>
                </View>
            </View>
            {/* backend */}
            <View style={Styles.frontenddev}>

                <Text style={Styles.frontend}>BackEnd Development</Text>
                <View style={Styles.rowds} >
                    <View style={{ flexWrap: 'wrap', flex: 1, alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }} >
                        <View style={Styles.contaner}>
                            <Pressable onPress={() => { navigation.navigate("Php") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/php.png')} />
                            </Pressable >
                        </View>
                        <View style={Styles.contaner}>
                            <Pressable onPress={() => { navigation.navigate("Node") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/node.png')} />
                            </Pressable>
                        </View>
                        <View style={Styles.contaner}>
                            <Pressable onPress={() => { navigation.navigate("Python") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/python.jpg')} />
                            </Pressable>
                        </View>
                        <View style={Styles.contaner}>
                            <Pressable onPress={() => { navigation.navigate("Ruby") }}>
                                <Image style={Styles.frontendimg} source={require('../assets/rupy.jpg')} />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={Styles.seemoreview}>
                    <Text style={Styles.seemore} onPress={() => { navigation.navigate("BackEnd") }}>See More</Text>
                </View>
                <Footer />
            </View>

        </ScrollView>
    )
}

const Styles = StyleSheet.create({
   
    mt: {
        marginTop: 0,
        backgroundColor: 'rgb(235, 231, 231)'

    },
    wh: {
        width: 250,
        height: 150,
        margin: 20,
        borderRadius: 10
    },
    nav: {
        width: 'auto',
        height: 50,
        color: 'blue',
        backgroundColor: 'blue'
    },
    course: {
        marginTop: 30,
    },
    t: {
        color: 'white',
        opacity: 1,
        fontSize: 12

    },
    blue: {

        width: 250,
        height: 50,
        position: 'absolute',
        bottom: 20,
        left: 20,
        alignContent: 'center',
        textAlign: 'center',
        width: 250,
        height: 50,
        opacity: 0.5,
        backgroundColor: 'gray',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,




    },
    //see more roadmap
    seemoreview: {
        width: 'auto',

    },
    seemoreroadmap: {
        display: 'flex',
        textAlign: 'right',
        marginRight: 20,
        color:'blue'
    },
    test:{
        marginTop:15
    },
    //front end development
    frontend: {
        marginLeft: 10,
        marginTop: 20,
        fontSize: 18,
    },
    rowds: {
        width: 'auto',
        height: 320,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5

    },
    contaner: {
        width: '45%',
        height: '50%',
        marginRight: 5,
        borderRadius: 5,
    },
    frontendimg: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        height: 130,
        borderRadius: 5
    },
    seemore: {
        display: 'flex',
        textAlign: 'right',
        marginRight: 20,
        marginTop: -10,
        color:'#5AA7A7',
        fontWeight:'bold'
    },
    //youtube video
    ytimg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red'
    },
    Channel: {
        width: 150,
        height: 170,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 2,

    },
    // developer information

})
export default Home;