import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
 import Footer from '../Footer';
function BackEnd() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <Text style={Styles.roadmap}>Roadmap to become FrontEnd Web Developer</Text>
                <Text style={Styles.aboutroadmap}>After Learning Frontend or basic html,css, JavaScript, you can start one of the course from listed below to become backend developer</Text>
                <View>
                    <FlatList style={Styles.list}
                        data={[
                            { key: 'php',value:'1' },
                            { key: 'Nodejs',value:'2'  },
                            { key: 'Ruby',value:'3'  },
                            { key: 'Python',value:'4'  },
                            { key: 'Laravel(Php framework)' ,value:'5' },
                            { key: 'Django(Puthon framework)',value:'6'  },
                            { key: 'ExpressJs(Nodejs framework)' ,value:'7' }
                        ]}
                        renderItem={({ item }) => <Text style={Styles.listitem}> {item.value}  {item.key}</Text>}
                    />
                </View>
            </View>
            <Footer />
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    mainview: {
        margin: 20
    },

    roadmap: {
        fontWeight: 'bold'
    },
    aboutroadmap: {
        marginTop: 20,
        lineHeight:25,
        letterSpacing:1,
        fontFamily:'serif',
    },
    list:{
        marginTop:20,
        marginBottom:65
    },
    listitem:{
        marginTop:7
    }

})

export default BackEnd;