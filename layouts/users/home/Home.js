import React from 'react';
import {
    DrawerNavigator,
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    NavigationActions
} from 'react-navigation'
import {Icon} from '@shoutem/ui'


//Do all imports found in react-native here
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import HollowView from './Hollow';

class HollowTab extends React.Component {
    static navigationOptions = {
        title: 'Hollow',
        tabBarLabel: 'Hollow',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (<Icon name="news" />),
    };

    render() {
        return <HollowView/>
    }
}

class EditTab extends React.Component {
    static navigationOptions = {
        title: 'Edit',
        tabBarLabel: 'Edit',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (<Icon name="edit" />),
    };

    render() {
        return <Text>Editing</Text>
    }
}

class ProfileTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (<Icon name="user-profile" />),
    };

    render() {
        return <Text>Videos</Text>
    }

}


const HomeTabs = TabNavigator({
    Hollow: {
        screen: HollowTab,
    },
    Edit:{
        screen: EditTab,
    },
    Profile: {
        screen: ProfileTab,
    },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        //Thick teal #094545
        // showLabel: false,
        // activeBackgroundColor: '#004A7C',
        // inactiveTintColor: '#005691',
        // activeTintColor: '#E8F1F5',
        activeTintColor: '#548ff7',
        activeBackgroundColor: 'transparent',
        // inactiveTintColor: '#ffffff',
        // inactiveBackgroundColor: 'transparent',

    }
});


const HomeScreen = StackNavigator({
    HomeTabs: {
        screen: HomeTabs,
        navigationOptions: ({navigation}) => ({
            // title :'title',
            // headerRight:'put some component here',
            // headerLeft:'put some component here',
            headerTintColor: '#000' +
            '',
            headerStyle: {backgroundColor: '#ffffff',},


        })
    },
});


export default HomeScreen;