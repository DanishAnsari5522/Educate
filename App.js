// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import Html from './component/frontend/Htmlcssjs';
import SeeMoreRoadmap from './component/See more/SeeMoreRoadmap';
import SeeMoreFrontend from './component/See more/SeeMoreFrontend';
import YouTuber from './component/See more/YouTuber';
import BackEnd from './component/See more/BackEnd';
import Angular from './component/frontend/Angular';
import Reactjs from './component/frontend/React';
import Vue from './component/frontend/Vue';
import AngularMaterial from './component/frontend/AngularMaterial';
import Php from './component/frontend/Php';
import Node from './component/frontend/Node';
import Python from './component/frontend/Python';
import Ruby from './component/frontend/Ruby';
import FrontEndRoadmap from './component/frontend/FrontEnd';
import BackEndRoadmap from './component/frontend/BackEnd';
import FullStackRoadmap from './component/frontend/FullStack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    // headerShown: false
  }}>
  
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HTML CSS JS" component={Html} />
        <Stack.Screen name="FrontEnd RoadMap" component={FrontEndRoadmap} />
        <Stack.Screen name="BackEnd RoadMap" component={BackEndRoadmap} />
        <Stack.Screen name="FullStack RoadMap" component={FullStackRoadmap} />
        <Stack.Screen name="SeeMoreRoadmap" component={SeeMoreRoadmap} />
        <Stack.Screen name="FrontEnd" component={SeeMoreFrontend} />
        <Stack.Screen name="YouTuber" component={YouTuber} />
        <Stack.Screen name="BackEnd" component={BackEnd} />
        <Stack.Screen name="Angular" component={Angular} />
        <Stack.Screen name="React" component={Reactjs} />
        <Stack.Screen name="Vue" component={Vue} />
        <Stack.Screen name="AngularMaterial" component={AngularMaterial} />
        <Stack.Screen name="Php" component={Php} />
        <Stack.Screen name="Node" component={Node} />
        <Stack.Screen name="Python" component={Python} />
        <Stack.Screen name="Ruby" component={Ruby} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;