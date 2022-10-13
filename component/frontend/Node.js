import { View, Text, StyleSheet, Image, ScrollView, Pressable ,Linking} from 'react-native'
import Footer from '../Footer'

function Node() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.div}>
                    <View style={Styles.introhtml}>
                        <Text style={Styles.html}>Introduction to  NodeJs</Text>
                        <Text style={Styles.abouthtml}>According to Wikipedia Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</Text>
                    </View>
                    <View style={Styles.pre}>
                        <Text style={Styles.html}>Pre-requisite </Text>
                        <Text style={Styles.prereq}>.JavaScript(ES6)</Text>
                    </View>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=TNV0_7QRDwY') }}>
                        <Text style={Styles.html}>YouTubeTutorial Video</Text>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>NodeJs ( part 1 of complete)</Text>
                    </Pressable>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=RLtyhwFtXQA&feature=youtu.be') }}>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>Nodejs(comprehensive 3 hour course)</Text>
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


export default Node;