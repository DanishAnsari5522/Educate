import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Footer from '../Footer'
function FrontEnd() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <Text style={Styles.roadmap}>Roadmap to become FrontEnd Web Developer</Text>
                <Text style={Styles.aboutroadmap}>you can start you journey to become frontend developer by learning basics, i have listed the things which you should start learning from today if you wish to become a web developer.You will get the video tutorial links related to the topic which is listed below amf from the best teacher on youtube which is absolutely free</Text>
                <View>
                    <FlatList style={Styles.list}
                        data={[
                            { key: 'html5',value:'1' },
                            { key: 'css3',value:'2'  },
                            { key: 'JavaScript',value:'3'  },
                            { key: 'Angular',value:'4'  },
                            { key: 'React' ,value:'5' },
                            { key: 'Vuejs',value:'6'  },
                            { key: 'version Control system (git)' ,value:'7' },
                            { key: 'source code management (github)',value:'8'  }
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
        marginTop:20
    },
    listitem:{
        marginTop:7
    }

})

export default FrontEnd;