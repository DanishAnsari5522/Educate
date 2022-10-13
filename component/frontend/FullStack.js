import { View, Text, StyleSheet, ScrollView, FlatList }from 'react-native';
import Footer from '../Footer'
function FullStack() {
    return (
        <ScrollView>
            <View style={Styles.mainview}>
                <Text style={Styles.roadmap}>Roadmap to become FrontEnd Web Developer</Text>
                <Text style={Styles.aboutroadmap}>After Learning Frontend and backend its time to ho for full stack development here are the listed things you need to learn to become full stack developer</Text>
                <View>
                    <FlatList style={Styles.list}
                        data={[
                            {key:'Frontend',value:'1'},
                            { key: 'Backend',value:'2' },
                            { key: 'Database',value:'3'  },
                            { key: 'DevOps',value:'4'  },
                            { key: 'Mobile App',value:'5'}
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
        marginBottom:120
    },
    listitem:{
        marginTop:7
    }
})

export default FullStack;