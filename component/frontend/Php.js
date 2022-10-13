import { View, Text, StyleSheet, Image, ScrollView, Pressable ,Linking} from 'react-native'
import Footer from '../Footer'

function Php() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.div}>
                    <View style={Styles.introhtml}>
                        <Text style={Styles.html}>Introduction to   Php</Text>
                        <Text style={Styles.abouthtml}>PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.What distinguishes PHP from something like client-side JavaScript is that the code is executed on the server, generating HTML which is then sent to the client. The client would receive the results of running that script, but would not know what the underlying code was. You can even configure your web server to process all your HTML files with PHP, and then there's really no way that users can tell what you have up your sleeve..</Text>
                    </View>
                    <View style={Styles.pre}>
                        <Text style={Styles.html}>Pre-requisite </Text>
                        <Text style={Styles.prereq}>.HTML</Text>
                        <Text style={Styles.prereq}>.CSS</Text>
                        <Text style={Styles.prereq}>.JavaScript</Text>
                    </View>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/playlist?list=PL0b6OzIxLPbyrzCMJOFzLnf_-_5E_dkzs') }}>
                        <Text style={Styles.html}>YouTubeTutorial Video</Text>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>Php</Text>
                    </Pressable>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/playlist?list=PL0b6OzIxLPbwoi6Urr4LZTz2AMMCtzqDt') }}>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>Php OOPs</Text>
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


export default Php;