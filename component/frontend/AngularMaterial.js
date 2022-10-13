import { View, Text, StyleSheet, Image, ScrollView, Pressable ,Linking} from 'react-native'
import Footer from '../Footer'
import Angular from './Angular';

function AngularMaterial() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <View style={Styles.div}>
                    <View style={Styles.introhtml}>
                        <Text style={Styles.html}>Introduction to  Angular Material</Text>
                        <Text style={Styles.abouthtml}>ngular Material is a UI component library for Angular developers. Angular Material components help in constructing attractive, consistent, and functional web pages and web applications while adhering to modern web design principles like browser portability, device independence, and graceful degradation.</Text>
                    </View>
                    <View style={Styles.pre}>
                        <Text style={Styles.html}>Pre-requisite </Text>
                        <Text style={Styles.prereq}>.HTML</Text>
                        <Text style={Styles.prereq}>.CSS</Text>
                        <Text style={Styles.prereq}>.JavaScript(ES6)</Text>
                        <Text style={Styles.prereq}>.Angular</Text>
                    </View>
                    <Pressable style={Styles.ytvideo} onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=jUfEn032IL8') }}>
                        <Text style={Styles.html}>YouTubeTutorial Video</Text>
                        <Image style={Styles.ytimg} source={require('./yt.png')} />
                        <Text style={Styles.imgtitle}>Angular Material</Text>
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


export default AngularMaterial;