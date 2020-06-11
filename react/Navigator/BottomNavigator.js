import React from 'react'
import Native from 'react-native'
import HomeScreen from '../Screens/Home/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
class BottomNavigator extends React.Component{
    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        );
    }
}
export default BottomNavigator
