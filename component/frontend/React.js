import { View, Text, StyleSheet, Image, ScrollView, Pressable,Linking } from 'react-native'
import Footer from '../Footer'

function React() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.div}>
                    <View style={Styles.introhtml}>
                        <Text style={Styles.html}>Introduction to  ReactJs</Text>
                        <Text style={Styles.abouthtml}>ReactJs is a JavaScript library Developed at Facebook used for making frotend web apps. ReactJs is very fast and easy to learn .ReactJs is getting more and more popular then angular and there are a lots of internship and job opportunity presents in the world. Leaening React is fun when you do coding along with videos and make projects along with the tutorial there is a video for 10 behiner to advance label project by the same teacher/youtuber .Go watch and start learning</Text>
                    </View>
                    <View style={Styles.pre}>
                        <Text style={Styles.html}>Pre-requisite </Text>
                        <Text style={Styles.prereq}>.HTML</Text>
                        <Text style={Styles.prereq}>.CSS</Text>
                        <Text style={Styles.prereq}>.JavaScript(ES6)</Text>
                    </View>
                    <Pressable style={Styles.ytvideo}  onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=iZhV0bILFb0&feature=youtu.be') }}>
                        <Text style={Styles.html}>YouTubeTutorial Video</Text>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>React Js full course</Text>
                    </Pressable>
                    <Pressable style={Styles.ytvideo}  onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=ly3m6mv5qvg&feature=youtu.be') }}>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>Projects on ReactJs</Text>
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
        elevation:2
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


export default React;