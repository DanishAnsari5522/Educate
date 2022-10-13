import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Linking } from 'react-native'
import Footer from '../Footer'
function Htmlcssjs() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.div}>
                    <View style={Styles.introhtml}>
                        <Text style={Styles.html}>Introduction to Html</Text>
                        <Text style={Styles.abouthtml}>Hyper Text Markup Language(html) is a mark-up Language use to build the skeleton of web page html is the
                    first things you should learn if you are things to learn web development. watch video and start learing </Text>
                    </View>
                    <View style={Styles.pre}>
                        <Text style={Styles.html}>Pre-requisite </Text>
                        <Text style={Styles.prereq}>.No pre-requisite Required</Text>
                    </View>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/playlist?list=PL0b6OzIxLPbxStBQ21C2toa5uQMqHEoRT') }}>
                        <Text style={Styles.html}>YouTubeTutorial Video</Text>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>Html</Text>
                    </Pressable>
                </View>

                <View style={Styles.div}>
                    <View style={Styles.introhtml}>
                        <Text style={Styles.html}>Introduction to Css</Text>
                        <Text style={Styles.abouthtml}>
                            cascading style sheet (css) is a very powerful styling sheet used to make web pages colorful and design and look better this is the second thing you should learn at first you dont have to become expert but learn basics watch approx 50-60 vidoes of the playlist to move further to learn to JavaScript .css is a bridge between html and JavaScript you have to learn html to learn css and you should be knowning css to learn JavaScript
                </Text>
                    </View>
                    <View style={Styles.pre}>
                        <Text style={Styles.html}>Pre-requisite </Text>
                        <Text style={Styles.prereq}>.HTML</Text>
                    </View>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/playlist?list=PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw') }}>
                        <Text style={Styles.html}>YouTubeTutorial Video</Text>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>CSS</Text>
                    </Pressable>
                </View>

                <View style={Styles.div}>
                    <View style={Styles.introhtml}>
                        <Text style={Styles.html}>Introduction to JavaScript</Text>
                        <Text style={Styles.abouthtml}>
                            JavaScript is a very powerful and popular language owned by according to Wikipedia Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[10] Over 97% of websites use it client-side for web page behavior,[11] often incorporating third-party libraries.[12] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)</Text>
                    </View>
                    <View style={Styles.pre}>
                        <Text style={Styles.html}>Pre-requisite </Text>
                        <Text style={Styles.prereq}>.HTML</Text>
                        <Text style={Styles.prereq}>.CSS</Text>
                    </View>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/playlist?list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf') }}>
                        <Text style={Styles.html}>YouTubeTutorial Video</Text>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>JavaScript Basic</Text>
                    </Pressable>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/playlist?list=PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG') }}>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>JavaScript Advance(ES6)</Text>
                    </Pressable>
                </View>

            </View>
            <Footer />
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    mainview: {
        marginTop: 0,
        backgroundColor: 'rgb(235, 231, 231)'
    },
    div: {
        marginBottom: 25
    },
    // Html 
    introhtml: {
        width: 'auto',
        margin: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 2


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
    pre: {
        width: 'auto',
        margin: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 35,
        paddingBottom: 35,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 2

    },
    prereq: {
        marginLeft: 20,
        fontSize: 13
    },
    ytvideo: {
        width: 'auto',
        margin: 20,
        elevation: 2
    },
    ytimg: {
        alignSelf: 'center',
        width: 350,
        borderRadius: 5,

    },
    imgtitle: {
        marginLeft: 40,
        fontSize: 13,
        marginTop: 5
    },

})

export default Htmlcssjs