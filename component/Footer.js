import {View,Text,StyleSheet} from 'react-native'

function Footer()
{
    return(
        <View style={Styles.devinfo}>
                <Text style={Styles.aboutdev}>
                    About
                </Text>
                <Text style={Styles.aboutpara}>
                    This App will collect best tutorial video present in youtube on different topics to overcome the effort to search best video for you study on a topic
                </Text>
                <Text style={Styles.aboutdev}>
                    Developer Contact
                </Text>
                <Text style={Styles.name}>Danish Ansari</Text>
                <Text style={Styles.soft}>Software Engineer</Text>
                <Text style={Styles.aboutpara}>dsdanishansari1117@gmail.com</Text>
            </View>
    )
}

const Styles = StyleSheet.create({
    devinfo: {
        width: 'auto',
        backgroundColor: 'black',
        color: 'white',
        padding: 20,
        marginTop: 30
    },

    aboutdev: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        color: 'white'
    },
    aboutpara: {
        color: 'white'
    },
    soft:{
        color: 'white',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: 'white',
        marginTop: 10
    }
})

export default Footer;